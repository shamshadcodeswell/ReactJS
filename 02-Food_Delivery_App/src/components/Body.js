import { API_URL, CLOUD_IMG, LOADMORE_URL } from "../../utils/constants";
import dataList from "../../utils/mock-data";
import { useEffect, useState, useRef } from "react";
import BodyShimmer from "./BodyShimmer";

const Card = ({ dataList }) => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    locality,
    sla,
    cuisines,
    costForTwo,
  } = dataList.info;
  let slaString = sla.slaString;
  const image = CLOUD_IMG + cloudinaryImageId;
  return (
    <div className="card">
      <img
        className="restaurant-image"
        alt="restaurant-image"
        src={image}
      ></img>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{locality}</h4>
      <h4>{slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  const [resList, setResList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextOffset, setNextOffset] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [csrfToken, setCsrfToken] = useState("");

  const sentinal = useRef(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(API_URL);
      const json = await data.json();
      console.log(json.csrfToken);
      setNextOffset(json.data.pageOffset.nextOffset);
      setCsrfToken(json.csrfToken);
      setResList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
      setFilteredResList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
    };
    getData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });
    if (sentinal.current) observer.observe(sentinal.current);
    return () => observer.disconnect();
  }, [nextOffset, isLoading, hasMore]);

  if (resList.length === 0) {
    return <BodyShimmer />;
  }

  const loadMore = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    const data = await fetch(LOADMORE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lat: 28.7077393,
        lng: 77.10758919999999,
        nextOffset: nextOffset,
        page_type: "DESKTOP_WEB_LISTING",
        filters: {},
        seoParams: {
          seoUrl: "https://www.swiggy.com/restaurants",
          pageType: "FOOD_HOMEPAGE",
          apiName: "FoodHomePage",
        },
        widgetOffset: {
          NewListingView_category_bar_chicletranking_TwoRows: "",
        },
        _csrf: csrfToken, // ← problem child, see below
      }),
    });

    const json = await data.json();
    console.log(json);

    const newOffset = json.data.pageOffset.nextOffset;
    const newRestaurants =
      json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    setResList((prev) => [...prev, ...newRestaurants]);
    setFilteredResList((prev) => [...prev, ...newRestaurants]);
    setNextOffset(newOffset);
    if (!newOffset) setHasMore(false);
    setIsLoading(false);
  };

  return (
    <div className="app-body">
      <input
        className="button"
        type="text"
        placeholder="search"
        // value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          const filteredList = resList.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase()),
          );
          setFilteredResList(filteredList);
        }}
      >
        search
      </button>
      <h2>Restaurants Near You</h2>
      <button
        className="button"
        onClick={() => {
          const filteredList = resList.filter(
            (res) => res.info.avgRating >= 4.5,
          );
          setFilteredResList(filteredList);
        }}
      >
        {" "}
        Filter Top Restaurants{" "}
      </button>
      <div className="card-container">
        {filteredResList.map((restaurant) => (
          <Card key={restaurant.info.id} dataList={restaurant} />
        ))}
      </div>
      <div ref={sentinal}></div>
    </div>
  );
};

export default Body;

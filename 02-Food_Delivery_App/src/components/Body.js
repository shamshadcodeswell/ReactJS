import { API_URL, CLOUD_IMG, LOADMORE_URL } from "../../utils/constants";
// import dataList from "../../utils/mock-data";
import { useEffect, useState, useRef } from "react";
import BodyShimmer from "./BodyShimmer";
import { Link } from "react-router-dom";

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
  const [hasMore, setHasMore] = useState(true);
  const [moreRestaurants, setMoreRestaurants] = useState([]);

  const sentinal = useRef(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(API_URL);
      const json = await data.json();
      setResList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
      setFilteredResList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
      setMoreRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
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
    if (sentinal.current) {
      observer.observe(sentinal.current);
      console.log("observer attached");
    }
    return () => observer.disconnect();
  }, [resList]);

  if (resList.length === 0) {
    return <BodyShimmer />;
  }

  const loadMore = () => {
    if (!hasMore) return;
    console.log("loadMore fired, moreRestaurants:", moreRestaurants.length);

    setFilteredResList((prev) => {
      const seen = new Set(prev.map((r) => r.info.id));
      const fresh = moreRestaurants.filter((r) => !seen.has(r.info.id));
      return [...prev, ...fresh];
    });
    setHasMore(false);
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
          <Link to="/restaurant/2" key={restaurant.info.id}>
            <Card dataList={restaurant} />
          </Link>
        ))}
      </div>
      <div ref={sentinal}></div>
    </div>
  );
};

export default Body;

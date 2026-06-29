import MOCK_RES from "../../utils/mockdata";
import { useState, useEffect } from "react";
import BodyShimmer from "./BodyShimmer";
const Restaurant = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setData(MOCK_RES);
  };

  const info = data?.data?.cards?.[2]?.card?.card?.info;

  if (!data) return <BodyShimmer />;
  const name = info.name;
  const rating = info.avgRating;
  const cuisines = info.cuisines;
  const locality = info.areaName;
  const cost = info.costForTwoMessage;
  const dishes =
    data.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  console.log(dishes);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{rating}</h2>
      <h2>{locality}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{cost}</h3>
      <div className="menu">
        {dishes.map((d) => (
          <div className="dish" key={d.card.info.id}>
            <h4>{d.card.info.name}</h4>
            <p>₹{d.card.info.price / 100}</p>
            <p>{d.card.info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;

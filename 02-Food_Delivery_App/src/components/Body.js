import dataList from "../../utils/mock-data";
import { useState } from "react";
const Card = (props) => {
  const { image, name, rating } = props.dataList;
  return (
    <div className="card">
      <img
        className="restaurant-image"
        alt="restaurant-image"
        src={image}
      ></img>
      <h3>{name}</h3>
      <h3>{rating}</h3>
    </div>
  );
};

const Body = () => {
  const [resList, setResList] = useState(dataList);
  return (
    <div className="app-body">
      <h2>search</h2>
      <h2>Restaurants Near You</h2>
      <button
        className="button"
        onClick={() => {
          const filteredResList = resList.filter((res) => res.rating > 4);
          setResList(filteredResList);
        }}
      >
        {" "}
        Filter Top Restaurants{" "}
      </button>
      <div className="card-container">
        {resList.map((restaurant) => (
          <Card key={restaurant.position} dataList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import dataList from "../../utils/mock-data";
const Card = (props) => {
  const { image, name } = props.dataList;
  return (
    <div className="card">
      <img
        className="restaurant-image"
        alt="restaurant-image"
        src={image}
      ></img>
      <h3>{name}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="app-body">
      <h2>search</h2>
      <h2>Restaurants Near You</h2>
      <div className="card-container">
        {dataList.map((restaurant) => (
          <Card key={restaurant.position} dataList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

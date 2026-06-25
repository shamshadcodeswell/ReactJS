const BodyShimmer = () => {
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
          const filteredResList = resList.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase()),
          );
          setResList(filteredResList);
        }}
      >
        search
      </button>
      <h2>Restaurants Near You</h2>
      <button
        className="button"
        onClick={() => {
          const filteredResList = resList.filter(
            (res) => res.info.avgRating >= 4.5,
          );
          setResList(filteredResList);
        }}
      >
        {" "}
        Filter Top Restaurants{" "}
      </button>
      <div className="shimmer-container">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-line title"></div>
              <div className="shimmer-line short"></div>
              <div className="shimmer-line medium"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BodyShimmer;

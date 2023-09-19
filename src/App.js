import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodLike = [
  {
    id: 1,
    name: "sanchou",
    image: "사진1",
    rating: 4.9,
  },
  {
    id: 2,
    name: "babo",
    image: "사진2",
    rating: 4.6,
  },
  {
    id: 3,
    name: "mungmung",
    image: "사진3",
    rating: 3.1,
  },
];

function renderFood(wow) {
  return (
    <Food
      key={wow.id}
      name={wow.name}
      picture={wow.image}
      rating={wow.rating}
    />
  );
}

function App() {
  return <div>{foodLike.map(renderFood)}</div>;
}

export default App;

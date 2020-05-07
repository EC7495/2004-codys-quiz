import React from 'react';

export default class FavoriteFoods extends React.Component {
  render() {
    return (
      <div>
        <h1>Favorite Foods</h1>
        <ul id="food-list">
          {this.props.foods.map(elem => {
            return <li key={elem.id}>{elem.item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

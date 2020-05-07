import React from 'react';
import Profile from './Profile';
import FavoriteFoods from './FavoriteFoods';

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteFoods: [],
      pugProfile: {},
    };
  }
  render() {
    return (
      <div id="clubhouse-homepage">
        <Profile pugProfile={this.state.favoriteFoods} />
        <FavoriteFoods favoriteFoods={this.state.pugProfile} />
      </div>
    );
  }
}

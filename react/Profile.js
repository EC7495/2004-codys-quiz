import React from 'react';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile for {this.props.profile.name}</h1>
        <p>Age: {this.props.profile.age}</p>
        <div className="desc">{this.props.profile.description}</div>
      </div>
    );
  }
}

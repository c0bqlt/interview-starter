import React, { Component } from 'react';
import DogList from '../components/DogList';

class dogWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dogs: data.message });
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Dog World</h1>
        <DogList dogs={this.state.dogs} />
        <button>Load other images</button>
      </div>
    );
  }
}

export default dogWorld;

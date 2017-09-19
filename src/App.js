import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.io/reactjs/redux/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = (searchTerm) => (item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Nate',
      list,
      searchTerm: ''
    }

    this.onDimiss = this.onDimiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDimiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList});
  }

  onSearchChange(event){
    this.setState( {searchTerm: event.target.value});
  }

  render() {

    const { searchTerm, list } = this.state;

    return (
      <div className="App">
        <h2>Hey, {this.state.firstName}</h2>
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}/>
        </form>
        {
          list.filter(isSearched(searchTerm)).map(item => {
            return (
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>,{item.num_comments}</span>
                <span>,{item.points} </span>
                <span>
                  <button
                    onClick={() => this.onDimiss(item.objectID)}
                    type="button">
                    Dismiss
                  </button>
                </span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;


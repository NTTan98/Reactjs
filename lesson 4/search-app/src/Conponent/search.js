import React from "react";
import "./search.scss";

class Search extends React.Component {
  state = {
    listItems: [],
    searchKey: "",
  };
  async componentDidMount() {
    // fetch("https://swapi.dev/api/people/")
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     this.setState({
    //       listItems: data.results,
    //     });
    //   });
    let response = await fetch("https://swapi.dev/api/people/");
    let data = await response.json();
    this.setState({
      listItems: data.results,
    });
  }
  HandleOnChange = (event) => {
    this.setState({
      searchKey: event.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="container__Search">
            <input
              type="text"
              className="search__data"
              placeholder="Name"
              required
              onChange={(event) => this.HandleOnChange(event)}
            ></input>
          </div>
          <div className="container__results">
            {this.state.listItems
              .filter((item) => {
                if (this.state.searchKey === "") {
                  return item;
                } else if (
                  item.name
                    .toLowerCase()
                    .includes(this.state.searchKey.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((character) => (
                <div key={character.name}>{character.name}</div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

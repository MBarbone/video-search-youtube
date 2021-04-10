import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar" style={{ marginTop: "25px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <div className="ui action input">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
                placeholder="Search.."
              />
              <button className="ui button">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

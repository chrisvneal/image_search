import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };
  // when this form is submitted...
  onFormSubmit = (e) => {
    e.preventDefault(); // prevent default behavior

    // ... submit whole term to function in App component
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              // when input field changes, store changes in state object
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

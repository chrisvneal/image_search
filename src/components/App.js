import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  // state objects stores application data
  state = { images: [] };

  // onSearchSubmit invoked when search term is submitted
  onSearchSubmit = async (term) => {
    // request data from the Unsplash API, capture in variable
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });

    // store response in stabe object by using its setState() function and the API response
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

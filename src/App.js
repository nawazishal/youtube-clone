import React from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./Components/SearchBar";
import VideoDetails from "./Components/VideoDetails";
import youtube from "./Components/Youtube";
import VideoList from "./Components/VideoList";


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "api key",
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="container" >
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetails video={this.state.selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

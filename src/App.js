import React from "react";
import SearchBar from "./Components/SearchBar";
import VideoDetails from "./Components/VideoDetails";
import youtube from "./Components/Youtube";
import VideoList from "./Components/VideoList";
import { Table } from "reactstrap";

import "./App.css";

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
        maxResults: 5,
        key: "AIzaSyBVT733wmdZpX-Ah5hmddJulffuvOfOiE4",
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
      <div className="container">
        <Table>
          <thead width="100%">
            <tr>
              <th>
                {" "}
                <SearchBar onFormSubmit={this.handleSubmit} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="th">
                {" "}
                <VideoDetails video={this.state.selectedVideo} />
              </td>
              <td>
                {" "}
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;


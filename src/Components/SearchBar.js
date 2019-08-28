import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }
  handleChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    this.setState({
      searchTerm : ''
    })

    event.preventDefault();
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div elevation={6} style={{ padding: "10px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            value={searchTerm}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

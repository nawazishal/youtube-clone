import React, { Component } from "react";
import logo from "./youtube-logo.png";
import { Navbar, Nav, NavItem } from "reactstrap";

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
    event.preventDefault();
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <Navbar>
          <Nav className="ml-auto" Navbar>
            <NavItem>
              <img src={logo} alt="logo" className="logo" />
              <form onSubmit={this.handleSubmit}>
                <input
                  className="input"
                  type="text"
                  placeholder="Search.."
                  value={searchTerm}
                  onChange={this.handleChange}
                />
              </form>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;

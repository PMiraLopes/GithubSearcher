import React, { Component, PropTypes } from 'react';

class Search extends Component {
  static propTypes = {
    handleClick: PropTypes.func,
  }

  state = {
      repositoryName: '',
  }

  handleChange = (event) => {
    this.setState({ repositoryName: event.target.value });
  }

  handleClick = () => {
    this.props.handleClick(this.state.repositoryName);
  }

  render () {
    return (
      <div className="search-area">
        <input 
          type="text"
          name="search"
          placeholder="Search username..."
          value={this.state.repositoryName}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;

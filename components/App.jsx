import React, { Component } from 'react';
import Error from './Error.jsx';
import Search from './Search.jsx';
import Informations from './Informations.jsx';

class App extends Component {
  state = {
    user: undefined,
  }

  searchUser = (name) => {
    const xmlHttp = new XMLHttpRequest();
    const url = 'https://api.github.com/users/' + name;
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);

    if (xmlHttp.status === 200 && xmlHttp.readyState === 4) {
      return JSON.parse(xmlHttp.responseText);
    } else {
      console.log("entrei no caso de nao ter");
      return null;
    }
  }

  searchUserRepo = (name) => {
    const xmlHttp = new XMLHttpRequest();
    const url = 'https://api.github.com/users/' + name +'/repos';
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);

    if (xmlHttp.status === 200 && xmlHttp.readyState === 4) {
     return JSON.parse(xmlHttp.responseText);
    } else {
      return null;
    }
  }

  handleSearch = (name) => {
    if(name === '')
      return;

    const newUserInfo = this.searchUser(name);
    const newRepos = this.searchUserRepo(name);
  
    if(newUserInfo === null || newRepos === null){
      this.setState({ user: null });
      return;
    }

    const newUser = {
      information: newUserInfo,
      repositories: newRepos,
    }

    this.setState({
      user: newUser
    });
  }

  render() {
    const user = this.state.user == null ? <Error /> : <Informations userData={this.state.user}/>;
    const informations = this.state.user === undefined ? '' : user;

    return (
      <div className="container">
        <Search
          handleClick={this.handleSearch}
        />
        {informations}
      </div>
    );
  }
}

export default App;

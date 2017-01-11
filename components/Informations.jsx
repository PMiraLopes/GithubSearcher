import React, { Component, PropTypes } from 'react';

const propTypes = {
  userData: PropTypes.object,
}

const Informations = (props) => {
  const { userData } = props;
  return (
    <div className="user-informations">
      <div className="user-details">
        <div className="user-details-img">
          <img src={userData.information.avatar_url} alt="user image" />
        </div>
        <div className="user-details-infos">
          <span id="username">@{userData.information.login}</span>
          <h1 id="fullName">{userData.information.name}</h1>
          <p id="bio">{userData.information.bio}</p>
        </div>
        </div>
        <div className="user-repositories">
          <h4>Repositories</h4>
          <ul id="repositories">
            {userData.repositories.map((el) => {
              return <li key={`repo-key-${el.id}`}>
                <div className="repository-name">
                  {el.name}
                </div>
                <div className="repository-info">
                  <span className="octicon octicon-star"></span>
                  <span>
                    {el.stargazers_count}
                  </span>
                  <span className="octicon octicon-repo-forked"></span>
                  <span>
                    {el.forks}
                  </span>
                </div>
              </li>;
            })}
          </ul>
        </div>
      </div>
  );
}

Informations.propTypes = propTypes;

export default Informations;

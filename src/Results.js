import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.usuario,
      repos: []
    };
  }

  async componentDidMount() {
    await axios
      .get(`https://api.github.com/users/${this.state.username}/repos`)
      .then(repos => {
        this.setState({ repos: repos.data });
      })
      .catch(err => {
        alert(err);
      });
    console.log(this.state.repos);
  }

  render() {
    return (
    <div className = "container">
        <Link className = "button button-primary" to="/">Atras</Link>
        <ul>
          {this.state.repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.svn_url}>{repo.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Results;
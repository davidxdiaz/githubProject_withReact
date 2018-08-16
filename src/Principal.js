import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Principal extends Component {
  constructor() {
    super();
    this.state = {
      usuario: ''
    };
  }

  render() {
    return (
      <div className = "container">
      <center>
            <h3>Proyecto de Github</h3>
        <input
          type="text"
          value={this.state.usuario}
          onChange={e => this.setState({ usuario: e.target.value })}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/resultados/${this.state.usuario}`} className="button button-primary">
          Ir a Repositorios
        </Link>
        </center>
      </div>
    );
  }
}

export default Principal;
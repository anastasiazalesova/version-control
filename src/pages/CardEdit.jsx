import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";

export default class CardNew extends Component {
  constructor(props) {
    super(props);


    this.state = {

    };
  }

  render() {

    return (
      <Fragment>
        <div className="Nav-Layout">
          <Link to="/">
            <h3>Control system</h3>
          </Link>
          <div className="Nav-Layout-Actions">
            <div className="Avatar">
              <img src="https://avatars2.githubusercontent.com/u/37885113?s=40&v=4" alt="AVATAR"/>
            </div>
          </div>
        </div>
        <div className="Content-Layout">
          CARD EDIT
        </div>
      </Fragment>
    );
  }
};

import React, { Component, Fragment } from 'react';


import documents from '../documents.json';
import {Link} from "react-router-dom";

export default class CardView extends Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id;

    this.state = {
      id,
      document: documents.find(document => document.id === id)
    };
  }

  render() {
    const { document } = this.state;

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
          {
            document ? (
              <div style={{padding: '0px 252px'}}>
                  <h1>{ document.title }</h1>
                  {document.paragraphs.map(p => (
                    <div key={p.id} style={{marginTop: '32px', fontWeight: 'lighter'}}>
                      <p>{p.title}</p>
                    </div>
                  ))
                  }
              </div>
            ) : (
              <h1>Документ не найден</h1>
            )
          }
        </div>
      </Fragment>
    );
  }
};

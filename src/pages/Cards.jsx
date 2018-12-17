import React, { Component, Fragment } from 'react';
import { Button, Input } from 'element-react';
import { Link } from 'react-router-dom';

import Card from '../components/Card.jsx';

import documents from '../documents.json';

export default class Cards extends Component {
  constructor(props) {
    super(props);


    this.state = {
      searchQuery: '',
      documents
    };
  }

  handleSearchQueryChange = searchQuery => {
    this.setState({
      searchQuery
    });
  }

  render() {
    const { documents, searchQuery } = this.state;

    return (
      <Fragment>
        <div className="Nav-Layout">
          <Link to="/">
            <h3>Control system</h3>
          </Link>
          <div className="Nav-Layout-Actions">
            <div style={{marginRight: '16px'}}>
              <Input
                icon="search"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={this.handleSearchQueryChange}
              />
            </div>
            <Link to="card/new">
              <Button type="primary">Создать новый документ</Button>
            </Link>
            <div className="Avatar">
              <img src="https://avatars2.githubusercontent.com/u/37885113?s=40&v=4" alt="AVATAR"/>
            </div>
          </div>
        </div>
        <div className="Content-Layout">
        {
          documents
            .filter(document => document.title.toLowerCase().indexOf(searchQuery.trim().toLowerCase()) !== -1)
            .map(document => (
            <Link key={document.id} to={`card/view/${document.id}`}>
              <Card card={document}>
                <Button type="primary" size="small">Посмотреть</Button>
                <Link to={`card/edit/${document.id}`}>
                  <Button type="text">Редактировать</Button>
                </Link>
              </Card>
            </Link>
          ))
        }
        </div>
      </Fragment>
    );
  }
};

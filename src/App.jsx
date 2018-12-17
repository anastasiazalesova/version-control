import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './global.css';

import CardsPage from './pages/Cards.jsx';
import CardViewPage from './pages/CardView.jsx';
import CardNewPage from './pages/CardNew.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: [
        {
          title: 'Cards',
          key: 'cards',
          link: '/',
          component: CardsPage
        },
        {
          title: 'CardNew',
          key: 'card-new',
          link: '/card/new',
          component: CardNewPage
        },
        {
          title: 'CardView',
          key: 'card-view',
          link: '/card/view/:id',
          component: CardViewPage
        }
      ]
    };
  }

  renderRoutes() {
    const { routes } = this.state;

    return routes.map(route => {
      return <Route exact key={route.key} path={route.link} component={route.component}/>;
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {this.renderRoutes()}
        </Switch>
      </div>
    );
  }
};

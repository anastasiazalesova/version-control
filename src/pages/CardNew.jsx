import React, { Component, Fragment } from 'react';

import { Input, Button } from 'element-react';
import {Link} from "react-router-dom";

export default class CardNew extends Component {
  constructor(props) {
    super(props);


    this.state = {
      title: '',
      paragraphs: [{
        id: -1,
        title: ''
      }]
    };
  }

  handleTitleChange = title => {
    this.setState({ title });
  }

  handleParagraphChangeById = (title, id) => {
    const { paragraphs } = this.state;
    const newParagraphs = paragraphs.map(paragraph => {
      return paragraph.id === id ? { title, id } : paragraph;
    });

    this.setState({
      paragraphs: newParagraphs
    });
  }

  addParagraph = () => {
    const { paragraphs } = this.state;

    this.setState({
      paragraphs: [...paragraphs, { title: '', id: paragraphs.length }]
    })
  }

  render() {
    const { title, paragraphs } = this.state;

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
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button size="small" type="primary">
                Сохранить
              </Button>
            </div>
            <div style={{padding: '0 240px'}}>
              <div>
                <Input
                  value={title}
                  placeholder="Название документа"
                  onChange={this.handleTitleChange}
                />
                {
                  paragraphs.map(p => (
                    <Input
                      key={p.id}
                      value={p.title}
                      type="textarea"
                      placeholder="Введите текст"
                      onChange={(title) => this.handleParagraphChangeById(title, p.id)}
                    />
                  ))
                }
              </div>
              <div>
                <Button
                  type="primary"
                  icon="plus"
                  onClick={this.addParagraph}
                >
                  Добавить параграф
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </Fragment>
    );
  }
};

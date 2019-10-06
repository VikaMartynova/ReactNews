import React, {Component} from 'react';
import {Article} from './Article';

export class Content extends Component {

    renderArticles = () => {
        return this.props.articles.map((article, i) =>
             <li key={i}>
                <Article article={article}/>
            </li>);
    };

    render() {
        return <ul className='content'>{this.renderArticles()}</ul>
    }
}
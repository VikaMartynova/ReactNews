import React, {Component} from 'react';
import '../styles/style.scss';
import {APIKey} from '../constants/API';
import {Categories} from './Categories';
import {Content} from './Content';

const Header = (props) => {
    return <div className='header'>
                <h1>React News</h1>
                <Categories categories={props.categories}
                         applyCategory={props.applyCategory}/>
            </div>
};

class WebPage extends Component {

    state = {
        articles: [],
        country: 'us',
        categories: ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'],
        categorySelected: 'general',
        page: 1,
        totalArticles: 0
    };

    componentDidMount() {
        this.loadNewsFromAPI();
    }

    loadNewsFromAPI = () => {
        const {page, articles, categorySelected} = this.state;
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categorySelected}&pageSize=10&page=${page}&apiKey=${APIKey}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === 'ok') {
                    this.setState({articles: articles.concat(data.articles),
                                    page: page + 1,
                                    totalArticles: data.totalResults});
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    applyCategory = (item) => {
        this.setState({categorySelected: item,
                        page: 1,
                        articles: [],
                        totalArticles: 0},
            () => {this.loadNewsFromAPI()});
    };

    render() {
        const {categories, articles, totalArticles} = this.state;
        const existButton = articles.length < totalArticles;
        return (
            <div className='container'>
                <Header categories={categories}
                        applyCategory={this.applyCategory}/>
                <Content articles={articles}/>
                {existButton &&
                    <button onClick={this.loadNewsFromAPI}>show more</button>
                }
            </div>
        );
    }
}

export default WebPage;
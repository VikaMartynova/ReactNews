import React, {Component} from 'react';
import image from "../assets/images/defaultImage.png";

export class Article extends Component {

    getDate = (date) => {
      return new Date(date).toDateString();
    };

    parseContent = (content) => {
      return content.substring(0, content.lastIndexOf('…') + 1);
    };

    render() {
        const {article} = this.props;
        return (
            <div className='article'>
                <div>
                    <div className='image' style={{backgroundImage: `url(${article.urlToImage ? article.urlToImage : image})`}}/>
                </div>
                <div className='text'>
                    <h3>{article.title}</h3>
                    <p className='right'>{this.getDate(article.publishedAt)}</p>
                    <p>{article.content ? this.parseContent(article.content) : article.description}</p>
                    {article.author ?
                        <p className='right'>Source:
                            <a href={article.url} target='_blank'>{article.author}</a>
                        </p>
                        : <p className='right'>
                            <a href={article.url} target='_blank'>Source</a>
                        </p>
                    }
                </div>
            </div>
        )
    }
}
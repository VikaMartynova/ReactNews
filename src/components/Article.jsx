import React, {Component} from 'react';

export class Article extends Component {

    getDate = (date) => {
      return new Date(date).toDateString();
    };

    render() {
        const {article} = this.props;
        const content = article && article.content && article.content.substring(0,article.content.lastIndexOf('…') + 1);
        return (
            <div className='article'>
                <div>
                    <div className='image' style={{backgroundImage: `url(${article.urlToImage})`}}/>
                </div>
                <div className='text'>
                    <h3>{article.title}</h3>
                    <p className='right'>{this.getDate(article.publishedAt)}</p>
                    <p>{content}</p>
                    {article.author &&
                    <p className='right'>Source: <a href={article.url}
                                                    target='_blank'>{article.author}</a></p>
                    }
                </div>
            </div>
        )
    }
}
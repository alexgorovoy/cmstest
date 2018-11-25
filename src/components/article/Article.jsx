import React, { Component } from 'react';
import { ArticleShape } from '../../shapes/ArticleShape';
import './Article.css';

class Article extends Component {
  
  setHTML(content) { 
    return { __html: content };
  }

  render() {
    const { article: {title, body} } = this.props;    
    return (        
        <React.Fragment>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={this.setHTML(body)} />
        </React.Fragment>
    );
  }
}

Article.propTypes = {
    article: ArticleShape.isRequired
};

Article.defaultProps = {
  article: {},  
}

export default Article;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';

import { onFAQLoad, setFAQActiveArticle } from '../../redux/actions/Actions';
import './Faq.css';

class Faq extends Component {
  componentDidMount() {
    const { onLoad } = this.props;
    onLoad();
  }

  getTitles(articles) {
    return articles.map(a => a.title);
  }

  setHTML(content) { 
    return { __html: content };
  }

  getSelectedArticle(articles, activeArticleIndex) {
    const article = articles[activeArticleIndex];
    return activeArticleIndex !== null ? (
      <React.Fragment>
        <h2>{article.title}</h2>
        <p dangerouslySetInnerHTML={this.setHTML(article.body)} />
      </React.Fragment>
    ) : <h5>Please select article...</h5>;
  }

  selectActiveArticle(index) {
    const { onActiveArticleChange } = this.props;
    onActiveArticleChange(index);
  }

  render() {
    const {articles, activeArticleIndex} = this.props;
    const titles = this.getTitles(articles);
    return (
      <Container fluid className="faq">
        <Row>
          <Col sm={8} className="faq-content">{this.getSelectedArticle(articles, activeArticleIndex)}</Col>
          <Col sm={4}>
            <ListGroup >                    
              {titles.map((title, index) => {
                return (<ListGroup.Item onClick={() => this.selectActiveArticle(index)} action key={index} active={index === activeArticleIndex}>
                          {title}
                        </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
        </Container>        
    );
  }
}

Faq.propTypes = {
  onLoad: PropTypes.func,
  onActiveArticleChange: PropTypes.func,
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })),
  activeArticleIndex: PropTypes.number
};

const mapStateToProps = state => ({
  articles: state.faq.articles,
  activeArticleIndex: state.faq.activeArticleIndex
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(onFAQLoad()),
  onActiveArticleChange: (index) => dispatch(setFAQActiveArticle(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Faq);



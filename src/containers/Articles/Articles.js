import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from 'redux/modules/articles';
import ArticleListItem from './ArticleListItem';

@connect(
  state => ({
    articles: state.articles
  }),
  dispatch => ({
    ...bindActionCreators({
      ...articleActions
    }, dispatch)
  })
)
export default class Articles extends Component {
  static propTypes = {
    articles: PropTypes.any.isRequired,
    selectArticle: PropTypes.func.isRequired
  }

  render() {
    const { articles, selectArticle } = this.props;
    const selectedArticle = articles.selectedArticle;
    const articleList = articles.articleList;

    const articleValues = Object.keys(articleList).map(function(value) {
      return articleList[value];
    });

    return (
      <ul>
        {articleValues.map(function(article) {
          return <ArticleListItem article={article} selectedArticle={selectedArticle} selectArticle={selectArticle} />;
        })}
      </ul>
    );
  }
}


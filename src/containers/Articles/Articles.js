import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isLoaded, load as loadArticles} from 'redux/modules/articles';
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

  static fetchData(store) {
    if (!isLoaded(store.getState())) {
      return store.dispatch(loadArticles());
    }
  }

  render() {
    const { articles, selectArticle } = this.props;
    const selectedArticle = articles.selectedArticle;
    const articleList = articles.articleList;

    return (
      <ul>
        {articleList.map((article, index) =>
          <ArticleListItem
            article={article}
            selectedArticle={selectedArticle}
            selectArticle={selectArticle}
            key={index}
          />
        )}
      </ul>
    );
  }
}


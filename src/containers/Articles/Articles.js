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
    selectArticle: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  }

  // onArticleSelect(slug) {
  //   const { articles, selectArticle } = this.props;

  //   if (articles.selectedArticle === slug) {
  //     selectArticle(null);
  //   } else {
  //     selectArticle(slug);
  //   }
  // }

  static fetchData(store) {
    if (!isLoaded(store.getState())) {
      return store.dispatch(loadArticles());
    }
  }

  render() {
    const { articles } = this.props;
    const selectedArticle = articles.selectedArticle;
    const articleList = articles.articleList;
    const articleItem = articles.articleItem;

    return (
      <div>
        <ul>
          {articleList.map((article, index) =>
            <ArticleListItem
              article={article}
              selectedArticle={selectedArticle}
              articleItem={articleItem}
              key={index}
            />
          )}
        </ul>
        {this.props.children}
      </div>
    );
  }
}


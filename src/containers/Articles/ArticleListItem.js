import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import ArticleView from '../ArticleView/ArticleView';

export default class ArticleListItem extends Component {
  static propTypes = {
    article: PropTypes.any.isRequired,
    // selectedArticle: PropTypes.string,
    articleItem: PropTypes.object
  }

  render() {
    const {article, articleItem} = this.props;
    let artcileView;

    if (articleItem) {
      artcileView = <ArticleView article={articleItem} />;
    }

    return (
      <div ref={`story-item-${article.slug}`}>
        <Link to={`/articles/${article.slug}`}>
          <h3>{article.headline}</h3>
        </Link>
        <div>{article.contributor}</div>
        { artcileView }
      </div>
    );
  }
}

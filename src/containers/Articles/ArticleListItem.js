import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class ArticleListItem extends Component {
  static propTypes = {
    article: PropTypes.any.isRequired,
    selectedArticle: PropTypes.string,
    articleItem: PropTypes.object
  }

  render() {
    const {article, selectedArticle, articleItem} = this.props;
    let artcileView;
    if (article.slug === selectedArticle) {
      const image = article.attachments.images[0];
      if (image) {
        const imageUrl = article.attachments.images[0].thumbnails[0].url;

        artcileView = (<div className="article-body">
          <img src={imageUrl} />
          <div className='article-view-body' dangerouslySetInnerHTML={{__html: articleItem.body}} />
        </div>);
      }
    }

    return (
      <li ref={`story-item-${article.slug}`}>
        <Link to={`/articles/${article.slug}`}>
          <h3>{article.headline}</h3>
        </Link>
        <div>{article.contributor}</div>
        { artcileView }
      </li>
    );
  }
}

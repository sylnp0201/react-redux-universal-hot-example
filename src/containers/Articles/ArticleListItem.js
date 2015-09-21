import React, {Component, PropTypes} from 'react';

export default class ArticleListItem extends Component {
  static propTypes = {
    article: PropTypes.any.isRequired,
    selectArticle: PropTypes.func.isRequired,
    selectedArticle: PropTypes.string
  }

  handleClick(slug) {
    const { selectArticle } = this.props;

    return () => {
      selectArticle(String(slug));
    };
  }

  render() {
    const {article, selectedArticle} = this.props;
    let artcileView;
    if (article.slug === selectedArticle) {
      const image = article.attachments.images[0];
      if (image) {
        const imageUrl = article.attachments.images[0].thumbnails[0].url;

        artcileView = (<div className="article-body">
          <img src={imageUrl} />
        </div>);
      }
    }

    return (
      <li ref={`story-item-${article.slug}`}>
        <h3 onClick={::this.handleClick(article.slug)}>{article.headline}</h3>
        <div>{article.contributor}</div>
        { artcileView }
      </li>
    );
  }
}

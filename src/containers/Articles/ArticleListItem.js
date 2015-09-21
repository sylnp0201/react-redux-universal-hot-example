import React, {Component, PropTypes} from 'react';

export default class ArticleListItem extends Component {
  static propTypes = {
    article: PropTypes.any.isRequired,
    selectArticle: PropTypes.func.isRequired,
    selectedArticle: PropTypes.string.isRequired
  }

  handleClick(aritcleId) {
    const { selectArticle } = this.props;

    return () => {
      selectArticle(String(aritcleId));
    };
  }

  render() {
    const {article, selectedArticle} = this.props;
    let artcileView;
    if (article.id === selectedArticle) {
      artcileView = (<div className="article-body">{article.body}</div>);
    }

    return (
      <li ref={`story-item-${article.id}`}>
        <h3 onClick={::this.handleClick(article.id)}>{article.headline}</h3>
        <div>{article.contributor}</div>
        { artcileView }
      </li>
    );
  }
}

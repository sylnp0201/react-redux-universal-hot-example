import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isLoaded, loadArticleItem as loadArticle} from 'redux/modules/articles';
import * as articleActions from 'redux/modules/articles';

@connect(
  () => ({}),
  dispatch => ({
    ...bindActionCreators({
      ...articleActions
    }, dispatch)
  })
)
export default class ArticleView extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  }

  static fetchData(store, params) {
    const slug = params.splat;
    const globalState = store.getState();

    if (!isLoaded(globalState) || slug !== globalState.articles.selectedArticle) {
      return store.dispatch(loadArticle(slug));
    }
  }

  render() {
    const { article } = this.props;

    const image = article.attachments.images[0];
    let lede;

    if (image) {
      const imageUrl = image.thumbnails[0].url;
      lede = <img src={imageUrl} />;
    }

    return (<div className="article-view">
      {lede}
      <div className="article-body" dangerouslySetInnerHTML={{__html: article.body}}></div>
    </div>);
  }
}


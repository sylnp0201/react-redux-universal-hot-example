const LOAD = 'redux-example/articles/LOAD';
const LOAD_SUCCESS = 'redux-example/articles/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/articles/LOAD_FAIL';
const SELECT_ARTICLE = 'redux-example/articles/SELECT_ARTICLE';

const initialState = {
  loaded: false,
  selectedArticle: null,
  articleList: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        articleList: action.result.articles,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        articleList: null,
        error: action.error
      };
    case SELECT_ARTICLE:
      return {
        ...state,
        selectedArticle: action.slug
      };
    default:
      return state;
  }
}

export function selectArticle(slug) {
  return { type: SELECT_ARTICLE, slug };
}

export function isLoaded(globalState) {
  return globalState.articles && globalState.articles.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/article/loadArticles')
  };
}


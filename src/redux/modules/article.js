const LOAD = 'redux-example/article/LOAD';
const LOAD_SUCCESS = 'redux-example/article/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/article/LOAD_FAIL';

const initialState = {
  loaded: false,
  data: null
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
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.article && globalState.article.loaded;
}

export function load(slug, isArticlePage) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`/article/loadArticle/${slug}`)
  };
}

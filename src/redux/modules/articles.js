const SELECT_ARTICLE = 'redux-example/articles/SELECT_ARTICLE';

const initialState = {
  selectedArticle: null,
  articleList: {
    '1': {
      'id': '1',
      'headline': 'headline-1',
      'contributor': 'contributor-1',
      'body': 'sample body text 1'
    },
    '2': {
      'id': '2',
      'headline': 'headline-2',
      'contributor': 'contributor-2',
      'body': 'sample body text 2'
    },
    '3': {
      'id': '3',
      'headline': 'headline-3',
      'contributor': 'contributor-3',
      'body': 'sample body text 3'
    }
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_ARTICLE:
      return {
        ...state,
        selectedArticle: action.id
      };
    default:
      return state;
  }
}

export function selectArticle(id) {
  return { type: SELECT_ARTICLE, id };
}


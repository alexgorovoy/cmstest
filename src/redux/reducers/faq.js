import { FAQ } from '../actions/ActionTypes';

const initialState = {
    articles: [],
    activeArticleIndex: null
};

const faq = (state = initialState, action) => {
    switch (action.type) {        
    case FAQ.SET_MODEL: {
        const { articles } = action.payload;
        return {
            ...state,
            articles            
        };
    }
    case FAQ.SET_ACTIVE_ARTICLE: {
        const { index } = action.payload;
        return {
            articles: state.articles,
            activeArticleIndex: index
        };
    }
    default:
        return state;
    }
};

export default faq;
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import App from './App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  faq: {
      articles: [],
      activeArticleIndex: null
  },
  hero: {
    heading: "",
    subheading: "",
    heroImageUrl: ""
  }
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

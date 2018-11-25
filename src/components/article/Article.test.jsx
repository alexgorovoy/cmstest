import React from 'react';
import renderer from 'react-test-renderer';
import Article from './Article';

test('Article / renders as expected', () => {
    const article = {
        title: "test title",
        body: "test body <p>with tags</p>"
    };

    const component = renderer.create(
        <Article article={article}/>
      );
      let hero = component.toJSON();
      expect(hero).toMatchSnapshot();    
});
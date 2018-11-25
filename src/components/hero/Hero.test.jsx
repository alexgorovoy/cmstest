import React from 'react';
import renderer from 'react-test-renderer';
import Hero from './Hero';

test('Hero / renders as expected', () => {

    const component = renderer.create(
        <Hero heading="Test" subheading="subheading test" heroImageUrl="https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L" />
      );
      let hero = component.toJSON();
      expect(hero).toMatchSnapshot();    
});
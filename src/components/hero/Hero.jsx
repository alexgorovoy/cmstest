import React, { Component } from 'react';
import { HeroShape } from '../../shapes/HeroShape';
import './Hero.css';

class Hero extends Component {
    
  render() {
    const { heading, subheading, heroImageUrl} = this.props;
    return (        
        <div className="hero" style={{backgroundImage: `url(${heroImageUrl})`}}>
          <div className="hero-text">
            <h1>{heading}</h1>
            <h4>{subheading}</h4>
          </div>
        </div>
    );
  }
}

Hero.propTypes = HeroShape.isRequired;

Hero.defaultProps = {
  heading: '',
  subheading: '',
  heroImageUrl: ''
}

export default Hero;

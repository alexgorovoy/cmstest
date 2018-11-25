import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button'
import Nav from 'react-bootstrap/lib/Nav';

import Hero from '../../components/hero/Hero';
import { HeroShape } from '../../shapes/HeroShape';
import { onHomeLoad } from '../../redux/actions/Actions';
import './Home.css';

class Home extends Component {
  
  componentDidMount() {
    const { onLoad } = this.props;
    onLoad();
  }

  render() {
    const  { hero } = this.props;
    
    return (
        <div className="home">
          <Hero {...hero} />
          <Nav.Link href="/faqs">
            <Button className="float-right" variant="primary">Learn more</Button>
          </Nav.Link>
        </div>
    );
  }
}

Home.propTypes = {
  onLoad: PropTypes.func,
  hero: HeroShape.isRequired
};

const mapStateToProps = state => ({
  hero: state.hero
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(onHomeLoad()),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
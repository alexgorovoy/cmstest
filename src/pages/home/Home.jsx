import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button'
import HeroHome from './components/HeroHome'
import { onHomeLoad } from '../../redux/actions/Actions';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

class Home extends Component {
  
  componentDidMount() {
    const { onLoad } = this.props;
    onLoad();
  }

  render() {    
    return (
        <div className="home">
          <HeroHome/>
          <LinkContainer to="/faqs">          
            <Button className="float-right" variant="primary">Learn more</Button>          
          </LinkContainer>
        </div>
    );
  }
}

Home.propTypes = {
  onLoad: PropTypes.func,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(onHomeLoad()),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
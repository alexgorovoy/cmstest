import { connect } from 'react-redux';
import Hero from '../../../components/hero/Hero';

const mapStateToProps = state => {
  const { heading, subheading, heroImageUrl } = state.hero
  return {  
    heading,
    subheading,
    heroImageUrl
  }
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
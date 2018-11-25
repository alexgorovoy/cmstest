import PropTypes from 'prop-types';

export const HeroShape = PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    heroImageUrl: PropTypes.string.isRequired,
});

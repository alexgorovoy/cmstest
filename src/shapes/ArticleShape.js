import PropTypes from 'prop-types';

export const ArticleShape = PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
});

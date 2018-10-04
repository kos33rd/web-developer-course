import React from 'react'
import PropTypes from 'prop-types';

export const About = (props) => (
  <h3>This is an {props.title} page</h3>
)

About.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  news: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  theme: PropTypes.oneOf(['dark', 'light'])
};

About.defaultProps = {
  title: 'News app'
};


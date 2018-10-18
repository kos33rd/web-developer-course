import React from 'react'
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import {photosSelector} from "../data/selectors"
import {connect} from "react-redux"

export const AboutComponent = (props) => (
  <div>
    <h3>This is an {props.title} page</h3>
    <Gallery photos={props.photos} />
  </div>
);

AboutComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  news: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  theme: PropTypes.oneOf(['dark', 'light'])
};

AboutComponent.defaultProps = {
  title: 'News app'
};

const mapStateToProps = (state) => ({
  photos: photosSelector(state)
})

export const About = connect(mapStateToProps)(AboutComponent)

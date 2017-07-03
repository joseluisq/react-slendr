import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Slendr extends Component {
  static propTypes = {
    // Animation
    animationClass: PropTypes.string,
    animationSpeed: PropTypes.number,
    // Direction navs
    directionNavs: PropTypes.bool,
    directionNavPrev: PropTypes.string,
    directionNavNext: PropTypes.string,
    // Control navs
    controlNavs: PropTypes.bool,
    controlNavClass: PropTypes.string,
    controlNavClassActive: PropTypes.string,
    // Slide
    slideVisibleClass: PropTypes.string,
    slideActiveClass: PropTypes.string,
    // Slideshow
    slideshow: PropTypes.bool,
    slideshowSpeed: PropTypes.number,
    // Keyboard
    keyboard: PropTypes.bool
  }

  static defaultProps = {
    // Animation
    animationClass: '.slendr-animate',
    animationSpeed: 900,
    // Direction navs
    directionNavs: true,
    directionNavPrev: '.slendr-prev',
    directionNavNext: '.slendr-next',
    // Control navs
    controlNavs: true,
    controlNavClass: '.slendr-control',
    controlNavClassActive: '.slendr-control-active',
    // Slide
    slideVisibleClass: '.slendr-visible',
    slideActiveClass: '.slendr-active',
    // Slideshow
    slideshow: true,
    slideshowSpeed: 4000,
    // Keyboard
    keyboard: false
  }

  render () {
    return (
      <div className='slendr'>
        {this.props.children}
      </div>
    )
  }
}

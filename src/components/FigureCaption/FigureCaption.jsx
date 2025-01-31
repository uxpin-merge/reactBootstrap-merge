import React from 'react'
import PropTypes from 'prop-types'
import { FigureCaption as FigureCaptionM } from 'react-bootstrap'

const FigureCaption = (props) => {
  return <FigureCaptionM {...props} />
}

FigureCaption.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default FigureCaption

import React from 'react'
import PropTypes from 'prop-types'
import { AlertHeading as AlertHeadingM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/AlertHeading
 * @uxpindescription Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
 * @uxpinnamespace Alert
 */

const Heading = (props) => {
  return <AlertHeadingM {...props} />
}

Heading.propTypes = {
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

export default Heading

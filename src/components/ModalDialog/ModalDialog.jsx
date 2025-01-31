import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ModalM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/modal
 * @uxpindescription Add dialogs to your site for lightboxes, user notifications, or completely custom content.
 * @uxpinnamespace Modal
 */
const Dialog = (props) => {
  return <ModalM.Dialog {...props} />
}

Dialog.propTypes = {
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

  /** @default 'modal' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Render a large, extra large or small modal.@type ('sm'|'lg'|'xl') */
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  /** Renders a fullscreen modal. Specifying a breakpoint will render the modalas fullscreen __below__ the breakpoint size.@type (true|'sm-down'|'md-down'|'lg-down'|'xl-down'|'xxl-down') */
  fullscreen: PropTypes.oneOf(['sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down']),
  /** Specify whether the Component should be vertically centered */
  centered: PropTypes.bool,
  /** Allows scrolling the `<Modal.Body>` instead of the entire Modal when overflowing. */
  scrollable: PropTypes.bool,
  contentClassName: PropTypes.string,
}

export default Dialog

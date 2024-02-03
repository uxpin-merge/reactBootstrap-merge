import React from 'react';
import PropTypes from 'prop-types';
import { Offcanvas as OffcanvasM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Offcanvas
* @uxpindescription TODO
*/


const Offcanvas = (props) => {
  return <OffcanvasM {...props} />;
};

Offcanvas.propTypes = {
  children: PropTypes.node,
/** Which side of the viewport the offcanvas will appear from. */
  placement: PropTypes.string,
  /** When `true` The offcanvas will show itself. */
  show: PropTypes.bool,
  /** Include a backdrop component. Specify 'static' for a backdrop that doesn'ttrigger an "onHide" when clicked. */
  backdrop: PropTypes.string,
  /** Closes the offcanvas when escape key is pressed. */
  keyboard: PropTypes.bool,
  /** Allow body scrolling while offcanvas is open. */
  scroll: PropTypes.bool,
  /** When `true` The offcanvas will automatically shift focus to itself when itopens, and replace it to the last focused element when it closes.Generally this should never be set to false as it makes the offcanvas lessaccessible to assistive technologies, like screen-readers. */
  autoFocus: PropTypes.bool,
  /** When `true` The offcanvas will prevent focus from leaving the offcanvas whileopen. Consider leaving the default value here, as it is necessary to makethe offcanvas work well with assistive technologies, such as screen readers. */
  enforceFocus: PropTypes.bool,
  /** When `true` The offcanvas will restore focus to previously focused element onceoffcanvas is hidden */
  restoreFocus: PropTypes.bool,
  /** For internal use to render static node from NavbarOffcanvas.@private */
  renderStaticNode: PropTypes.bool,
  /** @default 'offcanvas' */
  bsPrefix: PropTypes.string,
  /** Add an optional extra class name to .offcanvas-backdrop. */
  backdropClassName: PropTypes.string,
  /** Hide content outside the viewport from a specified breakpoint and down. */
  responsive: PropTypes.string,
  /** Options passed to focus function when `restoreFocus` is set to `true`@link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters */
  restoreFocusOptions: PropTypes.shape,
  /** A callback fired when the offcanvas is opening. */
  onShow: PropTypes.func,
  /** A callback fired when the header closeButton or backdrop isclicked. Required if either are specified. */
  onHide: PropTypes.func,
  /** A callback fired when the escape key, if specified in `keyboard`, is pressed. */
  onEscapeKeyDown: PropTypes.func,
  /** Callback fired before the offcanvas transitions in */
  onEnter: PropTypes.func,
  /** Callback fired as the offcanvas begins to transition in */
  onEntering: PropTypes.func,
  /** Callback fired after the offcanvas finishes transitioning in */
  onEntered: PropTypes.func,
  /** Callback fired right before the offcanvas transitions out */
  onExit: PropTypes.func,
  /** Callback fired as the offcanvas begins to transition out */
  onExiting: PropTypes.func,
  /** Callback fired after the offcanvas finishes transitioning out */
  onExited: PropTypes.func,
  /** @private */
  container: PropTypes.string,
  "aria-labelledby": PropTypes.string,
};

export default Offcanvas;
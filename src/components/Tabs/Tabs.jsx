import React from 'react'
import PropTypes from 'prop-types'
import { Tabs as TabsM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/tabs
 * @uxpindescription Dynamic tabbed interfaces
 */
const Tabs = (props) => {
  return <TabsM {...props} />
}

Tabs.propTypes = {
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

  /** Navigation style */
  variant: PropTypes.oneOf(['tabs', 'pills', 'underline']),
  /** The default active key that is selected on start */
  defaultActiveKey: PropTypes.string,
  /** Have all `Tabs`s proportionately fill all available width. */
  fill: PropTypes.bool,
  /** Have all `Tab`s evenly fill all available width. */
  justify: PropTypes.bool,
  /** Sets a default animation strategy for all children `<TabPane>`s.<tbcontDefaults to `<Fade>` animation, else use `false` to disable or areact-transition-group `<Transition/>` component.@type {Transition | false}@default {Fade} */
  transition: PropTypes.bool,
  /** Mark the Tab with a matching `eventKey` as active.@controllable onSelect */
  activeKey: PropTypes.string,
  /** HTML id attribute, required if no `generateChildId` propis specified.@type {string} */
  id: PropTypes.string,
  /** Callback fired when a Tab is selected. jsfunction (  Any eventKey,  SyntheticEvent event?) @controllable activeKey */
  onSelect: PropTypes.func,
  /** Wait until the first "enter" transition to mount tabs (add them to the DOM) */
  mountOnEnter: PropTypes.bool,
  /** Unmount tabs (remove it from the DOM) when it is no longer visible */
  unmountOnExit: PropTypes.bool,
}

export default Tabs

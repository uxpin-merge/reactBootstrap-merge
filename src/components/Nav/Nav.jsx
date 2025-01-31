import React from 'react'
import PropTypes from 'prop-types'
import { Nav as NavM } from 'react-bootstrap'

import Item from '../NavItem/NavItem'
import Dropdown from '../NavDropdown/NavDropdown'
import Link from '../NavLink/NavLink'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/navs
 * @uxpindescription Documentation and examples for how to use Bootstrap’s included navigation components.
 */
const Nav = (props) => {
  return <NavM {...props} />
}

Nav.Item = Item
Nav.Dropdown = Dropdown
Nav.Link = Link

Nav.propTypes = {
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

  /** @default 'nav' */
  bsPrefix: PropTypes.string,
  /** @private
   * @uxpinignoreprop
   */
  navbarBsPrefix: PropTypes.string,
  /** @private
   * @uxpinignoreprop
   */
  cardHeaderBsPrefix: PropTypes.string,
  /** The visual variant of the nav items. */
  variant: PropTypes.oneOf(['tabs', 'pills', 'underline']),
  /** Marks the NavItem with a matching `eventKey` (or `href` if present) as active. */
  activeKey: PropTypes.string,
  /** The default active key that is selected on start. */
  defaultActiveKey: PropTypes.string,
  /** Have all `NavItem`s proportionately fill all available width. */
  fill: PropTypes.bool,
  /** Have all `NavItem`s evenly fill all available width.@type {boolean} */
  justify: PropTypes.bool,
  /** A callback fired when a NavItem is selected. jsfunction ( Any eventKey, SyntheticEvent event?) */
  onSelect: PropTypes.func,
  /** ARIA role for the Nav, in the context of a TabContainer, the default willbe set to "tablist", but can be overridden by the Nav when set explicitly.When the role is "tablist", NavLink focus is managed according tothe ARIA authoring practices for tabs:https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel */
  role: PropTypes.string,
  /** Apply styling an alignment for use in a Navbar. This prop will be setautomatically when the Nav is used inside a Navbar. */
  navbar: PropTypes.bool,
  /** Enable vertical scrolling within the toggleable contents of a collapsed Navbar. */
  navbarScroll: PropTypes.bool,
  as: PropTypes.string,
  /** @private
   * @uxpinignoreprop
   */
  onKeyDown: PropTypes.func,
}

export default Nav

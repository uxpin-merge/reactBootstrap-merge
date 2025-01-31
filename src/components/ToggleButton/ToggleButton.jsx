import React from 'react'
import PropTypes from 'prop-types'
import { ToggleButton as ToggleButtonM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/buttons#checkbox--radio
 * @uxpindescription Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
 */
const ToggleButton = (props) => {
  return <ToggleButtonM {...props} />
}

ToggleButton.propTypes = {
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

  /** @default 'btn-check' */
  bsPrefix: PropTypes.string,
  /** The `<input>` element `type` */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /** The HTML input name, used to group like checkboxes or radio buttons togethersemantically */
  name: PropTypes.string,
  /** The checked state of the input, managed by `<ToggleButtonGroup>` automatically */
  checked: PropTypes.bool,
  /** The disabled state of both the label and input */
  disabled: PropTypes.bool,
  /** `id` is required for button clicks to toggle input. */
  id: PropTypes.string,
  /** A callback fired when the underlying input element changes. This is passeddirectly to the `<input>` so shares the same signature as a native `onChange` event. */
  onChange: PropTypes.func,
  /** One or more button variant combinationsbuttons may be one of a variety of visual variants such as:`'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`as well as "outline" versions (prefixed by 'outline-*')`'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'` */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'light',
    'link',
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-danger',
    'outline-warning',
    'outline-info',
    'outline-dark',
    'outline-light',
  ]),
  /** The value of the input, should be unique amongst its siblings when nested in a`ToggleButtonGroup`. */
  value: PropTypes.string,
  /** A ref attached to the `<input>` element@type {ReactRef} */
  inputRef: PropTypes.string,
}

export default ToggleButton

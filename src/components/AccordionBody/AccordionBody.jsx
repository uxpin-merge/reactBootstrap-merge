import React from 'react';
import PropTypes from 'prop-types';
import { AccordionBody as AccordionBodyM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AccordionBody
* @uxpindescription TODO
*/


const AccordionBody = (props) => {
  return <AccordionBodyM {...props} />;
};

AccordionBody.propTypes = {
  children: PropTypes.node,
/** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion-body' */
  bsPrefix: PropTypes.string,
  /** Callback fired before the component expands */
  onEnter: PropTypes.func,
  /** Callback fired after the component starts to expand */
  onEntering: PropTypes.func,
  /** Callback fired after the component has expanded */
  onEntered: PropTypes.func,
  /** Callback fired before the component collapses */
  onExit: PropTypes.func,
  /** Callback fired after the component starts to collapse */
  onExiting: PropTypes.func,
  /** Callback fired after the component has collapsed */
  onExited: PropTypes.func,
};

export default AccordionBody;
import _extends from '@babel/runtime/helpers/esm/extends';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import { ControlledStepper } from './ControlledStepper';
export class Stepper extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, 'state', {
      currentStepIdx: 1,
    });

    _defineProperty(this, 'change', (idx) => {
      this.setState({
        currentStepIdx: idx,
      });
    });
  }

  static getDerivedStateFromProps({ currentStepIdx }, state) {
    if (currentStepIdx) {
      return {
        currentStepIdx,
      };
    }

    return state;
  }

  render() {
    const { currentStepIdx } = this.state;
    return React.createElement(
      ControlledStepper,
      _extends(
        {
          currentStepIdx: currentStepIdx,
          onChange: this.change,
        },
        this.props,
      ),
    );
  }
}
Stepper.propTypes = {
  currentStepIdx: number,
};
Stepper.defaultProps = {
  currentStepIdx: null,
};

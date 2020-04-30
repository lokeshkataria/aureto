// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './FormWrapper.style';
import withStyles from '../../../lib/withStyles';

type Props = {
  children: Node,
  className: string,
  inheritedStyles?: string,
};

const FormWrapper = ({ children, className, inheritedStyles, ...others }: Props): Node => (
  <div className={className} {...others}>
    {children}
  </div>
);

FormWrapper.defaultProps = {
  inheritedStyles: '',
};

export default withStyles(FormWrapper, styles);
export { FormWrapper };

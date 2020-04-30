/**
 *
 * Footer
 *
 */
// @flow
import React from 'react';
import type { Node } from 'react';
import { Link, Typography } from '@material-ui/core';
import NextLink from 'next/link';
import type { Props } from './types';
import withStyles from '../../../lib/withStyles';
import styles from './Footer.style';

const Footer = ({ className }: Props): Node => (
  <footer className={className} id="footer">
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <NextLink href="/">
        <Link color="inherit" href="/">
          Aureto
        </Link>
      </NextLink>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </footer>
);

Footer.defaultProps = {};

export default withStyles(Footer, styles);

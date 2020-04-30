// @flow
/**
 * Header
 */
import React from 'react';
import type { Node } from 'react';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import type { Props } from './types';
import styles from './Header.style';
import withStyles from '../../../lib/withStyles';

const Header = ({ className }: Props): Node => (
  <AppBar position="static" className={className}>
    <Toolbar>
      <Typography variant="h6" className={`${className}__heading`}>
        Aureto
      </Typography>
      <NextLink href="/">
        <Button component="a" href="/" color="inherit">
          <AddIcon />
          New Project
        </Button>
      </NextLink>
    </Toolbar>
  </AppBar>
);

Header.defaultProps = {};
export default withStyles(Header, styles);
export { Header };

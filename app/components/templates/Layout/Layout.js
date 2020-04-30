// @flow
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import type { Node } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import get from 'lodash/get';
import Theme from '../../../styles/theme';
import Header from '../../../containers/organisms/Header';
import Footer from '../../../containers/organisms/Footer';

type Props = {
  children: Node,
};

const Main = styled.main`
  min-height: calc(100vh - 120px);
  position: relative;
`;

const Layout = ({ children }: Props): Node => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000" />
        </Head>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

Layout.defaultProps = {};

/* istanbul ignore next */
const mapDispatchToProps = () => ({});

const mapStateToProps /* istanbul ignore next */ = (state: Object): { deviceType: string } => ({
  deviceType: get(state, ['global', 'globalData', 'deviceType', '']),
  isNavigationDrawerOpen: get(state, ['global', 'header', 'isNavigationDrawerOpen', '']),
  topBanner: get(state, ['global', 'header', 'topBanner', '']),
  isTablet: get(state, ['global', 'globalData', 'isTablet', '']),
  topBannerModalContent: get(state, ['global', 'header', 'topBannerModalContent', '']),
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
export { Layout };

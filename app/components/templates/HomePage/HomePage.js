// @flow
import React from 'react';
import type { Node } from 'react';
import Layout from '../Layout';
import HeadTag from '../../atoms/HeadTag';
import NewProject from '../../organisms/NewProject';

const HomePage = (): Node => {
  return (
    <Layout title="home">
      <HeadTag description="Audit Review Tool" title="AuReTo - Audit Review Tool" />
      <NewProject />
    </Layout>
  );
};

HomePage.defaultProps = {};

export default HomePage;

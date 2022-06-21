import * as React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
// markup
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <HomeHero />
      </Layout>
    </div>
  );
};

export default IndexPage;

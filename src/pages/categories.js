import * as React from 'react';
import Button from '../components/elements/Button';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';

//  markup
const categories = () => {
  return (
    <div>
      <Layout>
        <Button />
        <HomeHero />
      </Layout>
    </div>
  );
};

export default categories;

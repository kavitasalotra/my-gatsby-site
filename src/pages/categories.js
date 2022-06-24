import * as React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import Categories from '../components/Categories';

//  markup
const categories = () => {
  return (
    <Layout>
      <HomeHero
        title="Discover Most Popular  "
        title1="Categories on SnapX"
        subtitle="You are allowed to freely use SnapX Photography Template for your commercial  "
        subtitle1="You are not allowed to redistribute the template ZIP file on any other Free CSS "
      />
      <Categories />
    </Layout>
  );
};

export default categories;

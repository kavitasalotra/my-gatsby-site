import * as React from 'react';
import Categories from '../components/Categories';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import FeaturedItems from '../components/FeaturedItems';
import Contests from '../components/Contests';
import PricingPlans from '../components/PricingPlans';

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <FeaturedItems />
      <Categories />
      <Contests />
      <PricingPlans />
    </Layout>
  );
};

export default IndexPage;

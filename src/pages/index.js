import * as React from 'react';
import Categories from '../components/Categories';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Contests from '../components/Contests';
import PricingPlans from '../components/PricingPlans';

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <Features />
      <Categories />
      <Contests />
      <PricingPlans />
    </Layout>
  );
};

export default IndexPage;

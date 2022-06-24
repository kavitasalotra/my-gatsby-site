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
      <HomeHero
        title="Enter a world of Photos &"
        title1="Amazing Awards"
        subtitle="SnapX Photography is a professional website template with 5 different HTML pages for maximum customizations. It "
        subtitle1="is free for commercial usage. This Bootstrap v5.1.3 CSS layout is provided by TemplateMo Free CSS Templates."
      />
      <Features />
      <Categories />
      <Contests />
      <PricingPlans />
    </Layout>
  );
};
export default IndexPage;

import React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import ContestForm from '../components/ContestForm';
import ContestsWinners from '../components/ContestsWinners';

const Contests = () => {
  return (
    <Layout>
      <HomeHero
        title="Discover what's currently "
        title1="going on at SnapX"
        subtitle="When you need Free CSS Templates, you just remember our website TemplateMo. We  "
        subtitle1="provide you best quality website templates at absolutely free of charge. No hidden cost involved."
      />
      <ContestsWinners />
      <ContestForm />
    </Layout>
  );
};

export default Contests;

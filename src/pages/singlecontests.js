import * as React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import ContestForm from '../components/ContestForm';

const SingleContest = () => {
  return (
    <div>
      <Layout>
        <HomeHero
          title="A Walk In The Nature"
          title1="Contest"
          subtitle="When you need Free CSS Templates, you just remember our website TemplateMo. We  "
          subtitle1="provide you best quality website templates at absolutely free of charge. No hidden cost involved."
          button="learn more"
        />
        <ContestForm />
      </Layout>
    </div>
  );
};

export default SingleContest;

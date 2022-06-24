import * as React from 'react';
import styled from 'styled-components';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import ContestForm from '../components/ContestForm';

const Wrapper = styled.div`
  background-image: url('/images/hero-background-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;
const Contests = () => {
  return (
    <div>
      <Layout>
        <Wrapper>
          <HomeHero
            title="Discover what's currently "
            title1="going on at SnapX"
            subtitle="When you need Free CSS Templates, you just remember our website TemplateMo. We  "
            subtitle1="provide you best quality website templates at absolutely free of charge. No hidden cost involved."
          />
        </Wrapper>
        <ContestForm />
        <Contests />
      </Layout>
    </div>
  );
};

export default Contests;

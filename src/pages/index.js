import * as React from 'react';
import { graphql } from 'gatsby';
import Categories from '../components/Categories';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Contests from '../components/Contests';
import PricingPlans from '../components/PricingPlans';

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            firstName
            lastName
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.allMarkdownRemark.edges;
  console.log(home, 'home');
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
      <div className="columns">
        {home &&
          home &&
          home.map(({ node }) => (
            <div className="column is-3">
              <div className="box">
                <p>{node.frontmatter.firstName}</p>
                <p>{node.frontmatter.lastName}</p>
                <p>{node.frontmatter.date}</p>
                <p>{node.frontmatter.emailAddress}</p>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};
export default IndexPage;

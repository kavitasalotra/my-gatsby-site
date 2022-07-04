import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import Contests from '../components/Contests';
import PricingPlans from '../components/PricingPlans';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }) {
      edges {
        node {
          id
          frontmatter {
            image
            type
            contestAuthorName
            awards
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
      <div className="section is-medium">
        <div className="columns">
          {home &&
            home &&
            home.map(({ node }) => (
              <div className="column is-3">
                <div className="box">
                  <img src={node.frontmatter.image} alt="" />
                  <p>{node.frontmatter.type}</p>
                  <p>{node.frontmatter.contestAuthorName}</p>
                  <p>{node.frontmatter.awards}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;

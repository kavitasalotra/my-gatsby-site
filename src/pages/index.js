import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import ContestsWinners from '../components/ContestsWinners';
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
    generalYaml {
      id
      title
      title1
      subtitle
      subtitle1
    }
  }
`;

const IndexPage = ({ data }) => {
  const home = data.allMarkdownRemark.edges;
  const homeData = data.generalYaml;
  console.log(homeData, 'homeData');
  return (
    <Layout>
      <HomeHero
        title={homeData.title}
        title1={homeData.title1}
        subtitle={homeData.subtitle}
        subtitle1={homeData.subtitle1}
      />
      <Features />
      <Categories />
      <ContestsWinners />
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

import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import ContestsWinners from '../components/ContestsWinners';
import PricingPlans from '../components/PricingPlans';
import indexdata from '../content/general/indexdata.yaml';

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
        title={indexdata.title}
        title1={indexdata.title1}
        subtitle={indexdata.subtitle}
        subtitle1={indexdata.subtitle1}
        button={indexdata.button}
      />
      <Features />
      <Categories />
      <ContestsWinners />
      <PricingPlans />
      <div className="section">
        <div className="columns">
          {home &&
            home &&
            home.map(({ node }) => (
              <div className="column is-4">
                <div className="box">
                  <a href="/">
                    <img src={node.frontmatter.image} alt="" />
                  </a>
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

import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      edges {
        node {
          id
          frontmatter {
            image
            title
            rating
            winnerName
            contestAuthorName
            awards
          }
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  const post = data.allMarkdownRemark.edges;
  console.log(post, 'post');
  return (
    <Layout>
      <HomeHero
        title="Enter a world of Photos &"
        title1="Amazing Awards"
        subtitle="SnapX Photography is a professional website template with 5 different HTML pages for maximum customizations. It "
        subtitle1="is free for commercial usage. This Bootstrap v5.1.3 CSS layout is provided by TemplateMo Free CSS Templates."
      />
      <div className="section is-medium">
        <div className="container">
          <div className="columns is-multiline">
            {post.map(({ node }) => (
              <div className="column is-3">
                <div className="box">
                  <img src={node.frontmatter.image} alt="" />
                  <p>{node.frontmatter.title}</p>
                  <p>{node.frontmatter.rating}</p>
                  <p>{node.frontmatter.winnerName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;

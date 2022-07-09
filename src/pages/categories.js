import * as React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import categoriedata from '../content/general/categoriesdata.yaml';

const categories = () => {
  return (
    <Layout>
      <HomeHero
        title={categoriedata.homeTitle}
        title1={categoriedata.homeSubTitle}
        subtitle={categoriedata.homeDescription}
        subtitle1={categoriedata.homeDescriptionTwo}
        button={categoriedata.homeButton}
      />
      <Categories />
    </Layout>
  );
};

export default categories;

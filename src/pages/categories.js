import * as React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import categoriedata from '../content/general/categoriesdata.yaml';

const categories = () => {
  return (
    <Layout>
      <HomeHero
        title={categoriedata.title}
        title1={categoriedata.subtitle}
        subtitle={categoriedata.description}
        subtitle1={categoriedata.description1}
      />
      <Categories />
    </Layout>
  );
};

export default categories;

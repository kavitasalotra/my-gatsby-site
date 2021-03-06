import * as React from 'react';
import { Link } from 'gatsby';
import Card from './Card';

const Categories = () => {
  return (
    <div className=" section is-medium m-4">
      <div className="columns">
        <div className="column mb-6">
          <h1 className="text-small has-text-blue">Our Categories</h1>
          <p className="text-medium has-text-weight-bold">
            Check Out Popular Contest Categories
          </p>
        </div>
        <div className="column has-text-right">
          <Link
            to="/categories"
            type="button"
            className="button text-base has-text-blue has-border-radius py-4  is-responsive"
          >
            Discover All Categories
          </Link>
        </div>
      </div>
      <div className="columns">
        <div className="column is-3">
          <Card
            title="Nature Pic Contest"
            image="/images/icon-01.png"
            number="126"
            subtitle="Available Contests"
            cardimage="/images/popular-01.png"
            button="Nature Pic Contests"
            category="Top Contest"
          />
        </div>
        <div className="column is-3">
          <Card
            title="Random Pic Contest"
            image="/images/icon-02.png"
            number="116"
            subtitle="Available Contests"
            cardimage="/images/popular-02.png"
            button="Random Pic Contests"
            category="Top Contest"
          />
        </div>
        <div className="column is-3">
          <Card
            title="Portrait Pic Contest"
            image="/images/icon-03.png"
            number="164"
            subtitle="Available Contests"
            cardimage="/images/popular-03.png"
            button="Portrait Pic Contests"
            category="Top Contest"
          />
        </div>
        <div className="column is-3">
          <Card
            title="Space Pic Contest"
            image="/images/icon-04.png"
            number="135"
            subtitle="Available Contests"
            cardimage="/images/popular-04.png"
            button="Space Pic Contests"
            category="Top Contest"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;

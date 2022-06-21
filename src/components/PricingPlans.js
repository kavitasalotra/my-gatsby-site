import * as React from 'react';
import PricingCard from './PricingCard';

const PricingPlans = () => {
  return (
    <section className="hero is-medium ">
      <div className="hero-body">
        <div className="columns mb-5">
          <div className="column has-text-centered">
            <h1 className="text-small has-text-blue">Our Pricing</h1>
            <p className="text-medium has-text-weight-bold mb-5">
              Photography Contest Plans and Price Awards
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <PricingCard
              image="/images/pricing-01.jpg"
              heading="Basic Plan"
              title="Lorem Ipsum Dolores Sonte
              Songe Lorem Ipsum Dol
             Matrios Venga Heptuss"
              subtitle="Denim Sriracha Kogi
            Digital Photography Awards"
              number="$25 USD"
            />
          </div>
          <div className="column is-4">
            <PricingCard
              image="/images/pricing-02.jpg"
              heading="Standard Plan"
              title="Lorem Ipsum Dolores Sonte
              Songe Lorem Ipsum Dol
             Matrios Venga Heptuss Denim Sriracha Kogi"
              subtitle="Digital Photography Awards"
              number="$45 USD"
            />
          </div>
          <div className="column is-4">
            <PricingCard
              image="/images/pricing-03.jpg"
              heading="Advanced  Plan"
              title="Lorem Ipsum Dolores Sonte
              Songe Lorem Ipsum Dol
             Matrios Venga Heptuss Denim Sriracha Kogi Digital Photography Awards Digital Photography Awards"
              number="$85 USD"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

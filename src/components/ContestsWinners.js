import { Link } from 'gatsby';
import * as React from 'react';
import ContestCard from './ContestCard';

const ContestsWinners = () => {
  return (
    <div className="hero is-medium has-background-primary-light">
      <div className="hero-body pb-4">
        <div className="columns mb-5">
          <div className="column has-text-centered">
            <h1 className="text-small has-text-blue is-size-5-mobile">
              Closed Photography Contests
            </h1>
            <p className="text-medium has-text-weight-bold mb-5 is-size-6-mobile">
              Previous Contests With Handpicked Winners
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <ContestCard
              image="/images/closed-01.jpg"
              title="96 Participants"
              subtitle="Number Of Artists"
              title1="410 Pictures"
              subtitle1="Submitted pics"
              winner="Anthony Soft"
            />
          </div>
          <div className="column is-4">
            <ContestCard
              image="/images/closed-02.jpg"
              title="88 Participants"
              subtitle="Number Of Artists"
              title1="320 Pictures"
              subtitle1="Submitted pics"
              winner="Anthony Soft"
            />
          </div>
          <div className="column is-4">
            <ContestCard
              image="/images/closed-03.jpg"
              title="74 Participants"
              subtitle="Number Of Artists"
              title1="284 Pictures"
              subtitle1="Submitted pics"
              winner="Anthony Soft"
            />
          </div>
        </div>
        <div className="buttons m-4 columns">
          <div className="column is-12 has-text-centered">
            <Link
              to="/contests"
              type="button"
              className="button has-text-blue has-border-radius p-4 mb-5"
            >
              Browse Open Contests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContestsWinners;

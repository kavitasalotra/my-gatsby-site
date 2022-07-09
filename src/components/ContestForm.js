import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Container = styled.div`
  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: ${theme.mainBrandColor} !important;
    right: 1.125em;
    z-index: 4;
  }
  .select,
  select {
    width: 100% !important;
  }
`;

const ContestForm = () => {
  return (
    <Container className="container p-6 m-6">
      <div className="section is-medium  py-4 px-3">
        <div className="columns is-vcentered ">
          <div className="column is-12">
            <div className="field">
              <label className="label">Search an contest</label>
              <div className="control  border-radius-small">
                <input
                  className="input has-text-grey-lighter has-background-white-ter"
                  type="text"
                  placeholder="Contest Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Pick Category</label>
              <div className="control">
                <div className="select border-radius-small">
                  <select className="has-text-grey-lighter has-background-white-ter">
                    <option>Choose a category</option>
                    <option>Nature Photography (220 Contests)</option>
                    <option>Portrait Photography (172 Contests)</option>
                    <option>Space Photography (92 Contests)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Award Price</label>
              <div className="control">
                <div className="select border-radius-small">
                  <select className="has-text-grey-lighter has-background-white-ter">
                    <option>Choose a price</option>
                    <option>$500 to $1,000</option>
                    <option>$1,500 to $2,000</option>
                    <option>$2,500 to $3000</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button
                  type="button"
                  className="button border-radius-small has-background-blue is-fullwidth mt-6"
                >
                  Search now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContestForm;

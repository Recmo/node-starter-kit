import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import { getTranslator } from '../reducers/translation';

export const FooterComponent = ({ i18n }) => (
  <div>
    <FilterLink filter="SHOW_ALL">
      {i18n('All')}
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      {i18n('Active')}
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      {i18n('Completed')}
    </FilterLink>
  </div>
);

FooterComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(FooterComponent);

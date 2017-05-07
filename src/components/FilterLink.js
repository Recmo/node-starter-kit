import { connect } from 'react-redux';
import Link from './Link';
import { setVisibilityFilter } from '../reducers/visibility-filter';

export default connect(
  (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
  }),
  (dispatch, ownProps) => ({
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  })
)(Link);

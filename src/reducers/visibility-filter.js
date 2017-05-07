import { makeCreators, makeReducer } from './redux-utils';
import VisibilityFilters from '../visibility-filters';

const initialState = VisibilityFilters.SHOW_ALL;

const reducers = {
  setVisibilityFilter: (state, filter) => filter,
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { setVisibilityFilter } = creators;
export default reducer;

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addNew state domain
 */

const selectAddNewDomain = state => state.addNew || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddNew
 */

const makeSelectAddNew = () =>
  createSelector(
    selectAddNewDomain,
    substate => substate,
  );

export default makeSelectAddNew;
export { selectAddNewDomain };

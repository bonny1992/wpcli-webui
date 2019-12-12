/*
 *
 * AddNew reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';
import { DO_SHOW, DO_HIDE } from './constants'

export const initialState = {
  show: false
};

/* eslint-disable default-case, no-param-reassign */
const addNewReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case DO_SHOW:
        return {
          show: true
        }
      case DO_HIDE:
        return {
          show: false
        }
    }
  });

export default addNewReducer;

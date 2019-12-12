/*
 *
 * AddNew actions
 *
 */

import { DEFAULT_ACTION } from './constants';
import { DO_SHOW, DO_HIDE } from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function doShow() {
  return {
    type: DO_SHOW
  }
}

export function doHide() {
  return {
    type: DO_HIDE
  }
}


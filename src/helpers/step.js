import { MIN_STEP_VALUE, MAX_STEP_VALUE } from '../constants';
import isInteger from './isInteger';

export const isValidValue = step => {
  const value = parseInt(step, 10);
  return isInteger(value) && value >= MIN_STEP_VALUE && value <= MAX_STEP_VALUE;
};

import { displayUtils } from './displayUtils.js';
import { domUtils } from './domUtils.js';


export const validationUtils = {
  checkAndConvertArray(value) {
    return value = Array.isArray(value)? value : [value];
  },

  isNonEmptyString(value) {
    return typeof value === 'string' && value.trim() !== '';
  },

  isValidHTMLElement(element) {
    return element instanceof HTMLElement;
  },
};
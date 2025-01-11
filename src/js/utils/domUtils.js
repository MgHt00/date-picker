import { displayUtils } from './displayUtils.js';
import { validationUtils } from './validationUtils.js'; 

export const domUtils = {
  createElement(target, elementType) {
    if (!validationUtils.isNonEmptyString(elementType)) {
      throw new Error('Invalid element type: Type should be a non-empty string.');
    }

    const validTagPattern = /^[a-zA-Z][a-zA-Z0-9-]*$/; //[LE01]
    if (!validTagPattern.test(elementType)) {
      throw new Error(`Invalid tag name: '${elementType}' is not a valid HTML tag name.`);
    }

    return target.createElement(elementType);
  },

  addID(targetElement, id){
    if (validationUtils.isValidHTMLElement(targetElement)) {
      targetElement.id = id;
    } else {
      console.error('Provided target is not a valid HTML element.');
    }
  }
};

import { validationUtils } from './validationUtils.js';
import { domUtils } from './domUtils.js';

export const displayUtils = {
  show(target) {
    return target.classList.add('visible');
  },

  addClass(targetElements, className) {
    targetElements = validationUtils.checkAndConvertArray(targetElements);
    if (!validationUtils.isNonEmptyString(className)) return this;

    targetElements.forEach(element => {
      if (element) element.classList.add(className);
    });
    return this;
  },

  removeClass(targetElements, className) {
    targetElements = validationUtils.checkAndConvertArray(targetElements);
    if (!validationUtils.isNonEmptyString(className)) return this;

    targetElements.forEach(element => {
      if (element) element.classList.remove(className);
    });
    return this;
  },

  emptyClass(targetElements) {
    targetElements.forEach(element => {
      if (element) element.className = '';
    });
    return this;
  },

  addTextContent(targetElement, content) {
    if (targetElement.tagName.toLowerCase() === 'input') {
      targetElement.value = content; // If it's an input element, update its value
    } else {
      targetElement.textContent = content;
    }
    return this;
  },
};
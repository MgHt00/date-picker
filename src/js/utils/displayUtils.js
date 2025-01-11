import { validationUtils } from './validationUtils.js';
import { domUtils } from './domUtils.js';

export const displayUtils = {
  show(target) {
    if (validationUtils.isValidHTMLElement(target)) {
      this
        .removeClass(target, 'hidden')
        .addClass(target, 'visible');
    } else {
      console.warn('Invalid target element:', target);
    }
  },

  hide(target){
    if (validationUtils.isValidHTMLElement(target)) {
      this
        .removeClass(target, 'visible')
        .addClass(target, 'hidden');
    } else {
      console.warn('Invalid target element:', target);
    }
  },

  addClass(targetElements, className) {
    targetElements = validationUtils.checkAndConvertArray(targetElements);
    if (!validationUtils.isNonEmptyString(className)) return this;

    targetElements.forEach(element => {
      if (element) element.classList.add(className); // [LE05]
    });
    return this;
  },

  addMultipleClass(targetElements, classNames = []) {
    targetElements = validationUtils.checkAndConvertArray(targetElements);
    classNames = validationUtils.checkAndConvertArray(classNames);
    if(classNames.some(className => !validationUtils.isNonEmptyString(className))) {
      console.error('Invalid class names array');
      return this;
    }

    targetElements.forEach(element => {
      if(element) {
        classNames.forEach(className => {
          displayUtils.addClass(element, className)
        });
      }
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
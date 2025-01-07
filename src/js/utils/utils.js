export const utils = {
  show(target) {
    return target.classList.add('visible');
  },

  isValidClassName(value) {
    return typeof value === 'string' && value.trim() !== '';
  },

  checkAndConvertArray(value) {
    return value = Array.isArray(value)? value : [value];
  },
  
  createElement(target, type) {
    return target.createElement(type);
  },

  removeClass(targetElements = [], className) {  
    targetElements = this.checkAndConvertArray(targetElements);
    if (!this.isValidClassName(className)) return this; // Validate className

    targetElements.forEach(element => {
      if (element) element.classList.remove(className);
    });
    return this;
  },

  addClass(targetElements = [], className) {  
    targetElements = this.checkAndConvertArray(targetElements);
    if (!this.isValidClassName(className)) return this;

    targetElements.forEach(element => {
      if (element) element.classList.add(className);
    });
    return this;
  },

  emptyClass(targetElements = []) {
    targetElements.forEach(element => {
      if (element) element.className = '';
    });
    return this;
  },

  addTextContent(targetElement, content) {
    targetElement.textContent = content;
    return this;
  },
}
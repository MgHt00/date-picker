export const utils = {
  show(target) {
    return target.classList.add('visible');
  },

  isNonEmptyString(value) {
    return typeof value === 'string' && value.trim() !== '';
  },

  checkAndConvertArray(value) {
    return value = Array.isArray(value)? value : [value];
  },
  
  createElement(target, elementType) {
    // Check if elementType is a non-empty string
    if (this.isNonEmptyString(elementType)) {
      throw new Error('Invalid element type: Type should be a non-empty string.');
    }

    // Validate the tag name against a basic pattern for HTML tags
    const validTagPattern = /^[a-zA-Z][a-zA-Z0-9-]*$/;
    if (!validTagPattern.test(type)) {
      throw new Error(`Invalid tag name: '${type}' is not a valid HTML tag name.`);
    }

    // Create and return the element
    return target.createElement(type);
  },

  removeClass(targetElements = [], className) {  
    targetElements = this.checkAndConvertArray(targetElements);
    if (!this.isNonEmptyString(className)) return this; // Validate className

    targetElements.forEach(element => {
      if (element) element.classList.remove(className);
    });
    return this;
  },

  addClass(targetElements = [], className) {  
    targetElements = this.checkAndConvertArray(targetElements);
    if (!this.isNonEmptyString(className)) return this;

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
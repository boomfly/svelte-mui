// https://github.com/TheComputerM/svelte-materialify/blob/master/packages/svelte-materialify/src/internal/Style/index.js

function format(input) {
  if (typeof input === 'number') return `${input}px`;
  return input;
}

/**
 * @param node {Element}
 * @param styles {Object}
 */
export default (node, _styles) => {
  let styles = _styles;
  Object.entries(styles).forEach(([key, value]) => {
    if (value) node.style.setProperty(`--s-${key}`, format(value));
  });

  return {
    update(newStyles) {
      Object.entries(newStyles).forEach(([key, value]) => {
        if (value) {
          node.style.setProperty(`--s-${key}`, format(value));
          delete styles[key];
        }
      });

      Object.keys(styles).forEach((name) => node.style.removeProperty(`--s-${name}`));

      styles = newStyles;
    },
  };
};
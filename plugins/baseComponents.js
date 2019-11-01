import Vue from 'vue';

const requireComponent = require.context(
  '~/components/baseComponents/',
  // Do not look in subdirectories
  false,
  // Include .vue files
  /[A-Z]\w+\.(vue)$/
);

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .replace(/\.\w+$/, '')
    .replace(/^.\//, '')
    .split('-')
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    .join('');

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});

import AOS from 'aos';

import 'aos/dist/aos.css';

// AOS.init({
//   disable: 'phone',
//   duration: 650,
//   delay: 100,
//   once: true
// });

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    disable: 'phone',
    duration: 650,
    delay: 100,
    once: true
  });
};

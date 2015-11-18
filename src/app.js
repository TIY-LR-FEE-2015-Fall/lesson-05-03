import Dropdown from './views/dropdown';

export default function() {
  $('.dropdown').each((index, el) => {
    new Dropdown({ el: el });
  });
}

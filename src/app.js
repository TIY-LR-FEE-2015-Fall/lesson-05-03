export default function() {
  var Dropdown = Backbone.View.extend({
    events: {
      mouseenter: 'show',
      mouseleave: 'show',
    },

    show() {
      this.$el.find('.dropdown__content').slideToggle();
    },
  });

  $('.dropdown').each((index, el) => {
    new Dropdown({ el: el });
  });
}

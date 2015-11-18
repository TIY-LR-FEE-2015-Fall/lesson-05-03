export default Backbone.View.extend({
  events: {
    mouseenter: 'show',
    mouseleave: 'show',
  },

  show() {
    this.$el.find('.dropdown__content').slideToggle();
  },
});

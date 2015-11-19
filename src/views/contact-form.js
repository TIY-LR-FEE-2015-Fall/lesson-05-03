import Contact from '../models/contact';

export default Backbone.View.extend({
  events: {
    submit(ev) {
      ev.preventDefault();

      var contact = new Contact(this.getValuesFromForm());

      if (!contact.isValid()) {
        return alert(contact.validationError);
      }

      contact.save();
    },
  },

  getValuesFromForm() {
    var name = this.$el.find('#contact-name').val();
    var phone = this.$el.find('#contact-phone').val();

    return {name, phone};
  },
});

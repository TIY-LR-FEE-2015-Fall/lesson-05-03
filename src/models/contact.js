export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/contacts-rt',

  defaults: {
    name: 'John Doe',
    phone: '555-555-5555',
  },

  validate() {
    if (!this.get('name')) {
      return `Contacts need a name`;
    }

    if (!this.get('phone')) {
      return `Contacts need a phone`;
    }
  },
});

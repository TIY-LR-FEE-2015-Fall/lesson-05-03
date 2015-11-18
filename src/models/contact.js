export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/contacts-rt',

  defaults: {
    name: 'John Doe',
    phone: '555-555-5555',
  },

  validate() {
    return this.get('name') && this.get('phone');
  },
});

import Dropdown from './views/dropdown';
import ContactForm from './views/contact-form';

export default function() {
  $('.dropdown').each((index, el) => {
    new Dropdown({ el: el });
  });

  new ContactForm({ el: '.contact-form' });

  // var ContactList = Backbone.Collection.extend({
  //   model: Contact,
  //   url: 'http://tiny-lr.herokuapp.com/collections/contacts-rt',
  // });
  //
  // var allContacts = new ContactList();
  //
  // allContacts.fetch().then(function() {
  //   console.log(allContacts);
  // });
}

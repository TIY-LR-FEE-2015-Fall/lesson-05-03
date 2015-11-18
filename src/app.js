import Dropdown from './views/dropdown';
import Contact from './models/contact';

export default function() {
  $('.dropdown').each((index, el) => {
    new Dropdown({ el: el });
  });

  $('.contact-form').on('submit', function(ev) {
    ev.preventDefault();

    var name = $('#contact-name').val();
    var phone = $('#contact-phone').val();

    var contact = new Contact({
      name, phone,
    });

    if (!contact.validate()) {
      return alert('Bad input');
    }

    contact.save();
  });

  var ContactList = Backbone.Collection.extend({
    model: Contact,
    url: 'http://tiny-lr.herokuapp.com/collections/contacts-rt',
  });

  var allContacts = new ContactList();

  allContacts.fetch().then(function() {
    console.log(allContacts);
  });
}

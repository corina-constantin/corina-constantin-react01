import contacts from './data.js';

export const findContacts = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    //return needle.trim() === contact.name;
    const values = Object.values(contact);
    //[1, 'Carol', 'Carolson', '0744', 'carol@carolson.com"]

    const haystack = values.reduce((haystack, value) => {
      if (typeof value === 'string') {
        haystack += value;
      }

      return haystack;
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });

  return results;
};

export const createContact = (contact) => {
  //push mutates
  contacts.push(contact);
};

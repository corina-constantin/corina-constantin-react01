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

    //case insensitive search + spaces search
    if (
      haystack.toLowerCase().includes(needle.toLowerCase().replace(/\s+/g, ''))
    ) {
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

export const deleteContact = (contactId) => {
  let contactIndex = -1;

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contactId === contact.id) {
      contactIndex = i;

      break;
    }
  }

  if (contactIndex >= 0) {
    //splice mutates
    contacts.splice(contactIndex, 1);
  }
};

export const findContact = (contactId) => {
  const contact = contacts.find((contact) => {
    return contact.id === Number(contactId);
  });
  return contact;
};

export const createPet = (contactId, pet) => {
  const contact = findContact(contactId);

  if (contact === undefined) {
    return;
  }

  contact.pets = contact.pets || [];

  //push mutates

  contact.pets.push(pet);
};

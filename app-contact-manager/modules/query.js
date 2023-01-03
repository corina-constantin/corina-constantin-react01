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

export const updateContact = (contactId, { name, surname, phone, email }) => {
  //const name=contact.name
  const contact = findContact(contactId);

  if (!contact) {
    return;
  }

  contact.name = name;
  contact.surname = surname;
  contact.phone = phone;
  contact.email = email;
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

export const findPet = (contactId, petId) => {
  const contact = findContact(contactId);

  if (!contact) {
    return;
  }

  const pet = contact.pets.find((pet) => {
    return pet.id === Number(petId);
  });
  return pet;
};

export const updatePet = (contactId, petId, { name, species, age }) => {
  const pet = findPet(contactId, petId);

  if (!pet) {
    return;
  }

  pet.name = name;
  pet.species = species;
  pet.age = age;
};

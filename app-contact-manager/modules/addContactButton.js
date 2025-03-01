import { clearMessages } from './notificationBar.js';
//default exports can be renamed
import xmas from './stage.js';
import { render } from './addContact.js';

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', () => {
  clearMessages();
  xmas.innerHTML = '';

  xmas.append(render());
});

export default addContactButton;

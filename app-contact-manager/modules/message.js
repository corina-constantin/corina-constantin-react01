export default (message = '', type = 'success') => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', `alert-${type}`);

  //x button
  const closeButton = document.createElement('button');
  closeButton.classList.add('btn', 'btn-close');

  messageContainer.innerText = message;
  messageContainer.appendChild(closeButton);

  //am pus 5 secunde ca nu apucam sa apas X pana disparea mesajul
  setTimeout(() => {
    messageContainer.remove();
  }, 5000);

  return messageContainer;
};

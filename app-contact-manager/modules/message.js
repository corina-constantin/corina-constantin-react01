export default (message = '', type = 'success') => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', `alert-${type}`);

  //am vazut ca se mai poate pune clasa btn-close din bootstrap, in loc de X. Mi s-a parut ca arata mai frumos
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

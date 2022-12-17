const notificationBar = document.querySelector('.notification-bar');

export const addMessage = (messageElement) => {
  notificationBar.append(messageElement);
};

export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

notificationBar.addEventListener('click', (event) => {
  const { target } = event;

  if (target.nodeName !== 'BUTTON' || !target.classList.contains('btn-close')) {
    return;
  }

  target.parentElement.remove();
});

export default notificationBar;

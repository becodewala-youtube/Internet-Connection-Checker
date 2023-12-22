const status = document.querySelector('.status');
const message = document.querySelector('.message');

function checkConnection() {
  const online = navigator.onLine;
  if (online) {
    status.style.backgroundColor = '#4CAF50';
    message.textContent = 'You are online';
  } else {
    status.style.backgroundColor = '#f44336';
    message.textContent = 'You are offline';
  }
}

checkConnection();

window.addEventListener('online', checkConnection);
window.addEventListener('offline', checkConnection);

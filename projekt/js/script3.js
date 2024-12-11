document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement('button');
    button.textContent = 'No';
    button.addEventListener('click', () => {
      alert('Ok');
    });
    document.querySelector('main').appendChild(button);
  });
  
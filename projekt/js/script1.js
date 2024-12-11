document.addEventListener("DOMContentLoaded", () => {
    const list = document.createElement('ul');
    for (let i = 1; i <= 5; i++) {
      const item = document.createElement('li');
      item.textContent = `${i}`;
      list.appendChild(item);
    }
    document.querySelector('main').appendChild(list);
  });
  
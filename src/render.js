const itemsContainer = document.querySelector('.cards');

/**
 *
 * @param {Object} item
 * @param {string} item.id
 * @param {string} item.name
 * @param {string} item.lastName
 * @param {string} item.phoneNumber
 */
function renderItem(item) {
  const note = document.createElement('div');
  note.classList.add('card', 'mb-1');
  note.dataset.id = item.id;
  note.innerHTML = `
  <div class="card-body">
            <h5 class="card-title">${item.name} ${item.lastName}</h5>
            <p class="card-text">${item.phoneNumber}</p>
          </div>
  `;
  itemsContainer.append(note);
}

function clearList() {
  return itemsContainer.innerHTML = '';
}


/**
 *
 * @param {Array} items
 */
export function renderItems(items) {
  clearList();

  items.forEach((item) => {
    renderItem(item);
  });
}

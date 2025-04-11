import { usersData } from './index.js';

const buttonContainer = document.querySelector('.pagination');
const countWrapper = document.querySelector('.count-wrapper');

/**
 *
 * @param {number} currentPage
 * @param {number} count
 * @param {number} limit
 */
export function renderPagination(currentPage, count, limit) {
  const totalPages = Math.ceil(count / limit);

  buttonContainer.innerHTML = '';


  const previousItemElement = document.createElement('li');
  previousItemElement.classList.add('page-item');
  const previousLinkElement = document.createElement('a');
  previousLinkElement.classList.add('page-link');
  previousLinkElement.innerText = 'Previous';

  previousItemElement.append(previousLinkElement);

  if (currentPage === 1) {
    previousItemElement.classList.add('disabled');
  }

  previousLinkElement.addEventListener('click', (event) => {
    event.preventDefault();
    event.currentTarget.blur();

    usersData(currentPage - 1);
  });

  buttonContainer.append(previousItemElement);

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage || i === currentPage - 1 || i === currentPage + 1) {
      const currentItemElement = document.createElement('li');
      currentItemElement.classList.add('current-btn', 'page-item');
      const currentLinkElement = document.createElement('a');
      currentLinkElement.classList.add('page-link');
      currentLinkElement.innerText = `${i}`;

      currentItemElement.append(currentLinkElement);

      currentItemElement.addEventListener('click', () => usersData(i));

      buttonContainer.append(currentItemElement);

      if (currentPage === i) {
        currentItemElement.classList.add('active');
      }
    }

  }

  const nextItemElement = document.createElement('li');
  nextItemElement.classList.add('page-item');
  const nextLinkElement = document.createElement('a');
  nextLinkElement.classList.add('page-link');
  nextLinkElement.innerText = 'Next';

  nextItemElement.append(nextLinkElement);

  if (currentPage === totalPages) {
    nextItemElement.classList.add('disabled');
  }

  nextLinkElement.addEventListener('click', () => usersData(currentPage + 1));

  buttonContainer.append(nextItemElement);
}

/**
*
* @param {number} currentPage
* @param {number} count
* @param {number} limit
*/
export function renderPaginationCurrentPage(currentPage, count, limit) {
  const totalPages = Math.ceil(count / limit);

  countWrapper.innerHTML = `
  <p> Page ${currentPage} of ${totalPages}</p>
  `;
}


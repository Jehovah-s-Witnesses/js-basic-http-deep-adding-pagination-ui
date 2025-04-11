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
  previousItemElement.innerHTML = `
  <a class="page-link">Previous</a>
  `;

  if (currentPage === 1) {
    previousItemElement.classList.add('disabled');
  }

  previousItemElement.addEventListener('mousedown', (event) => {
    if (event.target.tagName === 'A') {
      event.preventDefault();
    }
  });

  previousItemElement.addEventListener('click', (event) => {
    if (event.target.closest('.page-link')) {
      usersData(currentPage - 1);
    }
  });

  buttonContainer.append(previousItemElement);

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage || i === currentPage - 1 || i === currentPage + 1) {
      const currentItemElement = document.createElement('li');
      currentItemElement.classList.add('page-item');
      currentItemElement.innerHTML = `
      <a class="page-link">${i}</a>
      `;

      currentItemElement.addEventListener('mousedown', (event) => {
        if (event.target.tagName === 'A') {
          event.preventDefault();
        }
      });

      currentItemElement.addEventListener('click', (event) => {
        if (event.target.closest('.page-link')) {
          usersData(i);
        }
      });

      buttonContainer.append(currentItemElement);

      if (currentPage === i) {
        currentItemElement.classList.add('active');
      }
    }

  }

  const nextItemElement = document.createElement('li');
  nextItemElement.classList.add('page-item');
  nextItemElement.innerHTML = `
  <a class="page-link">Next</a>
  `;

  if (currentPage === totalPages) {
    nextItemElement.classList.add('disabled');
  }

  nextItemElement.addEventListener('mousedown', (event) => {
    if (event.target.tagName === 'A') {
      event.preventDefault();
    }
  });

  nextItemElement.addEventListener('click', (event) => {
    if (event.target.closest('.page-link')) {
      usersData(currentPage + 1);
    }
  })

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


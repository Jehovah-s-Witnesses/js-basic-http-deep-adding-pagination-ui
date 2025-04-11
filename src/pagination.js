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


  const previousButton = document.createElement('button');
  previousButton.classList.add('previous');
  previousButton.innerText = 'Previous';

  if (currentPage === 1) {
    previousButton.disabled = true;
  }

  previousButton.addEventListener('click', () => usersData(currentPage - 1));

  buttonContainer.append(previousButton);

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage || i === currentPage - 1 || i === currentPage + 1) {
      const button = document.createElement('button');
      button.classList.add('current-btn');
      button.innerText = `${i}`;

      button.addEventListener('click', () => usersData(i));

      buttonContainer.append(button);
    }
  }

  const nextButton = document.createElement('button');
  nextButton.classList.add('next');
  nextButton.innerText = 'Next';

  if (currentPage === totalPages) {
    nextButton.disabled = true;
  }

  nextButton.addEventListener('click', () => usersData(currentPage + 1));

  buttonContainer.append(nextButton);
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


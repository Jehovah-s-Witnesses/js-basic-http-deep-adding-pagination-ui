import { renderItems } from './render.js';
import { renderPagination, renderPaginationCurrentPage } from './pagination.js';
import { getItem } from './request.js';

export let limit = 5;
export let currentPage = 1;

export const usersData = (page = 1) => {
  const offset = (page - 1) * limit;


  getItem(limit, offset).then((result) => {

    const items = result.items;
    const count = result.count;
    currentPage = page;

    if (items.length === 0) {
      console.log(`This page don't have any data`);
    }

    renderItems(items);
    renderPagination(currentPage, count, limit);
    renderPaginationCurrentPage(currentPage, count, limit);
  }).catch((err) => Promise.reject(`Error: ${err}`));
}

usersData();



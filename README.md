# js-basic-http-deep-adding-pagination-ui

## Should realize ui with pagination

## Overview
Create a web application that displays paginated data from a backend API. Your task is to implement client-side pagination that works in coordination with backend pagination parameters.


## API Details
### The backend API:
- Returns:

  - `items`: Array of data items for the current page
  - `count`: Total number of items across all pages
### Accepts parameters:
  - `offset`: Starting position of items to fetch (zero-based)
  - `limit`: Maximum number of items to return per page
## Requirements
### Functionality
1. Create an interface that fetches and displays data from the API
2. Implement pagination controls:
   - Next/Previous buttons
   - Page number buttons (showing current page and nearby pages)
   - Display current page and total pages
3. Fetch new data when changing pages
4. Handle loading states during API requests
5. Display appropriate message when no data is available
### Technical Details
1. Use JavaScript/TypeScript for implementation
2. Ensure the page doesn't reload when navigating between pages
3. Calculate the correct offset value based on the page number and limit
4. Disable pagination buttons when appropriate (e.g., Previous button on first page)
5. Display only a reasonable number of page buttons (e.g., current ±2 pages)

## Criteria:


- Resolve all errors in the file
- Ensure the code is properly formatted using ESLint (our [pipeline](https://github.com/rammfall-code/guidelines/blob/main/DICTIONARY.md#pipeline-a-pipeline-is-a-sequence-of-automated-steps-that-run-code-checks-it-is-triggered-in-github-after-code-is-pushed-the-pipeline-can-have-three-statuses-pending-checks-are-in-progress-failed-checks-did-not-pass-due-to-issues-like-incorrect-code-errors-or-failed-tests-and-passed-all-checks-were-successful) checks for this).
- The code must comply with the project [guidelines](https://github.com/rammfall-code/guidelines/blob/main/JS.md).
- Pass validation without any errors in [validator](https://validator.w3.org/nu/)
- Additionally, follow all [git guidelines](https://github.com/rammfall-code/guidelines/blob/main/GIT.md) to avoid issues.

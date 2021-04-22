import { SEARCH_BASE_URL, pageSize } from "./constants";

export interface QueryParams {
  keywords: string;
  minPrice: number | null;
  maxPrice: number | null;
  pageNumber: number;
}

export function generateSearchURL(queryParams: QueryParams) {

  // This IIFE is used to keep track of the number of times a query filter has been used
  // Its return value increases by one every 2 calls
  const getFilterCount = (function () {
    let count = 0;
    return function () {
      return Math.floor(count++ / 2);
    };
  })();

  const {keywords, maxPrice, minPrice, pageNumber} = queryParams

  const minPriceFilter =
    minPrice !== null
      ? `&itemFilter(${getFilterCount()}).name=MinPrice&itemFilter(${getFilterCount()}).value=${minPrice}`
      : "";

  const maxPriceFilter =
    maxPrice !== null
      ? `&itemFilter(${getFilterCount()}).name=MaxPrice&itemFilter(${getFilterCount()}).value=${maxPrice}`
      : "";

  const encodedKeywords = keywords.trim().split(/\s+/).join("%20");

  const keyWords = `&keywords=${encodedKeywords}`;
  const pagination = `&paginationInput.pageNumber=${pageNumber}&paginationInput.entriesPerPage=${pageSize}`;

  return `${SEARCH_BASE_URL}${keyWords}${minPriceFilter}${maxPriceFilter}${pagination}`;
}

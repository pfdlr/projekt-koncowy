export const API_PRODUCTS_URL = '/products/v2/list';
export const API_PRODUCT_URL = '/products/v3/detail';
export const BASE_URL = 'https://asos2.p.rapidapi.com';
export const HEADERS = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "asos2.p.rapidapi.com",
    "x-rapidapi-key": "cb8586fe1fmsh0f83d09e41fa9e3p171006jsn6155c4283dfa"
  }
};
export const LIST_PARAMS = {
  country: "US",
  currency: "USD",
  sort: "freshness",
  lang: "en-US",
  sizeSchema: "US",
  offset: "0",
  limit: 50,
  store: "US"
};
export const DETAIL_PARAMS = {
  store: "US",
  sizeSchema: "US",
  lang: "en-US",
  currency: "USD"
}
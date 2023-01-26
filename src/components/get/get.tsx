const url: string =
  "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

export async function getProducts() {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

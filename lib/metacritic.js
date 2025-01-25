export async function getProducts() {
  const LATEST_GAMES = "https://fakestoreapi.com/products";
  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  return json.map((item) => {
    const { description, id, image, price, title } = item;

    return {
      description,
      price,
      id,
      title,
      image,
    };
  });
}

export async function getProductDetails(ID) {
  const PRODUCT_DETAILS = `https://fakestoreapi.com/products/${ID}`;
  const rawData = await fetch(PRODUCT_DETAILS);
  const json = await rawData.json();
  const { description, id, image, price, title } = json;

  return {
    description,
    price,
    id,
    title,
    image,
  };
}

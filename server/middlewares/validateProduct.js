export function validateProduct(req, res, next) {
  const { name, price, image, description, category } = req.body;

  if (!name || price === undefined || !image || !description || !category) {
    return res.status(400).json({
      message: 'Please provide all required product fields',
    });
  }

  const productPrice = Number(price);

  if (!Number.isFinite(productPrice) || productPrice < 0) {
    return res.status(400).json({
      message: 'Price must be a number greater than or equal to 0',
    });
  }

  req.product = {
    name,
    price: productPrice,
    image,
    description,
    category,
  };

  return next();
}

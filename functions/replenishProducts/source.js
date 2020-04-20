exports = function(args) {
  const db = context.services.get("mongodb-atlas").db("swagstore");
  const products = db.collection("products");
  return products.updateMany({ inventory: { $lt: 5 } }, { $set: { "inventory" : 100 } });
};
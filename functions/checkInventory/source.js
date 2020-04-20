exports = function(args){
  const twilio = context.services.get("twilio");
  const db = context.services.get("mongodb-atlas").db("swagstore");
  const products = db.collection("products");
  const twilioNumber = context.values.get(`twilioNumber`);
  const inventoryAdminNumber = context.values.get(`inventoryAdminNumber`);
  return products.findOne({ inventory: { $lt: 5 }})
    .then(product=> {
      if(product){
        twilio.send({
          to: inventoryAdminNumber,
          from: twilioNumber,
          body: 'Product ' + product.name + ' inventory is: ' + product.inventory + ' ea'
        });
      }
    })
};
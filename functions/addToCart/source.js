exports = function(productId, quantity=1, user_id=""){
  /*
    Insert a copy of the Product Record in User.cart.products[]
    If it's already in the cart, increment the quantify
    Return contents of the cart.
  */
  user_id = user_id || context.user.id;
  const db = context.services.get("mongodb-atlas").db("swagstore");
  const products = db.collection("products");
  const users = db.collection("users");
  // is product in cart?
  
  return users.findOne({ user_id, "cart.products.id": productId })
    .then(user => {
      if(user) {
        // 이미 카트에 있을 경우 수량만 업데이트 
        user.cart.products = user.cart.products.map(product => {
          if(product.id === productId) {
            product.quantity = product.quantity + quantity;
          }
          return product;
        });
        
        return users.updateOne(
          {user_id},
          {"$set": { cart: user.cart }}
        );
      }
      // 카트에 없을 경우 카트에 추가
      else {
        return products.findOne({id: productId}).then(product => {
          let cartProduct = {
            id: productId,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: quantity
          };
          return users.updateOne(
            {user_id},
            {"$push": {"cart.products": cartProduct}}
          );
        });
      }
    })
    .then(result => {
      return context.functions.execute("updateCartTotals", user_id);
    })
    .then(result => {
      return users.findOne({user_id}, {_id: 0, cart: 1});
    });
};
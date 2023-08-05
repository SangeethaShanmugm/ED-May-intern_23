// callback hell
api.createorder(cart, function () {
  api.proceedPayment(function () {
    api.makePayment(function () {
      api.showorderSummary(function () {});
    });
  });
});

chefA(instruction, function () {
  //chefA will server the cake
  chefB(followinstruction, function () {
    console.log("Cake is done");
  });
});

//callback => pyramid of doom => callback Hell
//solve the prblm of callback hell => promise

//promise = object => state => fulfillment, rejected, pending

//promise chaining 
.then(function(){
    console.log(data )
} )
.then(() => console.log(result))
.then(() => console.log(result))
.then(() => console.log(result))
.then(() => console.log(result))

//to avoid promise chain we will go ahead with async and await 
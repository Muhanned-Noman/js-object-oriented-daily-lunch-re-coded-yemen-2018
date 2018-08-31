// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neiId = 0;
let cusId = 0;
let mealId = 0;
let deliId = 0;
class Neighborhood {
  constructor(name){
    this.id = ++neiId;
    this.name = name;
    store.neighborhoods.push(this);
  };
  deliveries(){
    return store.deliveries.filter(deliverie => {return deliverie.id === this.id;});
  };
  customers(){
    return store.customers.filter(customer => {return customer.id === this.id;});
  };
  meals(){

  };
};
class Customer{
  constructor(name, neighborhoodId){
    this.name = name;
    neighborhoodId.id = neighborhoodId;
    this.id = ++cusId;
    store.customers.push(this);
  };
  deliveries(){
    return store.deliveries.filter(deliverie => {return deliverie.id === this.id;});
  };
  meals(){
    return store.meals.filter(meal => {return meal.id === this.id;});
  };
  totalSpent(){

  };
};
class Meal{
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  };
  deliveries(){
    return store.deliveries.filter(deliverie => {return deliverie.id === this.id;});
  };
  customers(){
    return store.customers.filter(customer => {return customer.id === this.id;});
  };
  static byPrice(){

  };
};
class Delivery{
  constructor(mealId, neighborhoodId, customerId){
    mealId.id = mealId;
    neighborhoodId.id = neighborhoodId;
    customerId.id = customerId;
    this.id = ++deliId;
    store.deliveries.push(this);
  };
};

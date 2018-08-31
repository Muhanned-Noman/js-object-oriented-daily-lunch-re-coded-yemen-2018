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
    return store.deliveries.filter(deliverie => {return deliverie.neighborhoodId === this.id;});
  };
  customers(){
    return store.customers.filter(customer => {return customer.neighborhoodId === this.id;});
  };
  meals(){

  };
};
class Customer{
  constructor(name, neighborhoodId){
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = ++cusId;
    store.customers.push(this);
  };
  deliveries(){
    return store.deliveries.filter(deliverie => {return deliverie.customerId === this.id;});
  };
  meals(){
    return this.deliveries().filter(deliverie => deliverie.meal());
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
    return store.deliveries.filter(deliverie => {return deliverie.mealId === this.id;});
  };
  customers(){
    return store.customers.filter(customer => {return customer.id === this.id;});
  };
  static byPrice(){

  };
};
class Delivery{
  constructor(mealId, neighborhoodId, customerId){
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++deliId;
    store.deliveries.push(this);
  };
  meal(){
    return store.meals.find(meal => meal.id === this.mealId);
  };
  customer(){
    return store.customers.find(customer => customer.id === this.customerId);
  };
  neighborhood(){
    return store.neighborhoods.find(neighborhood => neighborhood.id === this.neighborhoodId);
  };
};

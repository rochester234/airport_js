var Airport = function () {
  this.DEFAULT_CAPACITY = 20;
  this.capacity = 0;


Airport.prototype.Land = function(plane) {
  if (capacity >= DEFAULT_CAPACITY) {
    throw "plane cannot land, airport is full";
  }
  capacity += 1
  return plane;
};

Airport.prototype.Takeoff = function(plane) {
  return plane;
};
};

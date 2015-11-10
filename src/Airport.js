var Airport = function () {
  this.DEFAULT_CAPACITY = 20;
  this.capacity = 0;

  this.Land = function(plane) {
    if (this.isFull()) throw new Error("plane cannot land, airport is full");
    this.capacity += 1
    return plane;
  };

  this.Takeoff = function(plane) {
    return plane;
  };

  this.isFull = function () {
    if (this.capacity >= this.DEFAULT_CAPACITY) {return true;}
  };

};

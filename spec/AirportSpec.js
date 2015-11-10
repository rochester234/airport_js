describe("Airport", function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
  });

  it("airport should receive an plane", function() {
    expect(airport.Land(plane)).toEqual(plane);
  });

  it("airport should allow a plane to take off", function() {
    expect(airport.Takeoff(plane)).toEqual(plane);
  });

  it("prevent plane from landing when airport full", function() {
      for (i = 0; i < 21; i++) {
      airport.Land(plane);
      };
    expect(airport.Land(plane)).toThrow(new Error("plane cannot land, airport is full"));
  });
});


/*describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
    });

    it("should return fizz if divisible by three", function() {
      fizzbuzz.output(3);
      expect(fizzbuzz.output(3)).toEqual("fizz");
      });

   it("should return buzz if divisible by five", function() {
     fizzbuzz.output(5);
     expect(fizzbuzz.output(5)).toEqual("buzz");
     });

   it("should return fizzbuzz if divisible by both three and five", function() {
     fizzbuzz.output(15);
     expect(fizzbuzz.output(15)).toEqual("fizzbuzz");
     });
   }); */

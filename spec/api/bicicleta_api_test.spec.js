var mongoose = require("mongoose");
var Bicicleta = require("../../models/bicicleta");
var request = require("request");
var server = require("../../bin/www");

var base_url = "http://localhost:3000/api/bicicletas";

describe("Bicicleta API", () => {
  beforeEach(function(done) {
    var mongoDB = "mongodb://localhost/testdb";
    mongoose.connect(mongoDB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function() {
      console.log("We are connected to test database!");
      done();
    });
  });

  afterEach(function(done) {
    Bicicleta.deleteMany({}, function(err, success) {
      if (err) console.log(err);
      done();
    });
  });
  describe("GET BICICLETAS /", () => {
    it("Status 200", done => {
      request.get(base_url, function(error, response, body) {
        var result = JSON.parse(body);
        expect(response.statusCode).toBe(200);
        expect(result.bicicletas.length).toBe(0);
        done();
      });
    });
  });

  describe("POST BICICLETAS /create", () => {
    it("Status 200", done => {
      var headers = { "content-type": "application/json" };
      var aBici =
        '{"id": 10, "color": "rojo", "modelo": "urbana", "lat": 10, "lng": -66}';
      request.post(
        {
          headers: headers,
          url: base_url + "/create",
          body: aBici
        },
        (error, response, body) => {
          expect(response.statusCode).toBe(200);
          var bici = JSON.parse(body).bicicleta;
          console.log(bici);
          expect(bici.color).toBe("rojo");
          expect(bici.ubicacion[0]).toBe(10);
          expect(bici.ubicacion[1]).toBe(-66);
          done();
        }
      );
    });
  });

  // describe("DELETE BICICLETAS /delete", () => {
  //   it("Status 204", done => {
  //     var a = Bicicleta.createInstance(1, "negro", "urbana", [
  //       10.1313,
  //       -66.1515
  //     ]);
  //     Bicicleta.add(a, function(err, newBici) {
  //       var headers = { "content-type": "application/json" };
  //     });
  //   });
  // });
});

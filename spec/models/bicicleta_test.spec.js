var mongoose = require("mongoose");
var Bicicleta = require("../../models/bicicleta");

describe("Testing Bicicletas", function() {
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

  describe("Bicicleta.createInstance", () => {
    it("crea una instancia de Bicicleta", () => {
      var bici = Bicicleta.createInstance(1, "verde", "urbana", [
        10.2345,
        -66.13285
      ]);

      expect(bici.code).toBe(1);
      expect(bici.color).toBe("verde");
      expect(bici.modelo).toBe("urbana");
      expect(bici.ubicacion[0]).toEqual(10.2345);
      expect(bici.ubicacion[1]).toEqual(-66.13285);
    });
  });

  describe("Bicicleta.allBicis", () => {
    it("comienza vacia", done => {
      Bicicleta.allBicis(function(err, bicis) {
        expect(bicis.length).toBe(0);
        done();
      });
    });
  });

  describe("Bicicleta.add", () => {
    it("agrega solo una bici", done => {
      var aBici = new Bicicleta({ code: 1, color: "verde", modelo: "urbana" });
      Bicicleta.add(aBici, function(err, newBici) {
        if (err) console.log(err);
        Bicicleta.allBicis(function(err, bicis) {
          expect(bicis.length).toEqual(1);
          expect(bicis[0].code).toEqual(aBici.code);

          done();
        });
      });
    });
  });

  describe("Bicicleta.findByCode", () => {
    it("debe devolver la bici con code 1", done => {
      Bicicleta.allBicis(function(err, bicis) {
        expect(bicis.length).toBe(0);

        var aBici = new Bicicleta({
          code: 1,
          color: "verde",
          modelo: "urbana"
        });
        Bicicleta.add(aBici, function(err, newBici) {
          if (err) console.log(err);
          var aBici2 = new Bicicleta({
            code: 2,
            color: "rojo",
            modelo: "urbana"
          });
          Bicicleta.add(aBici2, function(err, newBici) {
            if (err) console.log(err);
            Bicicleta.findByCode(1, function(error, targetBici) {
              expect(targetBici.code).toBe(aBici.code);
              expect(targetBici.color).toBe(aBici.color);
              expect(targetBici.modelo).toBe(aBici.modelo);

              done();
            });
          });
        });
      });
    });
  });

  describe("Bicicleta.removeByCode", () => {
    it("debe eliminar la bici con code 1", done => {
      Bicicleta.allBicis(function(err, bicis) {
        expect(bicis.length).toBe(0);
        var aBici = new Bicicleta({
          code: 1,
          color: "verde",
          modelo: "urbana"
        });
        Bicicleta.add(aBici, function(err, newBici) {
          if (err) console.log(err);
          var aBici2 = new Bicicleta({
            code: 2,
            color: "rojo",
            modelo: "urbana"
          });
          Bicicleta.add(aBici2, function(err, newBici) {
            if (err) console.log(err);
            Bicicleta.removeByCode(1, function(error, removedBici) {
              Bicicleta.allBicis(function(err, bicis) {
                expect(bicis.length).toBe(1);
              });

              done();
            });
          });
        });
      });
    });
  });
});

// beforeEach(() => {
//   Bicicleta.allBicis = [];
// });

// describe("Bicicleta.allBicis", () => {
//   it("comienza vacia", () => {
//     expect(Bicicleta.allBicis.length).toBe(0);
//   });
// });

// describe("Bicicleta.add", () => {
//   it("agregamos una", () => {
//     expect(Bicicleta.allBicis.length).toBe(0);

//     var a = new Bicicleta(1, "rojo", "urbana", [10.2345, -66.13285]);
//     Bicicleta.add(a);

//     expect(Bicicleta.allBicis.length).toBe(1);
//     expect(Bicicleta.allBicis[0]).toBe(a);
//   });
// });

// describe("Bicicleta.findbyId", () => {
//   it("debe devolver la bici con id 1", () => {
//     expect(Bicicleta.allBicis.length).toBe(0);
//     var aBici1 = new Bicicleta(1, "verde", "urbana");
//     var aBici2 = new Bicicleta(2, "morado", "carrera");
//     Bicicleta.add(aBici1);
//     Bicicleta.add(aBici2);

//     var targetBici = Bicicleta.findbyId(1);
//     expect(targetBici.id).toBe(1);
//     expect(targetBici.color).toBe(aBici1.color);
//     expect(targetBici.modelo).toBe(aBici1.modelo);
//   });
// });

// describe("Bicicleta.removeById", () => {
//   it("debe elimintar la bici con id 1", () => {
//     expect(Bicicleta.allBicis.length).toBe(0);
//     var aBici1 = new Bicicleta(1, "verde", "urbana");
//     Bicicleta.add(aBici1);
//     expect(Bicicleta.allBicis.length).toBe(1);
//     Bicicleta.removeById(1);
//     expect(Bicicleta.allBicis.length).toBe(0);
//   });
// });

var Bicicleta = require("../../models/bicicleta");

beforeEach(() => {
  Bicicleta.allBicis = [];
});

describe("Bicicleta.allBicis", () => {
  it("comienza vacia", () => {
    expect(Bicicleta.allBicis.length).toBe(0);
  });
});

describe("Bicicleta.add", () => {
  it("agregamos una", () => {
    expect(Bicicleta.allBicis.length).toBe(0);

    var a = new Bicicleta(1, "rojo", "urbana", [10.2345, -66.13285]);
    Bicicleta.add(a);

    expect(Bicicleta.allBicis.length).toBe(1);
    expect(Bicicleta.allBicis[0]).toBe(a);
  });
});

describe("Bicicleta.findbyId", () => {
  it("debe devolver la bici con id 1", () => {
    expect(Bicicleta.allBicis.length).toBe(0);
    var aBici1 = new Bicicleta(1, "verde", "urbana");
    var aBici2 = new Bicicleta(2, "morado", "carrera");
    Bicicleta.add(aBici1);
    Bicicleta.add(aBici2);

    var targetBici = Bicicleta.findbyId(1);
    expect(targetBici.id).toBe(1);
    expect(targetBici.color).toBe(aBici1.color);
    expect(targetBici.modelo).toBe(aBici1.modelo);
  });
});

describe("Bicicleta.removeById", () => {
  it("debe elimintar la bici con id 1", () => {
    expect(Bicicleta.allBicis.length).toBe(0);
    var aBici1 = new Bicicleta(1, "verde", "urbana");
    Bicicleta.add(aBici1);
    expect(Bicicleta.allBicis.length).toBe(1);
    Bicicleta.removeById(1);
    expect(Bicicleta.allBicis.length).toBe(0);
  });
});

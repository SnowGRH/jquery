QUnit.module("Lista elenorzesek", function () {
  QUnit.test("tábla létezik?", function (assert) {
    assert.ok(document.querySelectorAll("table tr"), "létrejön a tábla");
  });
  QUnit.test("Teljes lista megjelenik", function (assert) {
    assert.equal(osszeallit(), '<tr><th>nev</th><td>tul1</td><td>tul2</td></tr><tr><th>Lajos</th><td>éhes</td><td>nagyon éhes</td></tr><tr><th>Csaba</th><td>éhes</td><td>nagyon éhes</td></tr><tr><th>Gáspárlajos</th><td>éhes</td><td>nagyon éhes</td></tr>');
  });
  QUnit.test("a lista elemek meg egyeznek a lista hoszával", function (assert) {
    assert.ok( document.querySelectorAll("table tr").length, listaRM.length);
  });
  QUnit.test("üres lista esetén létre jön a tábla ágazat", function (assert) {
    const listaRM = []
    assert.ok( document.querySelectorAll("table tr").length, listaRM.length);
  });
  QUnit.test("Rosszul megadat adatokat ki irja", function (assert) {
    const listaRM = [{
      nev : "Lajos",
  }]
    assert.ok( document.querySelectorAll("table tr").length, listaRM.length);
  });
});

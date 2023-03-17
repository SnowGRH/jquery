const listaRM = [{
    nev : "Lajos",
    tul1 : "éhes",
    tul2 : "nagyon éhes",
},{
    nev : "Csaba",
    tul1 : "éhes",
    tul2 : "nagyon éhes",
},{
    nev : "Gáspárlajos",
    tul1 : "éhes",
    tul2 : "nagyon éhes",
}
]
$(function () {
    const TABEL = $("table");
    let kiíras = osszeallit();
    TABEL.append(kiíras);
    console.log(kiíras);
})

function osszeallit() {
    let txt =  `<tr><th>nev</th><td>tul1</td><td>tul2</td></tr>`;
    for (let i = 0; i < listaRM.length; i++) {
        txt += `<tr><th>${listaRM[i].nev}</th><td>${listaRM[i].tul1}</td><td>${listaRM[i].tul2}</td></tr>`
    }
    return txt
}
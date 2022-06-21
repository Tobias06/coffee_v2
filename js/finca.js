// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: 'AIzaSyBUp3_RYhiT0OCahwiYniqtloOCLqQ0JSY',
    authDomain: 'fb-api-grd.firebaseapp.com',
    projectId: 'fb-api-grd'
});

const db = firebase.firestore();


function guardarf() {
    //finca
    var nFinca_f = document.getElementById('text_nFinca_f').value;
    var ano_f = document.getElementById('text_ano_f').value;
    var pesos_f = document.getElementById('text_pesos_f').value;
    var aProductiva_f = document.getElementById('text_aProductiva_f').value;
    var aTotal_f = document.getElementById('text_aTotal_f').value;
    var factor_f = document.getElementById('text_factor_f').value;
    var tCultivo_f = document.getElementById('select_tCultivo_f').value;

    // Add a second document with a generated ID.
    db.collection("finca").add({

        nFinca_f: nFinca_f,
        ano_f: ano_f,
        pesos_f: pesos_f,
        aProductiva_f: aProductiva_f,
        aTotal_f: aTotal_f,
        factor_f: factor_f,
        tCultivo_f: tCultivo_f

    })
        .then(function (docRef) {
            //MJSOK();
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            //MJSERROR();
            console.error("Error adding document: ", Error);
        });

    document.getElementById('text_nFinca_f').value = "";
    document.getElementById('text_ano_f').value = "";
    document.getElementById('text_pesos_f').value = "";
    document.getElementById('text_aProductiva_f').value = "";
    document.getElementById('text_aTotal_f').value = "";
    document.getElementById('text_factor_f').value = "";
    document.getElementById('select_tCultivo_f').value = "";
}

//leer documento finca
var tablaFinca = document.getElementById("tablaFinca");
db.collection("finca").onSnapshot((querySnapshot) => {
    tablaFinca.innerHTML = ""
    querySnapshot.forEach((doc) => {
        tablaFinca.innerHTML += `<tr>
      <th scope='row' style="display:none;">${doc.id}</th>
      <td>${doc.data().nFinca_f}</td>
      <td>${doc.data().ano_f}</td>
      <td>${doc.data().pesos_f}</td>
      <td>${doc.data().aProductiva_f}</td>
      <td>${doc.data().aTotal_f}</td>
      <td>${doc.data().factor_f}</td>
      <td>${doc.data().tCultivo_f}</td>
      <td>
      <div class="table-data-feature">
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item"  data-toggle="modal" data-target="#clearbutton2"  type="button" title="Ver" onclick="viewFinca('${doc.id}','${doc.data().nFinca_f}', '${doc.data().ano_f}', '${doc.data().pesos_f}', '${doc.data().aProductiva_f}', '${doc.data().aTotal_f}', '${doc.data().factor_f}', '${doc.data().tCultivo_f}')">
        <i class="material-icons">visibility</i>
        </button>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item"  data-toggle="modal" data-target="#clearbutton2"  type="button" title="Editar" onclick="editarFinca('${doc.id}','${doc.data().nFinca_f}', '${doc.data().ano_f}', '${doc.data().elva_f}', '${doc.data().pesos_f}', '${doc.data().aProductiva_f}', '${doc.data().aTotal_f}', '${doc.data().factor_f}', '${doc.data().tCultivo_f}')">
        <i class="material-icons">edit</i>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" data-toggle="tooltip" data-placement="top" title="Delete" onclick="eliminarFinca('${doc.id}')">
        <i class="material-icons">delete</i>
        </button>
      </div>
    </td>
      </tr>`
    });
});

//LEER finca
function viewFinca(id, nFinca_f, ano_f, pesos_f, aProductiva_f, aTotal_f, factor_f, tCultivo_f) {

    document.getElementById('text_nFinca_f').value = nFinca_f;
    document.getElementById('text_ano_f').value = ano_f;
    document.getElementById('text_pesos_f').value = pesos_f;
    document.getElementById('text_aProductiva_f').value = aProductiva_f;
    document.getElementById('text_aTotal_f').value = aTotal_f;
    document.getElementById('text_factor_f').value = factor_f;
    document.getElementById('select_tCultivo_f').value = tCultivo_f;


    document.getElementById('text_nFinca_f').disabled = true;
    document.getElementById('text_ano_f').disabled = true;
    document.getElementById('text_pesos_f').disabled = true;
    document.getElementById('text_aProductiva_f').disabled = true;
    document.getElementById('text_aTotal_f').disabled = true;
    document.getElementById('text_factor_f').disabled = true;
    document.getElementById('select_tCultivo_f').disabled = true;

    document.getElementById("boton").style.display = 'none'
    var boton = document.getElementById("btnCloseIt");

    boton.onclick = function () {
        location.reload();
    }
    var btnClose = document.getElementById("close");

    btnClose.onclick = function () {
        location.reload();
    }
}

//borrar documento cosecha
function eliminarFinca(id) {
    var result = confirm("Eliminar?");
    if (result) {
        db.collection("finca").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
            alert("se elimino correctamente");
        }).catch(function (error) {
            alert("no se elimino" + error);
            console.error("Error removing document: ", error);
        }).catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    };
};

//actualiza documnento finca

function editarFinca(id, nFinca_f, ano_f, pesos_f, aProductiva_f, aTotal_f, factor_f, tCultivo_f) {

    document.getElementById('text_nFinca_f').value = nFinca_f;
    document.getElementById('text_ano_f').value = ano_f;
    document.getElementById('text_pesos_f').value = pesos_f;
    document.getElementById('text_aProductiva_f').value = aProductiva_f;
    document.getElementById('text_aTotal_f').value = aTotal_f;
    document.getElementById('text_factor_f').value = factor_f;
    document.getElementById('select_tCultivo_f').value = tCultivo_f;

    var boton = document.getElementById("boton");
    //boton.innerHTML = "Editar";

    /* var botonOut = document.getElementById("btnCloseIt");
    botonOut.onclick = function() {
        location.reload();
    }
    var btnClose = document.getElementById("close");
    btnClose.onclick = function() {
        location.reload();
    } */
    boton.onclick = function () {
        var taxiRef = db.collection("finca").doc(id);

        var nFinca_f = document.getElementById('text_nFinca_f').value;
        var ano_f = document.getElementById('text_ano_f').value;
        var pesos_f = document.getElementById('text_pesos_f').value;
        var aProductiva_f = document.getElementById('text_aProductiva_f').value;
        var aTotal_f = document.getElementById('text_aTotal_f').value;
         var factor_f = document.getElementById('text_factor_f').value;
        var tCultivo_f = document.getElementById('select_tCultivo_f').value;

        return taxiRef.update({

            nFinca_f: nFinca_f,
            ano_f: ano_f,
            pesos_f: pesos_f,
            aProductiva_f: aProductiva_f,
            aTotal_f: aTotal_f,
            factor_f: factor_f,
            tCultivo_f: tCultivo_f

        })
            .then(function () {
                alert("se actualizo correctamente");
                console.log("Document successfully updated!");
                boton.innerHTML = "Guardar";
                document.getElementById('text_nFinca_f').value = "";
                document.getElementById('text_ano_f').value = "";
                document.getElementById('text_pesos_f').value = "";
                document.getElementById('text_aProductiva_f').value = "";
                document.getElementById('text_aTotal_f').value = "";
                document.getElementById('text_factor_f').value = "";
                document.getElementById('select_tCultivo_f').value = "";
                location.reload();
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                alert("no se actualizo" + error);
                console.error("Error updating document: ", error);
            });
    }
}
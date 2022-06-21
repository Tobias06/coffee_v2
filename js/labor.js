// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: 'AIzaSyBUp3_RYhiT0OCahwiYniqtloOCLqQ0JSY',
    authDomain: 'fb-api-grd.firebaseapp.com',
    projectId: 'fb-api-grd'
});

const db = firebase.firestore();


function guardarl() {
    //labor
    var j_ano = document.getElementById('txt-ano').value;
    var j_TSiem_Mante = document.getElementById('txt_TSiem_Mante').value;
    var j_TCosecha = document.getElementById('txt_TCosecha').value;
    var j_PJornales = document.getElementById('txt_PJornales').value;
    var j_Pjornales_rec = document.getElementById('txt_Pjornales_rec').value;
    var j_Pdolar = document.getElementById('txt_Pdolar').value;
    var j_siembra_mante = document.getElementById('txt_siembra_mante').value;
    var j_Pjornal_recole = document.getElementById('txt_Pjornal_recole').value;


    db.collection("labor").add({

        j_ano: j_ano,
        j_TSiem_Mante: j_TSiem_Mante,
        j_TCosecha: j_TCosecha,
        j_PJornales: j_PJornales,
        j_Pjornales_rec: j_Pjornales_rec,
        j_Pdolar: j_Pdolar,
        j_siembra_mante: j_siembra_mante,
        j_Pjornal_recole: j_Pjornal_recole

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", Error);
        });

    j_ano = document.getElementById('txt-ano').value = "";
    j_TSiem_Mante = document.getElementById('txt_TSiem_Mante').value = "";
    j_TCosecha = document.getElementById('txt_TCosecha').value = "";
    j_PJornales = document.getElementById('txt_PJornales').value = "";
    j_Pjornales_rec = document.getElementById('txt_Pjornales_rec').value = "";
    j_Pdolar = document.getElementById('txt_Pdolar').value = "";
    j_siembra_mante = document.getElementById('txt_siembra_mante').value = "";
    j_Pjornal_recole = document.getElementById('txt_Pjornal_recole').value = "";
}

//leer documento labor
var tablaLabor = document.getElementById("tablaLabor");
db.collection("labor").onSnapshot((querySnapshot) => {
    tablaLabor.innerHTML = ""
    querySnapshot.forEach((doc) => {
        tablaLabor.innerHTML += `<tr>
      <th scope='row' style="display:none;">${doc.id}</th>
      <td>${doc.data().j_ano}</td>
      <td>${doc.data().j_TSiem_Mante}</td>
      <td>${doc.data().j_TCosecha}</td>
      <td>${doc.data().j_PJornales}</td>
      <td>${doc.data().j_Pjornales_rec}</td>
      <td>${doc.data().j_Pdolar}</td>
      <td>${doc.data().j_siembra_mante}</td>
      <td>${doc.data().j_Pjornal_recole}</td>
      <td>
      <div class="table-data-feature">
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item"  data-toggle="modal" data-target="#clearbutton2"  type="button" title="Ver" onclick="viewLabor('${doc.id}','${doc.data().j_ano}','${doc.data().j_TSiem_Mante}','${doc.data().j_TCosecha}','${doc.data().j_PJornales}','${doc.data().j_Pjornales_rec}','${doc.data().j_Pdolar}','${doc.data().j_siembra_mante}','${doc.data().j_Pjornal_recole}')">
        <i class="material-icons">visibility</i>
        </button>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item"  data-toggle="modal" data-target="#clearbutton2"  type="button" title="Editar" onclick="editarLabor('${doc.id}','${doc.data().j_ano}','${doc.data().j_TSiem_Mante}','${doc.data().j_TCosecha}','${doc.data().j_PJornales}','${doc.data().j_Pjornales_rec}','${doc.data().j_Pdolar}','${doc.data().j_siembra_mante}','${doc.data().j_Pjornal_recole}')">
        <i class="material-icons">edit</i>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" data-toggle="tooltip" data-placement="top" title="Delete" onclick="eliminarLabor('${doc.id}')">
        <i class="material-icons">delete</i>
        </button>
      </div>
    </td>
      </tr>`
    });
});

//LEER LAbor
function viewLabor(ida, j_ano, j_TSiem_Mante, j_TCosecha, j_PJornales, j_Pjornales_rec, j_Pdolar, j_siembra_mante, j_Pjornal_recole) {

    document.getElementById('txt-ano').value = j_ano;
    document.getElementById('txt_TSiem_Mante').value = j_TSiem_Mante;
    document.getElementById('txt_TCosecha').value = j_TCosecha;
    document.getElementById('txt_PJornales').value = j_PJornales;
    document.getElementById('txt_Pjornales_rec').value = j_Pjornales_rec;
    document.getElementById('txt_Pdolar').value = j_Pdolar;
    document.getElementById('txt_siembra_mante').value = j_siembra_mante;
    document.getElementById('txt_Pjornal_recole').value = j_Pjornal_recole;

    document.getElementById('txt-ano').disabled = true;
    document.getElementById('txt_TSiem_Mante').disabled = true;
    document.getElementById('txt_TCosecha').disabled = true;
    document.getElementById('txt_PJornales').disabled = true;
    document.getElementById('txt_Pjornales_rec').disabled = true;
    document.getElementById('txt_Pdolar').disabled = true;
    document.getElementById('txt_siembra_mante').disabled = true;
    document.getElementById('txt_Pjornal_recole').disabled = true;

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

//borrar documento labor
function eliminarLabor(id) {
    var result = confirm("Eliminar?");
    if (result) {
        db.collection("labor").doc(id).delete().then(function () {
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

//actualiza documnento cosecha

function editarLabor(ida, j_ano, j_TSiem_Mante, j_TCosecha, j_PJornales, j_Pjornales_rec, j_Pdolar, j_siembra_mante, j_Pjornal_recole) {

    document.getElementById('txt-ano').value = j_ano;
    document.getElementById('txt_TSiem_Mante').value = j_TSiem_Mante;
    document.getElementById('txt_TCosecha').value = j_TCosecha;
    document.getElementById('txt_PJornales').value = j_PJornales;
    document.getElementById('txt_Pjornales_rec').value = j_Pjornales_rec;
    document.getElementById('txt_Pdolar').value = j_Pdolar;
    document.getElementById('txt_siembra_mante').value = j_siembra_mante;
    document.getElementById('txt_Pjornal_recole').value = j_Pjornal_recole;

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
        var taxiRef = db.collection("labor").doc(id);

        var j_ano = document.getElementById('txt-ano').value;
        var j_TSiem_Mante = document.getElementById('txt_TSiem_Mante').value;
        var j_TCosecha = document.getElementById('txt_TCosecha').value;
        var j_PJornales = document.getElementById('txt_PJornales').value;
        var j_Pjornales_rec = document.getElementById('txt_Pjornales_rec').value;
        var j_Pdolar = document.getElementById('txt_Pdolar').value;
        var j_siembra_mante = document.getElementById('txt_siembra_mante').value;
        var j_Pjornal_recole = document.getElementById('txt_Pjornal_recole').value;


        return taxiRef.update({

            j_ano: j_ano,
            j_TSiem_Mante: j_TSiem_Mante,
            j_TCosecha: j_TCosecha,
            j_PJornales: j_PJornales,
            j_Pjornales_rec: j_Pjornales_rec,
            j_Pdolar: j_Pdolar,
            j_siembra_mante: j_siembra_mante,
            j_Pjornal_recole: j_Pjornal_recole

        })
            .then(function () {
                alert("se actualizo correctamente");
                console.log("Document successfully updated!");
                boton.innerHTML = "Guardar";

                document.getElementById('txt-ano').value = "";
                document.getElementById('txt_TSiem_Mante').value = "";
                document.getElementById('txt_TCosecha').value = "";
                document.getElementById('txt_PJornales').value = "";
                document.getElementById('txt_Pjornales_rec').value = "";
                document.getElementById('txt_Pdolar').value = "";
                document.getElementById('txt_siembra_mante').value = "";
                document.getElementById('txt_Pjornal_recole').value = "";

                location.reload();
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                alert("no se actualizo" + error);
                console.error("Error updating document: ", error);
            });
    }

}
// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: 'AIzaSyBUp3_RYhiT0OCahwiYniqtloOCLqQ0JSY',
    authDomain: 'fb-api-grd.firebaseapp.com',
    projectId: 'fb-api-grd'
});

const db = firebase.firestore();

function guardarc() {
    //cosecha
    var anio_h = document.getElementById('txt_anio_h').value;
    var mach_equip_h = document.getElementById('txt_mach_equip_h').value;
    var fuel_lubri_h = document.getElementById('txt_fuel_lubri_h').value;
    var transport_h = document.getElementById('txt_transport_h').value;

    // Add a second document with a generated ID.

    db.collection("cosecha").add({

        anio_h: anio_h,
        mach_equip_h: mach_equip_h,
        fuel_lubri_h: fuel_lubri_h,
        transport_h: transport_h

    })
        .then(function (docRef) {
            //MJSOK();
            //console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            //MJSERROR();
            //console.error("Error adding document: ", Error);
        });

    document.getElementById('txt_anio_h').value = "";
    document.getElementById('txt_mach_equip_h').value = "";
    document.getElementById('txt_fuel_lubri_h').value = "";
    document.getElementById('txt_transport_h').value = "";
}


//leer documento cosecha
var tablaCosecha = document.getElementById("tablaCosecha");
db.collection("cosecha").onSnapshot((querySnapshot) => {
    tablaCosecha.innerHTML = ""
    querySnapshot.forEach((doc) => {
        tablaCosecha.innerHTML += `<tr>
      <th scope='row' style="display:none;">${doc.id}</th>
      <td>${doc.data().anio_h}</td>
      <td>${doc.data().mach_equip_h}</td>
      <td>${doc.data().fuel_lubri_h}</td>
      <td>${doc.data().transport_h}</td>
      <td>
      <div class="table-data-feature">
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item"  data-toggle="modal" data-target="#clearbutton2"  type="button" title="Ver" onclick="viewCosecha('${doc.id}','${doc.data().anio_h}','${doc.data().mach_equip_h}','${doc.data().fuel_lubri_h}','${doc.data().transport_h}')">
        <i class="material-icons">visibility</i>
        </button>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item"  data-toggle="modal" data-target="#clearbutton2"  type="button" title="Editar" onclick="editarCosecha('${doc.id}','${doc.data().anio_h}','${doc.data().mach_equip_h}','${doc.data().fuel_lubri_h}','${doc.data().transport_h}')">
        <i class="material-icons">edit</i>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" data-toggle="tooltip" data-placement="top" title="Delete" onclick="eliminarCosecha('${doc.id}')">
        <i class="material-icons">delete</i>
        </button>
      </div>
    </td>
      </tr>`
    });
});

//LEER COSECHA
function viewCosecha(id, anio_h, mach_equip_h, fuel_lubri_h, transport_h) {

    document.getElementById('txt_anio_h').value = anio_h;
    document.getElementById('txt_mach_equip_h').value = mach_equip_h;
    document.getElementById('txt_fuel_lubri_h').value = fuel_lubri_h;
    document.getElementById('txt_transport_h').value = transport_h;

    document.getElementById('txt_anio_h').disabled = true;
    document.getElementById('txt_mach_equip_h').disabled = true;
    document.getElementById('txt_fuel_lubri_h').disabled = true;
    document.getElementById('txt_transport_h').disabled = true;

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
function eliminarCosecha(id) {
    var result = confirm("Eliminar?");
    if (result) {
        db.collection("cosecha").doc(id).delete().then(function () {
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

function editarCosecha(id,anio_h, mach_equip_h, fuel_lubri_h, transport_h) {

    document.getElementById('txt_anio_h').value = anio_h;
    document.getElementById('txt_mach_equip_h').value = mach_equip_h;
    document.getElementById('txt_fuel_lubri_h').value = fuel_lubri_h;
    document.getElementById('txt_transport_h').value = transport_h;

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
        var taxiRef = db.collection("cosecha").doc(id);

        var anio_h = document.getElementById('txt_anio_h').value;
        var mach_equip_h = document.getElementById('txt_mach_equip_h').value;
        var fuel_lubri_h = document.getElementById('txt_fuel_lubri_h').value;
        var transport_h = document.getElementById('txt_transport_h').value;


        return taxiRef.update({
            anio_h: anio_h,
            mach_equip_h: mach_equip_h,
            fuel_lubri_h: fuel_lubri_h,
            transport_h: transport_h

        })
            .then(function () {
                alert("se actualizo correctamente");
                console.log("Document successfully updated!");
                boton.innerHTML = "Guardar";
                
                document.getElementById('txt_anio_h').value = "";
                document.getElementById('txt_mach_equip_h').value = "";
                document.getElementById('txt_fuel_lubri_h').value = "";
                document.getElementById('txt_transport_h').value = "";
                location.reload();
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                alert("no se actualizo" + error);
                console.error("Error updating document: ", error);
            });
    }
}
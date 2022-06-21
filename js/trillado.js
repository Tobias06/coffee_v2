// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: 'AIzaSyBUp3_RYhiT0OCahwiYniqtloOCLqQ0JSY',
    authDomain: 'fb-api-grd.firebaseapp.com',
    projectId: 'fb-api-grd'
});

const db = firebase.firestore();


function guardart() {
    //trillado
    var anio_t = document.getElementById('txt_anio_t').value;
    var vMaqu_t = document.getElementById('txt_vMaqu_t').value;
    var vInfraest_t = document.getElementById('txt_vInfraest_t').value;
    var promMens_t = document.getElementById('txt_promMens_t').value;
    var juteBags_t = document.getElementById('txt_juteBags_t').value;

    db.collection("trillado").add({
        
        anio_t: anio_t,
        vMaqu_t: vMaqu_t,
        vInfraest_t: vInfraest_t,
        promMens_t: promMens_t,
        juteBags_t: juteBags_t
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", Error);
        });

    anio_t = document.getElementById('txt_anio_t').value = "";
    vMaqu_t = document.getElementById('txt_vMaqu_t').value = "";
    vInfraest_t = document.getElementById('txt_vInfraest_t').value = "";
    promMens_t = document.getElementById('txt_promMens_t').value = "";
    juteBags_t = document.getElementById('txt_juteBags_t').value = "";

}

//leer documento trillado
var tablaTrillado = document.getElementById("tablaTrillado");
db.collection("trillado").onSnapshot((querySnapshot) => {
    tablaTrillado.innerHTML = ""
    querySnapshot.forEach((doc) => {
        tablaTrillado.innerHTML += `<tr>
      <th scope='row' style="display:none;">${doc.id}</th>
      <td>${doc.data().anio_t}</td>
      <td>${doc.data().vMaqu_t}</td>
      <td>${doc.data().vInfraest_t}</td>
      <td>${doc.data().promMens_t}</td>
      <td>${doc.data().juteBags_t}</td>
    <td>
      <div class="table-data-feature">
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item" data-toggle="modal" data-target="#clearbutton2" type="button" title="Ver" onclick="viewTrillado('${doc.id}','${doc.data().anio_t}','${doc.data().vMaqu_t}','${doc.data().vInfraest_t}','${doc.data().promMens_t}','${doc.data().juteBags_t}')">
        <i class="material-icons">visibility</i>
        </button>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item" data-toggle="modal" data-target="#clearbutton2" type="button" title="Editar" onclick="editarTrillado('${doc.id}','${doc.data().anio_t}','${doc.data().vMaqu_t}','${doc.data().vInfraest_t}','${doc.data().promMens_t}0','${doc.data().juteBags_t}')">
        <i class="material-icons">edit</i>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" data-toggle="tooltip" data-placement="top" title="Delete" onclick="eliminarTrillado('${doc.id}')">
        <i class="material-icons">delete</i>
        </button>
      </div>
    </td>
      </tr>`
    });
});

//LEER Trillado
function viewTrillado(id,anio_t, vMaqu_t, vInfraest_t, promMens_t, juteBags_t) {

    document.getElementById('txt_anio_t').value = anio_t;
    document.getElementById('txt_vMaqu_t').value = vMaqu_t;
    document.getElementById('txt_vInfraest_t').value = vInfraest_t;
    document.getElementById('txt_promMens_t').value = promMens_t;
    document.getElementById('txt_juteBags_t').value = juteBags_t;

    document.getElementById('txt_anio_t').disabled = true;
    document.getElementById('txt_vMaqu_t').disabled = true;
    document.getElementById('txt_vInfraest_t').disabled = true;
    document.getElementById('txt_promMens_t').disabled = true;
    document.getElementById('txt_juteBags_t').disabled = true;

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

//borrar documento trillado
function eliminarTrillado(id) {
    var result = confirm("Eliminar?");
    if (result) {
        db.collection("trillado").doc(id).delete().then(function () {
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

//actualiza documnento trillado

function editarTrillado(id, anio_t, vMaqu_t, vInfraest_t, promMens_t, juteBags_t) {

    document.getElementById('txt_anio_t').value = anio_t;
    document.getElementById('txt_vMaqu_t').value = vMaqu_t;
    document.getElementById('txt_vInfraest_t').value = vInfraest_t;
    document.getElementById('txt_promMens_t').value = promMens_t;
    document.getElementById('txt_juteBags_t').value = juteBags_t;

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
        var taxiRef = db.collection("trillado").doc(id);

        var anio_t = document.getElementById('txt_anio_t').value;
        var vMaqu_t = document.getElementById('txt_vMaqu_t').value;
        var vInfraest_t = document.getElementById('txt_vInfraest_t').value;
        var promMens_t = document.getElementById('txt_promMens_t').value;
        var juteBags_t = document.getElementById('txt_juteBags_t').value;

        return taxiRef.update({
            anio_t: anio_t,
            vMaqu_t: vMaqu_t,
            vInfraest_t: vInfraest_t,
            promMens_t: promMens_t,
            juteBags_t: juteBags_t
        })
            .then(function () {
                alert("se actualizo correctamente");
                console.log("Document successfully updated!");
                boton.innerHTML = "Guardar";

                document.getElementById('txt_anio_t').value = "";
                document.getElementById('txt_vMaqu_t').value = "";
                document.getElementById('txt_vInfraest_t').value = "";
                document.getElementById('txt_promMens_t').value = "";
                document.getElementById('txt_juteBags_t').value = "";

                location.reload();
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                alert("no se actualizo" + error);
                console.error("Error updating document: ", error);
            });
    }


}
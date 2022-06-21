// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: 'AIzaSyBUp3_RYhiT0OCahwiYniqtloOCLqQ0JSY',
    authDomain: 'fb-api-grd.firebaseapp.com',
    projectId: 'fb-api-grd'
});

const db = firebase.firestore();


function guardars() {
    //secado
    var anio_s = document.getElementById('txt_anio_s').value;
    var prod_s = document.getElementById('txt_prod_s').value;
    var dSecado_s = document.getElementById('txt_dSecado_s').value;
    var k_s = document.getElementById('txt_k_s').value;
    var patio_s = document.getElementById('txt_patio_s').value;
    var Vmaqu_s = document.getElementById('txt_Vmaqu_s').value;
    var consCombust_s = document.getElementById('txt_consCombust_s').value;
    var Vinfraest_s = document.getElementById('txt_Vinfraest_s').value;
    var promMens_s = document.getElementById('txt_promMens_s').value;

    // Add a second document with a generated ID.
    db.collection("secado").add({

        anio_s: anio_s,
        prod_s: prod_s,
        dSecado_s: dSecado_s,
        k_s: k_s,
        patio_s: patio_s,
        Vmaqu_s: Vmaqu_s,
        consCombust_s: consCombust_s,
        Vinfraest_s: Vinfraest_s,
        promMens_s: promMens_s

    })
        .then(function (docRef) {
            MJSOK();
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            MJSERROR();
            console.error("Error adding document: ", Error);
        });

    anio_s = document.getElementById('txt_anio_s').value = "";
    prod_s = document.getElementById('txt_prod_s').value = "";
    dSecado_s = document.getElementById('txt_dSecado_s').value = "";
    k_s = document.getElementById('txt_k_s').value = "";
    patio_s = document.getElementById('txt_patio_s').value = "";
    Vmaqu_s = document.getElementById('txt_Vmaqu_s').value = "";
    consCombust_s = document.getElementById('txt_consCombust_s').value = "";
    Vinfraest_s = document.getElementById('txt_Vinfraest_s').value = "";
    promMens_s = document.getElementById('txt_promMens_s').value = "";

}

//leer documento Secado
var tablaSecado = document.getElementById("tablaSecado");
db.collection("secado").onSnapshot((querySnapshot) => {
    tablaSecado.innerHTML = ""
    querySnapshot.forEach((doc) => {
        tablaSecado.innerHTML += `<tr>
      <th scope='row' style="display:none;">${doc.id}</th>
      <td>${doc.data().anio_s}</td>
      <td>${doc.data().prod_s}</td>
      <td>${doc.data().dSecado_s}</td>
      <td>${doc.data().k_s}</td>
      <td>${doc.data().patio_s}</td>
      <td>${doc.data().Vmaqu_s}</td>
      <td>${doc.data().consCombust_s}</td>
      <td>${doc.data().Vinfraest_s}</td>
      <td>${doc.data().promMens_s}</td>
      <td>
      <div class="table-data-feature">
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item"  data-toggle="modal" data-target="#clearbutton2"  type="button" title="Ver" onclick="viewSecado
        ('${doc.id}','${doc.data().anio_s}','${doc.data().prod_s}','${doc.data().dSecado_s}','${doc.data().k_s}','${doc.data().patio_s}','${doc.data().Vmaqu_s}','${doc.data().consCombust_s}','${doc.data().Vinfraest_s}','${doc.data().promMens_s}')">
        <i class="material-icons">visibility</i>
        </button>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item"  data-toggle="modal" data-target="#clearbutton2"  type="button" title="Editar" onclick="editarSecado
        ('${doc.id}','${doc.data().anio_s}','${doc.data().prod_s}','${doc.data().dSecado_s}','${doc.data().k_s}','${doc.data().patio_s}','${doc.data().Vmaqu_s}','${doc.data().consCombust_s}','${doc.data().Vinfraest_s}','${doc.data().promMens_s}')">
        <i class="material-icons">edit</i>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" data-toggle="tooltip" data-placement="top" title="Delete" onclick="eliminarSecado('${doc.id}')">
        <i class="material-icons">delete</i>
        </button>
      </div>
    </td>
      </tr>`
    });
});

//LEER Secado
function viewSecado(id, anio_s, prod_s, dSecado_s, k_s, patio_s, Vmaqu_s, consCombust_s, Vinfraest_s, promMens_s) {
    
    document.getElementById('txt_anio_s').value = anio_s;
    document.getElementById('txt_prod_s').value = prod_s;
    document.getElementById('txt_dSecado_s').value = dSecado_s;
    document.getElementById('txt_k_s').value = k_s;
    document.getElementById('txt_patio_s').value = patio_s;
    document.getElementById('txt_Vmaqu_s').value = Vmaqu_s;
    document.getElementById('txt_consCombust_s').value = consCombust_s;
    document.getElementById('txt_Vinfraest_s').value = Vinfraest_s;
    document.getElementById('txt_promMens_s').value = promMens_s;

    document.getElementById('txt_anio_s').disabled = true;
    document.getElementById('txt_prod_s').disabled = true;
    document.getElementById('txt_dSecado_s').disabled = true;
    document.getElementById('txt_k_s').disabled = true;
    document.getElementById('txt_patio_s').disabled = true;
    document.getElementById('txt_Vmaqu_s').disabled = true;
    document.getElementById('txt_consCombust_s').disabled = true;
    document.getElementById('txt_Vinfraest_s').disabled = true;
    document.getElementById('txt_promMens_s').disabled = true;

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

//borrar documento secado
function eliminarSecado(id) {
    var result = confirm("Eliminar?");
    if (result) {
        db.collection("secado").doc(id).delete().then(function () {
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

//actualiza documnento secado

function editarSecado(id, anio_s, prod_s, dSecado_s, k_s, patio_s, Vmaqu_s, consCombust_s, Vinfraest_s, promMens_s) {

    document.getElementById('txt_anio_s').value = anio_s;
    document.getElementById('txt_prod_s').value = prod_s;
    document.getElementById('txt_dSecado_s').value = dSecado_s;
    document.getElementById('txt_k_s').value = k_s;
    document.getElementById('txt_patio_s').value = patio_s;
    document.getElementById('txt_Vmaqu_s').value = Vmaqu_s;
    document.getElementById('txt_consCombust_s').value = consCombust_s;
    document.getElementById('txt_Vinfraest_s').value = Vinfraest_s;
    document.getElementById('txt_promMens_s').value = promMens_s;

    var boton = document.getElementById("boton");
    //boton.innerHTML = "Editar";

    var botonOut = document.getElementById("btnCloseIt");
    botonOut.onclick = function () {
        location.reload();
    }
    var btnClose = document.getElementById("close");
    btnClose.onclick = function () {
        location.reload();
    }

    boton.onclick = function () {
        var taxiRef = db.collection("secado").doc(id);

        var anio_s = document.getElementById('txt_anio_s').value;
        var prod_s = document.getElementById('txt_prod_s').value;
        var dSecado_s = document.getElementById('txt_dSecado_s').value;
        var k_s = document.getElementById('txt_k_s').value;
        var patio_s = document.getElementById('txt_patio_s').value;
        var Vmaqu_s = document.getElementById('txt_Vmaqu_s').value;
        var consCombust_s = document.getElementById('txt_consCombust_s').value;
        var Vinfraest_s = document.getElementById('txt_Vinfraest_s').value;
        var promMens_s = document.getElementById('txt_promMens_s').value;


        return taxiRef.update({
            anio_s: anio_s,
            prod_s: prod_s,
            dSecado_s: dSecado_s,
            k_s: k_s,
            patio_s: patio_s,
            Vmaqu_s: Vmaqu_s,
            consCombust_s: consCombust_s,
            Vinfraest_s: Vinfraest_s,
            promMens_s: promMens_s
        })
            .then(function () {
                alert("se actualizo correctamente");
                console.log("Document successfully updated!");
                boton.innerHTML = "Guardar";

                document.getElementById('txt_anio_s').value = "";
                document.getElementById('txt_prod_s').value = "";
                document.getElementById('txt_dSecado_s').value = "";
                document.getElementById('txt_k_s').value = "";
                document.getElementById('txt_patio_s').value = "";
                document.getElementById('txt_Vmaqu_s').value = "";
                document.getElementById('txt_consCombust_s').value = "";
                document.getElementById('txt_Vinfraest_s').value = "";
                document.getElementById('txt_promMens_s').value = "";

                location.reload();
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                alert("no se actualizo" + error);
                console.error("Error updating document: ", error);
            });
    }


}
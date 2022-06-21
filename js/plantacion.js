// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: 'AIzaSyBUp3_RYhiT0OCahwiYniqtloOCLqQ0JSY',
    authDomain: 'fb-api-grd.firebaseapp.com',
    projectId: 'fb-api-grd'
});
const db = firebase.firestore();

/* 
//obtener fincas
var fincaGetElement = document.getElementById('finca_f'); //Se llama el selected
fincaGetElement.innerHTML = ``;
fincaGetElement.innerHTML += `` //Agrego un option por default
db.collection("finca").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        fincaGetElement.innerHTML += `<li class="mdc-list mdc-list-item mdc-list-item--selected" data-value="${doc.id}" value="${doc.id}" onChange="cambio()">${doc.data().nFinca_f}</li>` //Aquí agrego los options de acuerdo a la base de datos.
        /* console.log(doc.id, " => ", doc.data().nFinca_f); */
/*     });
}).catch(function (error) {
    console.log("Error getting documents: ", error);
});
fincaGetElement.innerHTML += ``;
let lis_f = fincaGetElement.innerHTML; */

/* let lis_f = document.getElementById('li').getElementsByTagName('nFinca_f'); */
//console.log(lis_f);
/* console.log(nFinca_f); */


function guardarp() {
    //plantacion
    /* var finca3 = document.getElementsByTagName("nFinca_f"); */

    var anio_p = document.getElementById('txt_anio_p').value;
    var albedo_p = document.getElementById('txt_alb_p').value;
    var insolacion_p = document.getElementById('txt_pri_p').value;
    var capaAtm_p = document.getElementById('txt_capaAtm_p').value;
    var denAire_p = document.getElementById('txt_denAire_p').value;
    var velocidadVient_p = document.getElementById('txt_velocidadVient_p').value;
    var cultDuracion_p = document.getElementById('txt_cultDuracion_p').value;
    var evap_p = document.getElementById('txt_evap_p').value;
    var coeficiente_p = document.getElementById('txt_coeficiente_p').value;
    var enegiaLib_p = document.getElementById('txt_enegiaLib_p').value;
    var lluvia_p = document.getElementById('text_lluvia_p').value;
    var lluviaCircular_p = document.getElementById('text_lluviaCircular_p').value;
    var elva_p = document.getElementById('text_elva_p').value;
    var densidadKgm_p = document.getElementById('text_densidadKgm_p').value;
    var transpir_p = document.getElementById('txt_transpir_p').value;
    var perdSuelo_p = document.getElementById('txt_perdSuelo_p').value;
    var ContMat_p = document.getElementById('txt_contmat_p').value;
    var nitro_p = document.getElementById('txt_nitro_p').value;
    var fosf_p = document.getElementById('txt_fosf_p').value;
    var pota_p = document.getElementById('txt_pota_p').value;
    var urea_p = document.getElementById('txt_urea_p').value;
    var cal_p = document.getElementById('txt_cal_p').value;
    var fert_p = document.getElementById('txt_fert_p').value;
    var semi_p = document.getElementById('txt_semi_p').value;
    var maEqu_p = document.getElementById('txt_maeq_p').value;
    var pesFung_p = document.getElementById('txt_pefu_p').value;
    // Add a second document with a generated ID.

    const data = {

        anio_p: anio_p,
        albedo_p: albedo_p,
        insolacion_p: insolacion_p,
        capaAtm_p: capaAtm_p,
        denAire_p: denAire_p,
        velocidadVient_p: velocidadVient_p,
        cultDuracion_p: cultDuracion_p,
        evap_p: evap_p,
        coeficiente_p: coeficiente_p,
        enegiaLib_p: enegiaLib_p,
        lluvia_p: lluvia_p,
        lluviaCircular_p: lluviaCircular_p,
        elva_p: elva_p,
        densidadKgm_p: densidadKgm_p,
        transpir_p: transpir_p,
        perdSuelo_p: perdSuelo_p,
        ContMat_p: ContMat_p,
        nitro_p: nitro_p,
        fosf_p: fosf_p,
        pota_p: pota_p,
        urea_p: urea_p,
        cal_p: cal_p,
        fert_p: fert_p,
        semi_p: semi_p,
        maEqu_p: maEqu_p,
        pesFung_p: pesFung_p

    };


    db.collection("plantacion")
        .add(data)
        .then(() => alert("menu item is posted"))
        .catch((error) => alert("error: " + error));

    document.getElementById('txt_anio_p').value = "";
    document.getElementById('txt_alb_p').value = "";
    document.getElementById('txt_pri_p').value = "";
    document.getElementById('txt_capaAtm_p').value = "";
    document.getElementById('txt_denAire_p').value = "";
    document.getElementById('txt_velocidadVient_p').value = "";
    document.getElementById('txt_cultDuracion_p').value = "";
    document.getElementById('txt_evap_p').value = "";
    document.getElementById('txt_coeficiente_p').value = "";
    document.getElementById('txt_enegiaLib_p').value = "";
    document.getElementById('text_lluvia_p').value = "";
    document.getElementById('text_lluviaCircular_p').value = "";
    document.getElementById('text_elva_p').value = "";
    document.getElementById('text_densidadKgm_p').value = "";
    document.getElementById('txt_transpir_p').value = "";
    document.getElementById('txt_perdSuelo_p').value = "";
    document.getElementById('txt_contmat_p').value = "";
    document.getElementById('txt_nitro_p').value = "";
    document.getElementById('txt_fosf_p').value = "";
    document.getElementById('txt_pota_p').value = "";
    document.getElementById('txt_urea_p').value = "";
    document.getElementById('txt_cal_p').value = "";
    document.getElementById('txt_fert_p').value = "";
    document.getElementById('txt_semi_p').value = "";
    document.getElementById('txt_maeq_p').value = "";
    document.getElementById('txt_pefu_p').value = "";
}

//leer documento Plantacion
var tablaPlantacion = document.getElementById("tablaPlantacion");
db.collection("plantacion").onSnapshot((querySnapshot) => {
    tablaPlantacion.innerHTML = ""
    querySnapshot.forEach((doc) => {
        tablaPlantacion.innerHTML += `<tr>
      <th scope="row" style="display:none;">${doc.id}</th>
      <td>${doc.data().anio_p}<td>
      <td>${doc.data().albedo_p}<td>
      <td>${doc.data().insolacion_p}<td>
      <td>${doc.data().capaAtm_p}<td>
      <td>${doc.data().denAire_p}<td>
      <td>${doc.data().velocidadVient_p}<td>
      <td>${doc.data().cultDuracion_p}<td>
      <td>${doc.data().evap_p}<td>
      <td>${doc.data().coeficiente_p}<td>
      <td>${doc.data().enegiaLib_p}<td>
      <td>${doc.data().lluvia_p}<td>
      <td>${doc.data().lluviaCircular_p}<td>
      <td>${doc.data().elva_p}<td>
      <td>${doc.data().densidadKgm_p}<td>
      <td>${doc.data().transpir_p}<td>
      <td>${doc.data().perdSuelo_p}<td>
      <td>${doc.data().ContMat_p}<td>
      <td>${doc.data().nitro_p}</td>
      <td>${doc.data().fosf_p}</td>
      <td>${doc.data().pota_p}</td>
      <td>${doc.data().urea_p}</td>
      <td>${doc.data().cal_p}</td>
      <td>${doc.data().fert_p}</td>
      <td>${doc.data().semi_p}</td>
      <td>${doc.data().maEqu_p}</td>
      <td>${doc.data().pesFung_p}</td>
    <td>
      <div class="table-data-feature">
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item" data-toggle="modal" data-target="#clearbutton2" type="button" title="Ver" onclick="viewPlantacion
        ('${doc.id}','${doc.data().anio_p}','${doc.data().albedo_p}','${doc.data().insolacion_p}','${doc.data().capaAtm_p}','${doc.data().denAire_p}','${doc.data().velocidadVient_p}',
        '${doc.data().cultDuracion_p}','${doc.data().evap_p}','${doc.data().coeficiente_p}','${doc.data().enegiaLib_p}','${doc.data().lluvia_p}','${doc.data().lluviaCircular_p}',
        '${doc.data().elva_p}','${doc.data().densidadKgm_p}','${doc.data().transpir_p}','${doc.data().perdSuelo_p}','${doc.data().ContMat_p}','${doc.data().nitro_p}','${doc.data().fosf_p}',
        '${doc.data().pota_p}','${doc.data().urea_p}','${doc.data().cal_p}','${doc.data().fert_p}','${doc.data().semi_p}','${doc.data().maEqu_p}','${doc.data().pesFung_p}')">
        <i class="material-icons">visibility</i>
        </button>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" type="item" data-toggle="modal" data-target="#clearbutton2" type="button" title="Editar" onclick="editarPlantacion
        ('${doc.id}','${doc.data().anio_p}','${doc.data().albedo_p}','${doc.data().insolacion_p}','${doc.data().capaAtm_p}','${doc.data().denAire_p}','${doc.data().velocidadVient_p}','${doc.data().cultDuracion_p}',
        '${doc.data().evap_p}','${doc.data().coeficiente_p}','${doc.data().enegiaLib_p}','${doc.data().lluvia_p}','${doc.data().lluviaCircular_p}','${doc.data().elva_p}','${doc.data().densidadKgm_p}','${doc.data().transpir_p}',
        '${doc.data().perdSuelo_p}','${doc.data().ContMat_p}','${doc.data().nitro_p}','${doc.data().fosf_p}','${doc.data().pota_p}','${doc.data().urea_p}','${doc.data().cal_p}','${doc.data().fert_p}','${doc.data().semi_p}','${doc.data().maEqu_p}','${doc.data().pesFung_p}')">
        <i class="material-icons">edit</i>
        </button>
        <button class="mdc-button mdc-button--raised icon-button filled-button--light" data-toggle="tooltip" data-placement="top" title="Delete" onclick="eliminarPlantacion('${doc.id}')">
        <i class="material-icons">delete</i>
        </button>
      </div>
    </td>
      </tr>`
    });
});

//LEER plantacion


function viewPlantacion(id, anio_p, albedo_p, insolacion_p, capaAtm_p, denAire_p, velocidadVient_p, cultDuracion_p, evap_p, coeficiente_p, enegiaLib_p, lluvia_p, lluviaCircular_p, elva_p, densidadKgm_p, transpir_p, perdSuelo_p, ContMat_p, nitro_p, fosf_p, pota_p, urea_p, cal_p, fert_p, semi_p, maEqu_p, pesFung_p) {

    document.getElementById('txt_anio_p').value = anio_p;
    document.getElementById('txt_alb_p').value = albedo_p;
    document.getElementById('txt_pri_p').value = insolacion_p;
    document.getElementById('txt_capaAtm_p').value = capaAtm_p;
    document.getElementById('txt_denAire_p').value = denAire_p;
    document.getElementById('txt_velocidadVient_p').value = velocidadVient_p;
    document.getElementById('txt_cultDuracion_p').value = cultDuracion_p;
    document.getElementById('txt_evap_p').value = evap_p;
    document.getElementById('txt_coeficiente_p').value = coeficiente_p;
    document.getElementById('txt_enegiaLib_p').value = enegiaLib_p;
    document.getElementById('text_lluvia_p').value = lluvia_p;
    document.getElementById('text_lluviaCircular_p').value = lluviaCircular_p;
    document.getElementById('text_elva_p').value = elva_p;
    document.getElementById('text_densidadKgm_p').value = densidadKgm_p;
    document.getElementById('txt_tran_p').value = transpir_p;
    document.getElementById('txt_perdSuelo_p').value = perdSuelo_p;
    document.getElementById('txt_contmat_p').value = ContMat_p;
    document.getElementById('txt_nitro_p').value = nitro_p;
    document.getElementById('txt_fosf_p').value = fosf_p;
    document.getElementById('txt_pota_p').value = pota_p;
    document.getElementById('txt_urea_p').value = urea_p;
    document.getElementById('txt_cal_p').value = cal_p;
    document.getElementById('txt_fert_p').value = fert_p;
    document.getElementById('txt_semi_p').value = semi_p;
    document.getElementById('txt_maeq_p').value = maEqu_p;
    document.getElementById('txt_pefu_p').value = pesFung_p;

    document.getElementById('txt_anio_p').disabled = true;
    document.getElementById('txt_alb_p').disabled = true;
    document.getElementById('txt_pri_p').disabled = true;
    document.getElementById('txt_capaAtm_p').disabled = true;
    document.getElementById('txt_denAire_p').disabled = true;
    document.getElementById('txt_velocidadVient_p').disabled = true;
    document.getElementById('txt_cultDuracion_p').disabled = true;
    document.getElementById('txt_evap_p').disabled = true;
    document.getElementById('txt_coeficiente_p').disabled = true;
    document.getElementById('txt_enegiaLib_p').disabled = true;
    document.getElementById('text_lluvia_p').disabled = true;
    document.getElementById('text_lluviaCircular_p').disabled = true;
    document.getElementById('text_elva_p').disabled = true;
    document.getElementById('text_densidadKgm_p').disabled = true;
    document.getElementById('txt_tran_p').disabled = true;
    document.getElementById('txt_perdSuelo_p').disabled = true;
    document.getElementById('txt_contmat_p').disabled = true;
    document.getElementById('txt_nitro_p').disabled = true;
    document.getElementById('txt_fosf_p').disabled = true;
    document.getElementById('txt_pota_p').disabled = true;
    document.getElementById('txt_urea_p').disabled = true;
    document.getElementById('txt_cal_p').disabled = true;
    document.getElementById('txt_fert_p').disabled = true;
    document.getElementById('txt_semi_p').disabled = true;
    document.getElementById('txt_maeq_p').disabled = true;
    document.getElementById('txt_pefu_p').disabled = true;

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

//borrar documento plantacion
function eliminarPlantacion(id) {
    var result = confirm("Eliminar?");
    if (result) {
        db.collection("plantacion").doc(id).delete().then(function () {
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

function editarPlantacion(id, anio_p, albedo_p, insolacion_p, capaAtm_p, denAire_p, velocidadVient_p, cultDuracion_p, evap_p, coeficiente_p, enegiaLib_p, lluvia_p, lluviaCircular_p, elva_p, densidadKgm_p, transpir_p, perdSuelo_p, ContMat_p, nitro_p, fosf_p, pota_p, urea_p, cal_p, fert_p, semi_p, maEqu_p, pesFung_p) {

    document.getElementById('txt_anio_p').value = anio_p;
    document.getElementById('txt_alb_p').value = albedo_p;
    document.getElementById('txt_pri_p').value = insolacion_p;
    document.getElementById('txt_capaAtm_p').value = capaAtm_p;
    document.getElementById('txt_denAire_p').value = denAire_p;
    document.getElementById('txt_velocidadVient_p').value = velocidadVient_p;
    document.getElementById('txt_cultDuracion_p').value = cultDuracion_p;
    document.getElementById('txt_evap_p').value = evap_p;
    document.getElementById('txt_coeficiente_p').value = coeficiente_p;
    document.getElementById('txt_enegiaLib_p').value = enegiaLib_p;
    document.getElementById('text_lluvia_p').value = lluvia_p;
    document.getElementById('text_lluviaCircular_p').value = lluviaCircular_p;
    document.getElementById('text_elva_p').value = elva_p;
    document.getElementById('text_densidadKgm_p').value = densidadKgm_p;
    document.getElementById('txt_tran_p').value = transpir_p;
    document.getElementById('txt_perdSuelo_p').value = perdSuelo_p;
    document.getElementById('txt_contmat_p').value = ContMat_p;
    document.getElementById('txt_nitro_p').value = nitro_p;
    document.getElementById('txt_fosf_p').value = fosf_p;
    document.getElementById('txt_pota_p').value = pota_p;
    document.getElementById('txt_urea_p').value = urea_p;
    document.getElementById('txt_cal_p').value = cal_p;
    document.getElementById('txt_fert_p').value = fert_p;
    document.getElementById('txt_semi_p').value = semi_p;
    document.getElementById('txt_maeq_p').value = maEqu_p;
    document.getElementById('txt_pefu_p').value = pesFung_p;

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
        var taxiRef = db.collection("plantacion").doc(id);

        var anio_p = document.getElementById('txt_anio_p').value;
        var albedo_p = document.getElementById('txt_alb_p').value;
        var insolacion_p = document.getElementById('txt_pri_p').value;
        var capaAtm_p = document.getElementById('txt_capaAtm_p').value;
        var denAire_p = document.getElementById('txt_denAire_p').value;
        var velocidadVient_p = document.getElementById('txt_velocidadVient_p').value;
        var cultDuracion_p = document.getElementById('txt_cultDuracion_p').value;
        var evap_p = document.getElementById('txt_evap_p').value;
        var coeficiente_p = document.getElementById('txt_coeficiente_p').value;
        var enegiaLib_p = document.getElementById('txt_enegiaLib_p').value;
        var lluvia_p = document.getElementById('text_lluvia_p').value;
        var lluviaCircular_p = document.getElementById('text_lluviaCircular_p').value;
        var elva_p = document.getElementById('text_elva_p').value;
        var densidadKgm_p = document.getElementById('text_densidadKgm_p').value;
        var transpir_p = document.getElementById('txt_tran_p').value;
        var perdSuelo_p = document.getElementById('txt_perdSuelo_p').value;
        var ContMat_p = document.getElementById('txt_contmat_p').value;
        var nitro_p = document.getElementById('txt_nitro_p').value;
        var fosf_p = document.getElementById('txt_fosf_p').value;
        var pota_p = document.getElementById('txt_pota_p').value;
        var urea_p = document.getElementById('txt_urea_p').value;
        var cal_p = document.getElementById('txt_cal_p').value;
        var fert_p = document.getElementById('txt_fert_p').value;
        var semi_p = document.getElementById('txt_semi_p').value;
        var maEqu_p = document.getElementById('txt_maeq_p').value;
        var pesFung_p = document.getElementById('txt_pefu_p').value;

        return taxiRef.update({
            anio_p: anio_p,
            albedo_p: albedo_p,
            insolacion_p: insolacion_p,
            capaAtm_p: capaAtm_p,
            denAire_p: denAire_p,
            velocidadVient_p: velocidadVient_p,
            cultDuracion_p: cultDuracion_p,
            evap_p: evap_p,
            coeficiente_p: coeficiente_p,
            enegiaLib_p: enegiaLib_p,
            lluvia_p: lluvia_p,
            lluviaCircular_p: lluviaCircular_p,
            elva_p: elva_p,
            densidadKgm_p: densidadKgm_p,
            transpir_p: transpir_p,
            perdSuelo_p: perdSuelo_p,
            ContMat_p: ContMat_p,
            nitro_p: nitro_p,
            fosf_p: fosf_p,
            pota_p: pota_p,
            urea_p: urea_p,
            cal_p: cal_p,
            fert_p: fert_p,
            semi_p: semi_p,
            maEqu_p: maEqu_p,
            pesFung_p: pesFung_p
        })
            .then(function () {
                alert("se actualizo correctamente");
                console.log("Document successfully updated!");
                boton.innerHTML = "Guardar";

                document.getElementById('txt_anio_p').value = "";
                document.getElementById('txt_alb_p').value = "";
                document.getElementById('txt_pri_p').value = "";
                document.getElementById('txt_capaAtm_p').value = "";
                document.getElementById('txt_denAire_p').value = "";
                document.getElementById('txt_velocidadVient_p').value = "";
                document.getElementById('txt_cultDuracion_p').value = "";
                document.getElementById('txt_evap_p').value = "";
                document.getElementById('txt_coeficiente_p').value = "";
                document.getElementById('txt_enegiaLib_p').value = "";
                document.getElementById('text_lluvia_p').value = "";
                document.getElementById('text_lluviaCircular_p').value = "";
                document.getElementById('text_elva_p').value = "";
                document.getElementById('text_densidadKgm_p').value = "";
                document.getElementById('txt_transpir_p').value = "";
                document.getElementById('txt_perdSuelo_p').value = "";
                document.getElementById('txt_contmat_p').value = "";
                document.getElementById('txt_nitro_p').value = "";
                document.getElementById('txt_fosf_p').value = "";
                document.getElementById('txt_pota_p').value = "";
                document.getElementById('txt_urea_p').value = "";
                document.getElementById('txt_cal_p').value = "";
                document.getElementById('txt_fert_p').value = "";
                document.getElementById('txt_semi_p').value = "";
                document.getElementById('txt_maeq_p').value = "";
                document.getElementById('txt_pefu_p').value = "";

                location.reload();
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                alert("no se actualizo" + error);
                console.error("Error updating document: ", error);
            });
    }


}


// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: 'AIzaSyBUp3_RYhiT0OCahwiYniqtloOCLqQ0JSY',
    authDomain: 'fb-api-grd.firebaseapp.com',
    projectId: 'fb-api-grd'
});
const db = firebase.firestore();

//consolidado total
var consol_total;

//totales consolidados
var emergia_p_f1;
var emergia_p_f2;
var emergia_p_f3;
var emergia_p_f4;
var emergia_p_f5;
var emergia_p_f6;
var emergia_p_f7;
var emergia_p_f8;
var emergia_p_f9;
var emergia_p_f10;
var emergia_p_f11;
var emergia_p_f12;
var emergia_p_f13;
var emergia_p_f14;
var emergia_p_f15;
var emergia_p_f16;
//consolidado
var emergia_p_f17;
var emergia_p_f18;
var emergia_p_f19;
var emergia_p_f20;
//consolidado
var emergia_s1;
var emergia_s2;
var emergia_s3;
var emergia_s4;
var emergia_s5;
var emergia_s6;
var emergia_s7;
var emergia_s8;
var emergia_s9;
var emergia_s30;
//consolidado
var emergia_t1;
var emergia_t2;
var emergia_t3;
var emergia_t4;
var emergia_t5;
//
const v_dolar2010 = 337.18;
const v_dolar2014 = 2000;
const v_dolar2020 = 3693;
const v_dolar2009 = 580.59;
//tranformidad produccion
const transformidad = 1;
const transformidad_f2 = 2520;
const transformidad_f3 = 30600;
const transformidad_f4 = 17600;
const transformidad_f5 = 39800;
const transformidad_f6 = 74000;
const transformidad_f7 = 6620000000;
const transformidad_f8 = 9350000000;
const transformidad_f9 = 932000000;
const transformidad_f10 = 6620000000;
const transformidad_f11 = 1680000000;
const transformidad_f12 = 3870000000;
const transformidad_f13 = 58500;
const transformidad_f14 = 6700000000;
const transformidad_f15 = 22500000000000;
const transformidad_f16 = 14800000000;
//cosecha
const transformidad_f17 = 6700000000;
const transformidad_f18 = 111111;
const transformidad_f19 = 22500000000000;
const transformidad_c20 = 22500000000000;
//SECADO
const transformidad_s3 = 145000;
const transformidad_s4 = 86000;
const transformidad_s5 = 2420000000;
const transformidad_s6 = 26500000000000;
const transformidad_s7 = 22500000000000;
const transformidad_s8 = 111111;
const transformidad_s9 = 26500000000000;
const transformidad_s30 = 26500000000000;
//TRILLADO
const transformidad_t1 = 26500000000000;
const transformidad_t2 = 22500000000000;
const transformidad_t5 = 23100000000;

//FINCA
var area_finca = 0;
var factor_f = 0;

//PLANTACION
var p_finca;
var p_albedo;
var p_insolation;
var p_admosfra;
var p_densidadA;
var p_viento;
var p_duracion_cult;
var p_evapo;
var p_coeficiente;
var p_enegia_lib;
var p_lluvia;
var p_lluviaCircular;
var p_elevacion;
var p_densidad2;

const p_gravedad = 9.8;

var p_transpiracion;
var p_perdidaSuelo;
var p_contenido_materia;
var p_fertilizante_nitr;
var p_fertilizante_fosf;
var p_fertilizante_pot;
var p_urea;
var p_cal;
var p_materia_org;
var p_semillas;
var p_maqui_mante;
var p_pesticides_fun;

//COSECHA
var c_maquina_eqip;
var c_fuel_lubricants;
var c_transportation;

//SECADO
var s_anio;
var s_prodCereza;
var s_dSecado;
var s_k;
var s_patio;
var s_Vmaqu;
var s_consCombust;
var s_Vinfraest;
var s_promMens;

//TRILLADO
var t_vMaqu;
var t_vInfraest;
var t_promMens;
var t_juteBags;

//LABOR
var l_ano;
var l_TSiem_Mante;
var l_TCosecha;
var l_PJornales;
var l_Pjornales_rec;
var l_Pdolar;
var l_siembra_mante;
var l_Pjornal_recole;

db.collection("labor").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        l_ano = doc.data().j_ano;
        l_TSiem_Mante = doc.data().j_TSiem_Mante;
        l_TCosecha = doc.data().j_TCosecha;
        l_PJornales = doc.data().j_PJornales;
        l_Pjornales_rec = doc.data().j_Pjornales_rec;
        l_Pdolar = doc.data().j_Pdolar;
        l_siembra_mante = doc.data().j_siembra_mante;
        l_Pjornal_recole = doc.data().j_Pjornal_recole;

    });

});

db.collection("finca").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        doc.data().nFinca_f;
        doc.data().ano_f;
        doc.data().pesos_f;
        area_finca = doc.data().aProductiva_f;
        doc.data().aTotal_f;
        factor_f = doc.data().factor_f;
        doc.data().tCultivo_f;
    });

    //area_finca == aProductiva_f;
});


//leer documento Plantacion
db.collection("plantacion").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //p_finca = doc.data().finca;
        p_anio = doc.data().anio_p;
        p_albedo = doc.data().albedo_p;
        p_insolation = doc.data().insolacion_p;
        p_admosfra = doc.data().capaAtm_p;
        p_densidadA = doc.data().denAire_p;
        p_viento = doc.data().velocidadVient_p;
        p_duracion_cult = doc.data().cultDuracion_p;
        p_evapo = doc.data().evap_p;
        p_coeficiente = doc.data().coeficiente_p;
        p_enegia_lib = doc.data().enegiaLib_p;
        p_lluvia = doc.data().lluvia_p;
        p_lluviaCircular = doc.data().lluviaCircular_p;
        p_elevacion = doc.data().elva_p;
        p_densidad2 = doc.data().densidadKgm_p;
        p_transpiracion = doc.data().transpir_p;
        p_perdidaSuelo = doc.data().perdSuelo_p;
        p_contenido_materia = doc.data().ContMat_p;
        p_fertilizante_nitr = doc.data().nitro_p;
        p_fertilizante_fosf = doc.data().fosf_p;
        p_fertilizante_pot = doc.data().pota_p;
        p_urea = doc.data().urea_p;
        p_cal = doc.data().cal_p;
        p_materia_org = doc.data().fert_p;
        p_semillas = doc.data().semi_p;
        p_maqui_mante = doc.data().maEqu_p;
        p_pesticides_fun = doc.data().pesFung_p;

    });
    //PLANTACION FILA 1
    //esta formula es solar insolation de plantacion fila 1
    const ins_m2 = 3600000; //const insolation en 1 año
    //const anio = 365;

    //año analizado
    var insilacion_p_uno = p_insolation * ins_m2;
    var insolation_p_anio = insilacion_p_uno * p_duracion_cult;
    var anio_f1_p = insolation_p_anio * (1 - p_albedo) * area_finca;
    //2 años iniciales
    var dos_anios_p_f1 = (anio_f1_p / 30) * 2;

    //total f1
    var total_f1 = dos_anios_p_f1 + anio_f1_p;
    emergia_p_f1 = total_f1 * transformidad

    //PLANTACION FILA 2
    var anio_f2_p = p_admosfra * area_finca * p_densidadA * p_viento * (p_duracion_cult / 365);
    //2 años iniciales
    var dos_anios_p_f2 = (anio_f2_p / 30) * 2;

    //total f2
    var total_f2 = anio_f2_p + dos_anios_p_f2;
    emergia_p_f2 = total_f2 * transformidad_f2;

    //PLANTACION F3
    //año analizado f3
    var evap_p = 3.3;
    var evap_p_f3 = (evap_p * p_duracion_cult) / 1000;
    var cropEt_p_f3 = evap_p_f3 * p_coeficiente;
    //año iniciales
    var anio_f3_p = area_finca * cropEt_p_f3 * p_enegia_lib * 1000;
    //2años analizados f3
    var dos_anios_p_f3 = (anio_f3_p / 30) * 2;
    //total_f3
    var total_f3 = anio_f3_p + dos_anios_p_f3;
    emergia_p_f3 = total_f3 * transformidad_f3;

    //PLANTACION F4
    //año analizado f4
    const gravedad_f4 = 9.8;

    //año anaalizado
    var anio_f4_p = area_finca * p_lluvia * p_lluviaCircular * p_elevacion * p_densidad2 * gravedad_f4;
    var dos_anios_p_f4 = (anio_f4_p / 30) * 2;
    var total_f4 = anio_f4_p + dos_anios_p_f4;
    emergia_p_f4 = total_f4 * transformidad_f4;

    //PLANTACION F5
    //año analizado f5
    var anio_f5_p = area_finca * p_transpiracion * p_densidad2 * p_enegia_lib;
    var dos_anios_p_f5 = (anio_f5_p / 30) * 2;
    var total_f5 = anio_f5_p + dos_anios_p_f5;
    emergia_p_f5 = total_f5 * transformidad_f5;

    //PLANTACION F6
    const kcal = 5400;
    const jkcal = 4186;
    //año analizado f6
    const anio_f6_p = area_finca * p_perdidaSuelo * p_contenido_materia * kcal * jkcal;
    //dos años analizados
    var dos_anios_p_f6 = (anio_f6_p / 30) * 2;
    var total_f6 = anio_f6_p + dos_anios_p_f6;
    emergia_p_f6 = total_f6 * transformidad_f6;

    //PLANTACION F7
    var dos_anios_p_f7 = (p_fertilizante_nitr / 30) * 2;
    var total_f7 = dos_anios_p_f7 + p_fertilizante_nitr;
    emergia_p_f7 = total_f7 * transformidad_f7;

    //PLANTACION F8
    var dos_anios_p_f8 = (p_fertilizante_fosf / 30) * 2;
    var total_f8 = p_fertilizante_fosf + dos_anios_p_f8;
    emergia_p_f8 = total_f8 * transformidad_f8;

    //PLANTACION F9
    var dos_anios_p_f9 = (p_fertilizante_pot / 30) * 2;
    var total_f9 = dos_anios_p_f9 + p_fertilizante_pot;
    emergia_p_f9 = total_f9 * transformidad_f9;
    //PLANTACION F10
    var dos_anios_p_f10 = (p_urea / 30) * 2;
    var total_f10 = p_urea + dos_anios_p_f10;
    emergia_p_f10 = total_f10 * transformidad_f10;

    //PLANTACION F11
    var dos_anios_p_f11 = (p_cal / 30) * 2;
    var total_f11 = p_cal + dos_anios_p_f11;
    emergia_p_f11 = total_f11 * transformidad_f11;

    //PLANTACION F12
    var dos_anios_p_f12 = (p_materia_org) / 30;
    var total_f12 = 0 + dos_anios_p_f12;
    emergia_p_f12 = total_f12 * transformidad_f12;

    //PLANTACION F13
    var const2 = p_semillas * 3000 * 4186;
    var dos_anios_p_f13 = (const2 / 30);
    var total_f13 = 0 + dos_anios_p_f13;
    emergia_p_f13 = total_f13 * transformidad_f13;

    //PLANTACION F14
    var dos_anios_p_f14 = (p_maqui_mante / 30) * 2;
    var total_f14 = p_maqui_mante + dos_anios_p_f14;
    emergia_p_f14 = total_f14 * transformidad_f14;

    //PLANTACION F15
    var dos_anios_p_f15 = (v_dolar2009 + v_dolar2010) / 30;
    var total_f15 = dos_anios_p_f15 + l_siembra_mante;
    emergia_p_f15 = total_f15 * transformidad_f15;

    //PLANTACION F16 l_siembra_mante 
    var dos_anios_p_f16 = (p_pesticides_fun / 30) * 2;
    var total_f16 = p_pesticides_fun + dos_anios_p_f16;
    emergia_p_f16 = total_f16 * transformidad_f16;

    //TOTAL PLANTACION
    var total_P = emergia_p_f1 + emergia_p_f2 + emergia_p_f3 + emergia_p_f4 + emergia_p_f5 + emergia_p_f6 + emergia_p_f7 + emergia_p_f8 + emergia_p_f9 + emergia_p_f10 + emergia_p_f11 + emergia_p_f12 + emergia_p_f13 + emergia_p_f14 + emergia_p_f15 + emergia_p_f16;

    var tblPlantacion = document.getElementById("plantacion");
    tblPlantacion.innerHTML += `<tr colspan="9">
            <th>1</th>
            <th>Solar insolation (J)</th>
            <td>R</td>
            <td>${dos_anios_p_f1.toExponential(2)}</td>
            <td>${anio_f1_p.toExponential(2)}</td>
            <td>${total_f1.toExponential(2)}</td>
            <td>${transformidad.toExponential(2)}</td>
            <td>${emergia_p_f1.toExponential(2)}</td>
        <tr>
            <th>2</th>
            <th>Wind, kinetic energy (J)</th>
            <td>R</td>
            <td>${dos_anios_p_f2.toExponential(2)}</td>
            <td>${anio_f2_p.toExponential(2)}</td>
            <td>${total_f2.toExponential(2)}</td>
            <td>${transformidad_f2.toExponential(2)}</td>
            <td>${emergia_p_f2.toExponential(2)}</td>
        </tr>
        <tr>
            <th>3</th>
            <th>Rain, chemical energy (J)</th>
            <td>R</td>
            <td>${dos_anios_p_f3.toExponential(2)}</td>
            <td>${anio_f3_p.toExponential(2)}</td>
            <td>${total_f3.toExponential(2)}</td>
            <td>${transformidad_f3.toExponential(2)}</td>
            <td>${emergia_p_f3.toExponential(2)}</td>
        </tr>
        <tr>
            <th>4</th>
            <th>Rain, geopotential energy (J)</th>
            <td>R</td>
            <td>${dos_anios_p_f4.toExponential(2)}</td>
            <td>${anio_f4_p.toExponential(2)}</td>
            <td>${total_f4.toExponential(2)}</td>
            <td>${transformidad_f4.toExponential(2)}</td>
            <td>${emergia_p_f4.toExponential(2)}</td>
        </tr>
        <tr>
            <th>5</th>
            <th>Evapotranspiration (J)</th>
            <td>R</td>
            <td>${dos_anios_p_f5.toExponential(2)}</td>
            <td>${anio_f5_p.toExponential(2)}</td>
            <td>${total_f5.toExponential(2)}</td>
            <td>${transformidad_f5.toExponential(2)}</td>
            <td>${emergia_p_f5.toExponential(2)}</td>
        </tr>
        <tr>
            <th>6</th>
            <th>Soil erosion (J)</th>
            <td>N</td>
            <td>${dos_anios_p_f6.toExponential(2)}</td>
            <td>${anio_f6_p.toExponential(2)}</td>
            <td>${total_f6.toExponential(2)}</td>
            <td>${transformidad_f6.toExponential(2)}</td>
            <td>${emergia_p_f6.toExponential(2)}</td>
        </tr>
        <tr>
            <th>7</th>
            <th>Nitrogen (g)</th>
            <td>F</td>
            <td>${dos_anios_p_f7.toExponential(2)}</td>
            <td>${p_fertilizante_nitr.toExponential(2)}</td>
            <td>${total_f7.toExponential(2)}</td>
            <td>${transformidad_f7.toExponential(2)}</td>
            <td>${emergia_p_f7.toExponential(2)}</td>
        </tr>
        <tr>
            <th>8</th>
            <th>Phosphate (g)</th>
            <td>F</td>
            <td>${dos_anios_p_f8.toExponential(2)}</td>
            <td>${p_fertilizante_fosf.toExponential(2)}</td>
            <td>${total_f8.toExponential(2)}</td>
            <td>${transformidad_f8.toExponential(2)}</td>
            <td>${emergia_p_f8.toExponential(2)}</td>
        </tr>
        <tr>
            <th>9</th>
            <th>Potassium (g)</th>
            <td>F</td>
            <td>${dos_anios_p_f9.toExponential(2)}</td>
            <td>${p_fertilizante_pot.toExponential(2)}</td>
            <td>${total_f9.toExponential(2)}</td>
            <td>${transformidad_f9.toExponential(2)}</td>
            <td>${emergia_p_f9.toExponential(2)}</td>
        </tr>
        <tr>
            <th>10</th>
            <th>Urea (g)</th>
            <td>F</td>
            <td>${dos_anios_p_f10.toExponential(2)}</td>
            <td>${p_urea.toExponential(2)}</td>
            <td>${total_f10.toExponential(2)}</td>
            <td>${transformidad_f10.toExponential(2)}</td>
            <td>${emergia_p_f10.toExponential(2)}</td>
        </tr>
        <tr>
            <th>11</th>
            <th>Cal (g)</th>
            <td>F</td>
            <td>${dos_anios_p_f11.toExponential(2)}</td>
            <td>${p_cal.toExponential(2)}</td>
            <td>${total_f11.toExponential(2)}</td>
            <td>${transformidad_f11.toExponential(2)}</td>
            <td>${emergia_p_f11.toExponential(2)}</td>
        </tr>
        <tr>
            <th>12</th>
            <th>Organic fertilizer (J)</th>
            <td>80% F</td>
            <td>${dos_anios_p_f12.toExponential(2)}</td>
            <td>0.0</td>
            <td>${total_f12.toExponential(2)}</td>
            <td>${transformidad_f12.toExponential(2)}</td>
            <td>${emergia_p_f12.toExponential(2)}</td>
        </tr>
        <tr>
            <th>13</th>
            <th>Seeds (J)</th>
            <td>F</td>
            <td>${dos_anios_p_f13.toExponential(2)}</td>
            <td>0.0</td>
            <td>${total_f13.toExponential(2)}</td>
            <td>${transformidad_f13.toExponential(2)}</td>
            <td>${emergia_p_f13.toExponential(2)}</td>
        </tr>
        <tr>
            <th>14</th>
            <th>Machinery and equipment (g)</th>
            <td>F</td>
            <td>${dos_anios_p_f14.toExponential(2)}</td>
            <td>${p_maqui_mante.toExponential(2)}</td>
            <td>${total_f14.toExponential(2)}</td>
            <td>${transformidad_f14.toExponential(2)}</td>
            <td>${emergia_p_f14.toExponential(2)}</td>
        </tr>
        <tr>
            <th>15</th>
            <th>Human Labor (USD)</th>
            <td>10% F</td>
            <td>${dos_anios_p_f15.toExponential(2)}</td>
            <td>${l_siembra_mante.toExponential(2)}</td>
            <td>${total_f15.toExponential(2)}</td>
            <td>${transformidad_f15.toExponential(2)}</td>
            <td>${emergia_p_f15.toExponential(2)}</td>
        </tr>
        <tr>
            <th>16</th>
            <th>Pesticides and fungicides (g)</th>
            <td>F</td>
            <td>${dos_anios_p_f16.toExponential(2)}</td>
            <td>${p_pesticides_fun.toExponential(2)}</td>
            <td>${total_f16.toExponential(2)}</td>
            <td>${transformidad_f16.toExponential(2)}</td>
            <td>${emergia_p_f16.toExponential(2)}</td>
        </tr>
        <tr>
            <th class="bg-success text-white text-center" colspan="3">Total plantación</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="bg-success text-white text-center">${total_P.toExponential(2)}</td>
        </tr>
            </tr>`
});

db.collection("cosecha").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        c_maquina_eqip = doc.data().mach_equip_h;
        c_fuel_lubricants = doc.data().fuel_lubri_h;
        c_transportation = doc.data().transport_h;
    });

    //COSECHA F17
    emergia_p_f17 = c_maquina_eqip * transformidad_f17;
    //COSECHA F18
    var anio_analizado_c1 = c_fuel_lubricants * 39500000;
    emergia_p_f18 = anio_analizado_c1 * transformidad_f18;
    //COSECHA F19
    emergia_p_f19 = c_transportation * transformidad_f19;
    //COSECHA F20
    emergia_p_f20 = l_Pjornal_recole * transformidad_c20;
    //TOTAL COSECHA
    var total_c = emergia_p_f17 + emergia_p_f18 + emergia_p_f19 + emergia_p_f20;

    var tblCosecha = document.getElementById("cosecha");
    tblCosecha.innerHTML += `<tr colspan="9">
            <th>17</th>
            <th>Machinery and equipment (J)</th>
            <td>F</td>
            <td></td>
            <td>${c_maquina_eqip.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_f17.toExponential(2)}</td>
            <td>${emergia_p_f17.toExponential(2)}</td>
        </tr>
        <tr>
            <th>18</th>
            <th>Fuel and lubricants (J)</th>
            <td>F</td>
            <td></td>
            <td>${anio_analizado_c1.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_f18.toExponential(2)}</td>
            <td>${emergia_p_f18.toExponential(2)}</td>
        </tr>
        <tr>
            <th>19</th>
            <th>Harvest transportation-vehicle (USD)</th>
            <td>F</td>
            <td></td>
            <td>${c_transportation.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_f19.toExponential(2)}</td>
            <td>${emergia_p_f19.toExponential(2)}</td>
        </tr>
        <tr>
            <th>20</th>
            <th>Human Labor (USD)</th>
            <td>10% F</td>
            <td></td>
            <td>${l_Pjornal_recole.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_c20.toExponential(2)}</td>
            <td>${emergia_p_f20.toExponential(2)}</td>
        </tr>
        <tr>
            <th class="bg-warning text-white text-center" colspan="3">Total cosecha</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="bg-warning text-white text-center">${total_c.toExponential(2)}</td>
        </tr>`
});

db.collection("secado").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        s_anio = doc.data().anio_s;
        s_prodCereza = doc.data().prod_s;
        s_dSecado = doc.data().dSecado_s;
        s_k = doc.data().k_s;
        s_patio = doc.data().patio_s;
        s_Vmaqu = doc.data().Vmaqu_s;
        s_consCombust = doc.data().consCombust_s;
        s_Vinfraest = doc.data().Vinfraest_s;
        s_promMens = doc.data().promMens_s;

    });

    //FILA21
    const insolacion_s = p_insolation * 3600000;
    const insolacion_diez = insolacion_s * 10;
    const flujo_anual_s1 = insolacion_diez * (1 - p_albedo) * area_finca;

    emergia_s1 = flujo_anual_s1 * transformidad;

    //FILA22
    const flujo_anual_s2 = area_finca * p_admosfra * p_densidadA * p_viento * (365 / 365);
    emergia_s2 = flujo_anual_s2 * transformidad_f2;

    //FILA23
    const area_finca_1 = 10;
    const evapo_energ = area_finca_1 * p_transpiracion * p_densidad2 * p_enegia_lib;
    const flujo_anual_s3 = (evapo_energ / 365) * 10;
    emergia_s3 = flujo_anual_s3 * transformidad_s3;

    //FILA24
    const prod_perg = s_prodCereza / 5;
    const prod_anio = (prod_perg * 2) / 1000;
    //const water_cons = prod_anio / 1000;
    const flujo_anual_s4 = prod_anio * s_k * p_enegia_lib;
    emergia_s4 = flujo_anual_s4 * transformidad_s4;

    //FILA25
    const flujo_anual_s5 = s_patio * 1000;
    emergia_s5 = flujo_anual_s5 * transformidad_s5;

    //FILA26
    const flujo_anual_s6 = ((s_Vmaqu / v_dolar2014) / 30) / 118;
    emergia_s6 = flujo_anual_s6 * transformidad_s6;
    //FILA27
    const gastos_benef_lh = 16683.73;
    const flujo_anual_s7 = gastos_benef_lh / 118;
    emergia_s7 = flujo_anual_s7 * transformidad_s7;

    //FILA28
    const flujo_anual_s8 = s_consCombust * 39500000;
    emergia_s8 = flujo_anual_s8 * transformidad_s8;
    //FILA29
    const flujo_anual_s9 = ((s_Vinfraest / v_dolar2014) / 50) / 118;
    emergia_s9 = flujo_anual_s9 * transformidad_s9;

    //FILA30
    const flujo_anual_s30 = ((s_promMens * 12) / l_Pdolar) / 118;
    emergia_s30 = flujo_anual_s30 * transformidad_s30;

    //TOTAL
    var total_s = emergia_s1 + emergia_s2 + emergia_s3 + emergia_s4 + emergia_s5 + emergia_s6 + emergia_s7 + emergia_s8 + emergia_s9 + emergia_s30;

    var tblSecado = document.getElementById("secado");
    tblSecado.innerHTML += `<tr colspan="9">
        <th>21</th>
            <th>Solar Insolation (J)</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_s1.toExponential(2)}</td>
            <td></td>
            <td>${transformidad.toExponential(2)}</td>
            <td>${emergia_s1.toExponential(2)}</td>
        </tr>
        <tr>
            <th>22</th>
            <th>Wind, kinetic energy (J)</th>
            <td>R</td>
            <td></td>
            <td>${flujo_anual_s2.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_f2.toExponential(2)}</td>
            <td>${emergia_s2.toExponential(2)}</td>
        </tr>
        <tr>
            <th>23</th>
            <th>Evaporation (G)</th>
            <td>R</td>
            <td></td>
            <td>${flujo_anual_s3.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_s3.toExponential(2)}</td>
            <td>${emergia_s3.toExponential(2)}</td>
        </tr>
        <tr>
            <th>24</th>
            <th>Water (cuadra)</th>
            <td>R</td>
            <td></td>
            <td>${flujo_anual_s4.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_s4.toExponential(2)}</td>
            <td>${emergia_s4.toExponential(2)}</td>
        </tr>
        <tr>
            <th>25</th>
            <th>Drying yard or “paseras” (g)</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_s5.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_s5.toExponential(2)}</td>
            <td>${emergia_s5.toExponential(2)}</td>
        </tr>
        <tr>
            <th>26</th>
            <th>Machinery and equipment (USD) (cuadra)**</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_s6.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_s6.toExponential(2)}</td>
            <td>${emergia_s6.toExponential(2)}</td>
        </tr>
        <tr>
            <th>27</th>
            <th>Human Labor (USD)</th>
            <td>10% F</td>
            <td></td>
            <td>${flujo_anual_s7.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_s7.toExponential(2)}</td>
            <td>${emergia_s7.toExponential(2)}</td>
        </tr>
        <tr>
            <th>28</th>
            <th>Fuel (J)</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_s8.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_s8.toExponential(2)}</td>
            <td>${emergia_s8.toExponential(2)}</td>
        </tr>
        <tr>
            <th>29</th>
            <th>Buildings (USD)(cuadra)</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_s9.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_s9.toExponential(2)}</td>
            <td>${emergia_s9.toExponential(2)}</td>
        </tr>
        <tr>
            <th>30</th>
            <th>Electricity (USD)(cuadra)</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_s30.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_s30.toExponential(2)}</td>
            <td>${emergia_s30.toExponential(2)}</td>
        </tr>
        <tr>
            <th class="bg-info text-white text-center" colspan="3">Total cosecha</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="bg-info text-white text-center">${total_s.toExponential(2)}</td>
        </tr>`

});

db.collection("trillado").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        t_vMaqu = doc.data().vMaqu_t;
        t_vInfraest = doc.data().vInfraest_t;
        t_promMens = doc.data().promMens_t;
        t_juteBags = doc.data().juteBags_t;

    });
    /* 
        db.collection("trillado").where("anio_t", "==", 2018).where("finca", "==", "los naranjos")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
    
                console.log(doc.id, " => ", doc.data());
                t_vMaqu = doc.data().vMaqu_t;
                t_vInfraest = doc.data().vInfraest_t;
                t_promMens = doc.data().promMens_t;
                t_juteBags = doc.data().juteBags_t;
            });
        }) */

    //FILA31
    const flujo_anual_t1 = ((t_vMaqu / v_dolar2014) / 30) / 118;
    emergia_t1 = (flujo_anual_t1 * transformidad_t1);
    //FILA32
    const gastos_benef_trillado = 14244;
    const flujo_anual_t2 = gastos_benef_trillado / 118;
    emergia_t2 = flujo_anual_t2 * transformidad_t2;
    //FILA33
    const flujo_anual_t3 = ((t_vInfraest / v_dolar2014) / 50) / 118;
    emergia_t3 = (flujo_anual_t3 * transformidad_t1);
    //FILA34
    const flujo_anual_t4 = ((t_promMens * 12) / l_Pdolar) / 118;
    emergia_t4 = (flujo_anual_t4 * transformidad_t1);
    //FILA35
    emergia_t5 = (t_juteBags * transformidad_t5);
    //TOTAL
    const total_t = emergia_t1 + emergia_t2 + emergia_t3 + emergia_t4 + emergia_t5;

    var tblTrillado = document.getElementById("trillado");
    tblTrillado.innerHTML += `<tr colspan="9">
        
        <tr>
            <th>31</th>
            <th>Machinery and equipment (USD) (cuadra)**</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_t1.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_t1.toExponential(2)}</td>
            <td>${emergia_t1.toExponential(2)}</td>
        </tr>
        <tr>
            <th>32</th>
            <th>Human Labor (USD)</th>
            <td>10% F</td>
            <td></td>
            <td>${flujo_anual_t2.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_t2.toExponential(2)}</td>
            <td>${emergia_t2.toExponential(2)}</td>
        </tr>
        <tr>
            <th>33</th>
            <th>Buildings (USD)(cuadra)</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_t3.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_t1.toExponential(2)}</td>
            <td>${emergia_t3.toExponential(2)}</td>
        </tr>
        <tr>
            <th>34</th>
            <th>Electricity (USD)(cuadra)</th>
            <td>F</td>
            <td></td>
            <td>${flujo_anual_t4.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_t1.toExponential(2)}</td>
            <td>${emergia_t4.toExponential(2)}</td>
        </tr>
        <tr>
            <th>35</th>
            <th>Jute bags</th>
            <td>F</td>
            <td></td>
            <td>${t_juteBags.toExponential(2)}</td>
            <td></td>
            <td>${transformidad_t5.toExponential(2)}</td>
            <td>${emergia_t5.toExponential(2)}</td>
        
        <tr>
            <th class="bg-success text-white text-center" colspan="3">Total cosecha</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="bg-success text-white text-center">${total_t.toExponential(2)}</td>
        </tr>`

    //TABLA CONSOLIDADO
    var Rrenovables = emergia_p_f1 + emergia_p_f2 + emergia_p_f3 + emergia_p_f4 + emergia_p_f5 + emergia_s1 + emergia_s2 + emergia_s3 + emergia_s4;
    var Crenovables = (emergia_p_f12 * 0.8) + (emergia_p_f15 * 0.1) + (emergia_p_f20 * 0.1) + (emergia_s7 * 0.1) + (emergia_t2 * 0.1);
    var CNrenovables = emergia_p_f7 + emergia_p_f8 + emergia_p_f9 + emergia_p_f10 + emergia_p_f11 +
        (emergia_p_f12 * 0.2) + emergia_p_f13 + emergia_p_f14 + (emergia_p_f15 * 0.9) + emergia_p_f16 + emergia_p_f17 + emergia_p_f18 + emergia_p_f19 +
        (emergia_p_f20 * 0.9) + emergia_s5 + emergia_s6 + (emergia_s7 * 0.9) + emergia_s8 + emergia_s9 + emergia_s30 + emergia_t1 +
        (emergia_t2 * 0.9) + emergia_t3 + emergia_t4 + emergia_t5;

    consol_total = Rrenovables + emergia_p_f6 + Crenovables + CNrenovables;

    var tblConsolidado = document.getElementById("consolidado");
    tblConsolidado.innerHTML += `<tr colspan="9">
            <td>${Rrenovables.toExponential(2)}</td>
            <td>${emergia_p_f6.toExponential(2)}</td>
            <td>${Crenovables.toExponential(2)}</td>
            <td>${CNrenovables.toExponential(2)}</td>
            <td>${consol_total.toExponential(2)}</td>
        </tr>`
    //TRANFORMITY INDICATOR

    //cafe cereza

    var prodAlmendra = s_prodCereza * factor_f;
    const equiv1k = 24500000;
    var flujoAnual = prodAlmendra * equiv1k;
    var transf2018 = consol_total / flujoAnual;

    var eyr = consol_total / (Crenovables + CNrenovables);
    var elr = (emergia_p_f6 + CNrenovables) / (Rrenovables + Crenovables);
    var eir = (Crenovables + CNrenovables) / (emergia_p_f6 + Rrenovables);
    var esi = eyr / elr;

    var tblIndicador = document.getElementById("indicador");
    tblIndicador.innerHTML += `<tr>
            <th>EYR=Y_coffee/F</th>
            <td>${eyr.toExponential(2)}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>ELR=(N+F_N)/(R+F_R )</th>
            <td>${elr.toExponential(2)}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>EIR=F/(N+R)</th>
            <td>${eir.toExponential(2)}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>ESI=EYR/ELR</th>
            <td>${esi.toExponential(2)}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>Transformity</th>
            <td>${transf2018.toExponential(2)}</td>
            <td></td>
            <td></td>
        </tr>`
    //GRAFICAS
    //Balrras

    google.charts.load("current", { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ["Element", "", { role: "style" }],
            ["R: Renovables", Rrenovables, "#b87333"],
            ["N: No renavables", emergia_p_f6, "silver"],
            ["R: Renovables", Crenovables, "gold"],
            ["N: No renavables", CNrenovables, "color: #e5e4e2"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
            {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            },
            2]);

        var options = {
            /* title: "Emergy Flow (year/ha), coffe production in Los Naranjos farm, 2018", */
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
        };

        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);

        //GRAFICA TORTA

        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ["R: Renovables", Rrenovables],
                ["N: No renavables", emergia_p_f6],
                ["R: Renovables s", Crenovables],
                ["N: No renavables s", CNrenovables]
            ]);

            var options = {
                /* title: 'Emergy Flow (year/ha), coffe production in Los Naranjos farm, 2018', */
                is3D: true,
                bar: { groupWidth: "70%" },
                legend: { position: "none" },
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
            chart.draw(data, options);
        }

        //GRAFICA POR AÑO

        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChartt);
        function drawChartt() {
            var data = google.visualization.arrayToDataTable([
                ['Year', 'EYR', 'ELR', 'EIR', 'ESI'],
                ['2018', eyr, elr, eir,  esi]
            /* ['2019', 4170, 3600, 2000, 700],
                ['2020', 4660, 3200, 2000, 700]*/
            ]); 

            var options = {
                /* title: 'Tranformity indicator',
                hAxis: { title: 'Year' },
                vAxis: { title: 'Emergy indices' }, */
                pointSize: 10,
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_pointSize'));
            chart.draw(data, options);
        }
    }

});
// barsVisualization must be global in our script tag to be able
// to get and set selection.

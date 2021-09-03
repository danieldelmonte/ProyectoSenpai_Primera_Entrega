/* Declaramos el Objeto con la info del Proyecto que estamos trabajando */

const proyecto_seleccionado = {
    titulo: "PROYECTO ESTRELLA",
    imagen: "img/detalle_proyecto_1.jpg",
    recaudado: 525,
    objetivo: 3000,
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem voluptatum quos commodi, nesciunt expedita a aliquam dolore consectetur asperiores minus natus aliquid nobis voluptates, dolores eligendi officia praesentium rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem voluptatum quos commodi, nesciunt expedita a aliquam dolore consectetur asperiores minus natus aliquid nobis voluptates, dolores eligendi officia praesentium rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem voluptatum quos commodi, nesciunt expedita a aliquam dolore consectetur asperiores minus natus aliquid nobis voluptates, dolores eligendi officia praesentium rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem voluptatum quos commodi, nesciunt expedita a aliquam dolore consectetur asperiores minus natus aliquid nobis voluptates, dolores eligendi officia praesentium rerum?",
    dias_restantes: 9,
};


/* Declaramos un array con los comentarios ingresados para el Proyecto */

const comentarios_proyecto = [{
        contenido: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
        usuario: "Daniel Delmonte",
        fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
    },
    {
        contenido: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
        usuario: "Daniel Delmonte",
        fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
    },
    {
        contenido: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
        usuario: "Daniel Delmonte",
        fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
    }
];


/* CAPTURA DE ELEMENTOS */

const botonMeGusta = document.getElementById("megusta_img");
const textoMeGusta = document.getElementById("megusta_OK");
const textoNoMeGusta = document.getElementById("megusta_NO_OK");
const botonAgregarComentario = document.getElementById("btnAgregarComentario");
const textoComentario = document.getElementById("txtComentario");


const div_img_detalle = document.getElementsByClassName("img_detalle")[0];
const div_side_detalle = document.getElementsByClassName("side_detalle")[0];
const div_acciones_detalle = document.getElementsByClassName("acciones_detalle")[0];
const div_descripcion_detalle = document.getElementsByClassName("descripcion_detalle")[0];
const div_titulo_detalle = document.getElementById("titulo_detalle");

const div_zona_comentarios = document.getElementById("zona_comentarios");


/* INICIALIZACIÓN DE VALORES */

textoNoMeGusta.style.display = "block";
textoMeGusta.style.display = "none";


const cargarProyecto = (proyecto) => {

    /* Cargamos los elementos necesarios con la Info*/

    const imagenItem_Proyecto = document.createElement("img");
    imagenItem_Proyecto.setAttribute("src", proyecto.imagen);
    imagenItem_Proyecto.classList.add("img_item");
    div_img_detalle.appendChild(imagenItem_Proyecto);

    const recaudadoProyecto = document.createElement("div");
    recaudadoProyecto.classList.add("side_recaudado");
    recaudadoProyecto.textContent = `$${proyecto.recaudado} de $${proyecto.objetivo}`;
    div_side_detalle.appendChild(recaudadoProyecto);

    const porcentajeProyecto = document.createElement("div");
    porcentajeProyecto.classList.add("side_porcentaje");
    const porcentajeRecaudado = parseInt((proyecto.recaudado * 100) / proyecto.objetivo);
    porcentajeProyecto.textContent = porcentajeRecaudado.toString() + '% Recaudado';
    div_side_detalle.appendChild(porcentajeProyecto);

    const restanteProyecto = document.createElement("div");
    restanteProyecto.classList.add("side_dias");
    restanteProyecto.textContent = `${proyecto.dias_restantes} días restantes`;
    div_side_detalle.appendChild(restanteProyecto);

    div_titulo_detalle.textContent = proyecto.titulo;

    div_descripcion_detalle.textContent = proyecto.descripcion;

};


const cargarComentario = (comentario) => {

    /* Cargamos el comentario en el HTML*/

    const div_comentario = document.createElement("div");
    div_comentario.classList.add("item_comentario");

    const div_contenido_comentario = document.createElement("div");
    div_contenido_comentario.textContent = comentario.contenido;
    div_comentario.appendChild(div_contenido_comentario);

    const div_log_comentario = document.createElement("div");
    div_log_comentario.classList.add("item_comentario_log");
    div_comentario.appendChild(div_log_comentario);

    const div_user_comentario = document.createElement("div");
    div_user_comentario.textContent = `User: ${comentario.usuario}`;
    div_log_comentario.appendChild(div_user_comentario);

    const div_fecha_comentario = document.createElement("div");
    div_fecha_comentario.classList.add("item_date");
    div_fecha_comentario.textContent = `Fecha: ${comentario.fecha}`;
    div_log_comentario.appendChild(div_fecha_comentario);

    div_zona_comentarios.appendChild(div_comentario);

};


/* ASIGNACIÓN DE EVENTOS */

botonMeGusta.addEventListener("click", () => {

    let valorBoton = botonMeGusta.getAttribute('src');

    if (valorBoton === 'img/heart_rojo_16.png') {
        botonMeGusta.src = "img/heart_blanco_16.png"
        textoMeGusta.style.display = "none";
        textoNoMeGusta.style.display = "block";
    } else {
        botonMeGusta.src = "img/heart_rojo_16.png"
        textoMeGusta.style.display = "block";
        textoNoMeGusta.style.display = "none";

    }
});


botonAgregarComentario.addEventListener("click", () => {

    const nomUsuario = "Daniel Delmonte"; //Este valor luego lo obtendremos del Login....por ahora es fijo

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);


    if (textoComentario.value !== "") {

        let nuevoComentario = {
            contenido: textoComentario.value,
            usuario: nomUsuario,
            fecha: hoy.toUTCString(),
        };

        cargarComentario(nuevoComentario);
        textoComentario.value = "";

    } else {
        alert("No ha ingresado un comentario....");
    }

});

/* FUNCIÓN LLAMADA AL CARGAR LA PÁGINA */
cargarProyecto(proyecto_seleccionado);

/* Y CARGAMOS LOS COMENTARIOS.... */
for (let i = 0; i < comentarios_proyecto.length; i++) {
    const comentario = comentarios_proyecto[i];
    cargarComentario(comentario);
}
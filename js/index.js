/* Declaramos un array con el TOP 3 de Proyectos por Fecha de Finalización */

const proyectos_top = [{
        titulo: "PROYECTO ESTRELLA",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 525,
        objetivo: 3000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 9,
    },
    {
        titulo: "PROYECTO ESTRELLA 2",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
    },
    {
        titulo: "PROYECTO ESTRELLA 3",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 963,
        objetivo: 5000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 23,
    }
];

/* Declaramos un array con el TOP 5 de Proyectos para el Listado */


const proyectos_listado = [{
        titulo: "PROYECTO LISTADO 1",
        imagen: "img/mini_item.jpg",
        recaudado: 525,
        objetivo: 3000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 9,
    },
    {
        titulo: "PROYECTO LISTADO 2",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
    },
    {
        titulo: "PROYECTO LISTADO 3",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
    },
    {
        titulo: "PROYECTO LISTADO 4",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
    },
    {
        titulo: "PROYECTO LISTADO 5",
        imagen: "img/mini_item.jpg",
        recaudado: 963,
        objetivo: 5000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 23,
    }
];

/* CAPTURA DE ELEMENTOS */

const main = document.getElementsByTagName("main")[0];
const div_listadoProyectos = document.getElementById("listado_proyectos");
const txtProyecto = document.getElementById("txtProyecto");

/* Definimos una función para crear y agregar un Proyecto al DOM (TOP 3) */

const crearYAgregarProyecto_TOP = (proyecto) => {

    /* Creamos los elementos necesarios*/

    const linkProyecto = document.createElement("a");
    linkProyecto.setAttribute("href", "detalle_proyecto.html");
    linkProyecto.setAttribute("target", "_blank");
    linkProyecto.classList.add("texto_sin_deco");

    const contenedorProyecto = document.createElement("div");
    contenedorProyecto.classList.add("proyecto_detail");

    const tituloProyecto = document.createElement("div");
    tituloProyecto.classList.add("proyecto_titulo");
    tituloProyecto.textContent = proyecto.titulo;
    contenedorProyecto.appendChild(tituloProyecto);

    const imagenProyecto = document.createElement("div");
    imagenProyecto.classList.add("proyecto_imagen");
    const imagenItem_Proyecto = document.createElement("img");
    imagenItem_Proyecto.setAttribute("src", proyecto.imagen);
    // background-image: url("img/ejemplo_proyecto.jpg");
    // imagenProyecto.style.backgroundImage = `url('${proyecto.imagen}')'`;
    imagenProyecto.appendChild(imagenItem_Proyecto);
    contenedorProyecto.appendChild(imagenProyecto);

    const recaudadoProyecto = document.createElement("div");
    recaudadoProyecto.classList.add("proyecto_recaudado");
    recaudadoProyecto.textContent = `$${proyecto.recaudado} de $${proyecto.objetivo}`;
    contenedorProyecto.appendChild(recaudadoProyecto);

    const descripcionProyecto = document.createElement("div");
    descripcionProyecto.classList.add("proyecto_desc");
    descripcionProyecto.textContent = proyecto.descripcion;
    contenedorProyecto.appendChild(descripcionProyecto);

    const footerProducto = document.createElement("div");
    footerProducto.classList.add("proyecto_footer");
    contenedorProyecto.appendChild(footerProducto);

    const porcentajeProyecto = document.createElement("div");
    porcentajeProyecto.classList.add("centrado_div");
    const porcentajeRecaudado = parseInt((proyecto.recaudado * 100) / proyecto.objetivo);
    porcentajeProyecto.textContent = porcentajeRecaudado.toString() + '% Recaudado';
    footerProducto.appendChild(porcentajeProyecto);

    const restanteProyecto = document.createElement("div");
    restanteProyecto.classList.add("centrado_div");
    restanteProyecto.textContent = `${proyecto.dias_restantes} días restantes`;
    footerProducto.appendChild(restanteProyecto);

    /* Agregamos el producto al DOM como hijo del elemento main */
    linkProyecto.appendChild(contenedorProyecto);
    main.appendChild(linkProyecto);

};


/* Definimos una función para crear y agregar un Proyecto al DOM (Listado) */
const crearYAgregarProyecto_Listado = (proyecto) => {

    /* Creamos los elementos necesarios*/

    const linkProyecto = document.createElement("a");
    linkProyecto.setAttribute("href", "detalle_proyecto.html");
    linkProyecto.setAttribute("target", "_blank");
    linkProyecto.classList.add("texto_sin_deco");

    const contenedorProyecto = document.createElement("div");
    contenedorProyecto.classList.add("item-listado-bajo");

    const imagenProyecto = document.createElement("div");
    imagenProyecto.classList.add("foto_bajo");
    const imagenItem_Proyecto = document.createElement("img");
    imagenItem_Proyecto.setAttribute("src", proyecto.imagen);

    linkProyecto.appendChild(imagenItem_Proyecto);
    imagenProyecto.appendChild(linkProyecto);
    contenedorProyecto.appendChild(imagenProyecto);

    const recaudadoProyecto = document.createElement("div");
    recaudadoProyecto.classList.add("recaudado_bajo");
    recaudadoProyecto.textContent = `$${proyecto.recaudado} de $${proyecto.objetivo}`;
    contenedorProyecto.appendChild(recaudadoProyecto);

    const tituloProyecto = document.createElement("div");
    tituloProyecto.classList.add("titulo_bajo");
    tituloProyecto.textContent = proyecto.titulo;
    contenedorProyecto.appendChild(tituloProyecto);

    const descripcionProyecto = document.createElement("div");
    descripcionProyecto.classList.add("descripcion_bajo");
    descripcionProyecto.textContent = proyecto.descripcion;
    contenedorProyecto.appendChild(descripcionProyecto);


    const footerProducto = document.createElement("div");
    footerProducto.classList.add("status_bajo");
    contenedorProyecto.appendChild(footerProducto);

    const porcentajeProyecto = document.createElement("div");
    porcentajeProyecto.classList.add("centrado_div");
    const porcentajeRecaudado = parseInt((proyecto.recaudado * 100) / proyecto.objetivo);
    porcentajeProyecto.textContent = porcentajeRecaudado.toString() + '% Recaudado';
    footerProducto.appendChild(porcentajeProyecto);

    const restanteProyecto = document.createElement("div");
    restanteProyecto.classList.add("centrado_div");
    restanteProyecto.textContent = `${proyecto.dias_restantes} días restantes`;
    footerProducto.appendChild(restanteProyecto);

    /* Agregamos el producto al DOM como hijo del elemento main */
    div_listadoProyectos.appendChild(contenedorProyecto);

};


/* FUNCIÓN QUE LIMPIA EL LISTADO (EN REALIDAD LIMPIA TODOS LOS HIJOS DE LOS ELEMENTOS QUE PERTENEZCAN A LA CLASE OBTENIDA COMO PARÁMETROS) */

const LimpiarItemsClase = (nomClase) => {

    let paras = document.getElementsByClassName(nomClase);

    while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }

};

/* FUNCIÓN QUE OBTIENE UN ARRAY DE PROYECTOS FILTRADO POR TITULO Y LO AGREGA AL LISTADO  */

const FiltrarProyectosPorTitulo = () => {

    let valorTexto = txtProyecto.value;

    const listadoFiltrado = proyectos_listado.filter(proyecto => proyecto.titulo.toString().includes(valorTexto));

    if (listadoFiltrado.length === 0) {
        const divSinResultados = document.createElement("div");
        // divSinResultados.classList.add("item-listado-bajo");
        divSinResultados.classList.add("sinResultados");
        divSinResultados.textContent = "--- No existen resultados para su búsqueda ---";
        div_listadoProyectos.appendChild(divSinResultados);
    } else {
        for (let i = 0; i < listadoFiltrado.length; i++) {
            const proyecto = listadoFiltrado[i];
            crearYAgregarProyecto_Listado(proyecto);
        }
    }

};


/* INICIALIZACIÓN DE VALORES */

for (let i = 0; i < proyectos_top.length; i++) {
    const proyecto = proyectos_top[i];
    crearYAgregarProyecto_TOP(proyecto);
}


for (let i = 0; i < proyectos_listado.length; i++) {
    const proyecto = proyectos_listado[i];
    crearYAgregarProyecto_Listado(proyecto);
}


/* ASIGNACIÓN DE EVENTOS */

const botonBuscarProyecto = document.getElementById("btnBuscar");

botonBuscarProyecto.addEventListener("click", () => {
    LimpiarItemsClase('item-listado-bajo');
    LimpiarItemsClase('sinResultados');
    FiltrarProyectosPorTitulo();
});

txtProyecto.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        LimpiarItemsClase('item-listado-bajo');
        LimpiarItemsClase('sinResultados');
        FiltrarProyectosPorTitulo();
    }
});
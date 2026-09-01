/* =========================================================
   INVITADOS PERSONALIZADOS
========================================================= */

const invitados = {


    /* ---------- Familia del novio ---------- */

    "stalin-collaguazo-margarita-aguilar":
        "Stalin Collaguazo & Margarita Aguilar",

    "cristhell-collaguazo":
        "Cristhell Collaguazo",

    "sandra-collaguazo":
        "Sandra Collaguazo",


    /* ---------- Familia de la novia ---------- */

    "jose-dota-gloria-ortega":
        "José Dota & Gloria Ortega",

    "marco-dota-esposa-hija":
        "Marco Dota, Esposa e hija",

    "maycol-dota":
        "Maycol Dota",

    "martha-dota-indira-camano":
        "Martha Dota e Indira Camaño",

    "miriam-dota-hijos":
        "Miriam Dota e hijos",

    "pablo-dota":
        "Pablo Dota",

    "familia-macas-dota-mayra":
        "Familia Macas Dota — Mayra Dota & José Macas (3 hijos)",

    "familia-macas-dota-lucia":
        "Familia Macas Dota — Lucía Dota & Raúl Macas (3 hijos)",

    "gloria-dota-benjamin-cali":
        "Gloria Dota & Benjamín Cali",

    "javier-dota":
        "Javier Dota",


    /* ---------- Hermanos y amigos ---------- */

    "familia-urgiles":
        "Familia Urgiles (4 personas)",

    "familia-gahona":
        "Familia Gahona (5 personas)",

    "diego-camacho":
        "Diego Camacho",

    "familia-molina":
        "Familia Molina (5 personas)",

    "familia-herrera-murillo":
        "Familia Herrera Murillo (5 personas)",

    "gladys-charcopa":
        "Gladys Charcopa",

    "jazmin-cabrera":
        "Jazmin Cabrera",

    "nicol-quezada-caleb-erreyes":
        "Nicol Quezada & Caleb Erreyes",

    "malena-vega":
        "Malena Vega",

    "jhoana-mogrovejo":
        "Jhoana Mogrovejo",

    "luis-sanchez":
        "Luis Sánchez",

    "familia-arreaga-coello":
        "Familia Arreaga Coello (5 personas)",

    "familia-aray-loor":
        "Familia Aray Loor (5 personas)",

    "familia-suconota-carchi":
        "Familia Suconota Carchi (4 personas)",

    "cesar-gallegos":
        "Cesar Gallegos",

    "yolanda-ortega":
        "Yolanda Ortega",

    "maite-gualan-hermano":
        "Maite Gualán y hermano",

    "jhonatan-toaquiza":
        "Jhonatan Toaquiza",

    "alberto-bermeo":
        "Alberto Bermeo",

    "esperanza-mora":
        "Esperanza Mora",

    "fotografos":
        "Fotógrafos (2 personas)"

};


/* =========================================================
   MOSTRAR INVITADO
========================================================= */

let nombreInvitadoActual = "Invitado especial";

function mostrarInvitado() {

    const elemento =
        document.getElementById(
            "nombreInvitado"
        );


    if (!elemento) {
        return;
    }


    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const codigo =
        parametros.get("invitado");


    if (!codigo) {

        elemento.textContent =
            "Invitado especial";

        nombreInvitadoActual =
            "Invitado especial";

        return;
    }


    const nombre =
        invitados[codigo];


    if (nombre) {

        elemento.textContent =
            nombre;

        nombreInvitadoActual =
            nombre;

    } else {

        elemento.textContent =
            "Invitado especial";

        nombreInvitadoActual =
            "Invitado especial";

    }

}


/* =========================================================
   EJECUTAR AL CARGAR LA PÁGINA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarInvitado();

    }
);


/* =========================================================
   ABRIR INVITACIÓN
========================================================= */

function abrirInvitacion() {

    const sello =
        document.getElementById("zonaSello");

    const portada =
        document.getElementById("portada");

    const invitacion =
        document.getElementById("invitacion");


    if (!sello || !portada || !invitacion) {
        return;
    }


    // Evita doble clic
    sello.disabled = true;


    // Animación del sello
    sello.classList.add("abriendo");


    // Animación de la portada
    portada.classList.add("cerrando");


    // Cuando termina la animación
    portada.addEventListener(
        "animationend",
        function() {

            portada.style.display = "none";

            invitacion.classList.add("visible");

            iniciarCuentaRegresiva();

        },
        {
            once: true
        }
    );

}


/* =========================================================
   CUENTA REGRESIVA
========================================================= */

function iniciarCuentaRegresiva() {

    const fechaBoda =
        new Date(
            "2026-09-25T18:00:00"
        ).getTime();


    const diasEl =
        document.getElementById("dias");

    const horasEl =
        document.getElementById("horas");

    const minutosEl =
        document.getElementById("minutos");

    const segundosEl =
        document.getElementById("segundos");


    if (
        !diasEl ||
        !horasEl ||
        !minutosEl ||
        !segundosEl
    ) {
        return;
    }


    function actualizar() {

        const ahora =
            new Date().getTime();


        const diferencia =
            fechaBoda - ahora;


        if (diferencia <= 0) {

            diasEl.textContent = "00";

            horasEl.textContent = "00";

            minutosEl.textContent = "00";

            segundosEl.textContent = "00";

            clearInterval(intervalo);

            return;
        }


        const dias =
            Math.floor(
                diferencia /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        const horas =
            Math.floor(
                (
                    diferencia %
                    (
                        1000 *
                        60 *
                        60 *
                        24
                    )
                )
                /
                (
                    1000 *
                    60 *
                    60
                )
            );


        const minutos =
            Math.floor(
                (
                    diferencia %
                    (
                        1000 *
                        60 *
                        60
                    )
                )
                /
                (
                    1000 *
                    60
                )
            );


        const segundos =
            Math.floor(
                (
                    diferencia %
                    (
                        1000 *
                        60
                    )
                )
                /
                1000
            );


        diasEl.textContent =
            String(dias).padStart(2, "0");


        horasEl.textContent =
            String(horas).padStart(2, "0");


        minutosEl.textContent =
            String(minutos).padStart(2, "0");


        segundosEl.textContent =
            String(segundos).padStart(2, "0");

    }


    actualizar();


    const intervalo =
        setInterval(
            actualizar,
            1000
        );

}


/* =========================================================
   REPRODUCTOR DE CANCIÓN
========================================================= */

function toggleCancion() {

    const audio =
        document.getElementById(
            "audioCancion"
        );

    const contenedor =
        document.querySelector(
            ".reproductor-cancion"
        );

    const iconoPlay =
        document.querySelector(
            ".icono-play"
        );

    const iconoPause =
        document.querySelector(
            ".icono-pause"
        );


    if (
        !audio ||
        !contenedor ||
        !iconoPlay ||
        !iconoPause
    ) {
        return;
    }


    if (audio.paused) {

        const reproduccion =
            audio.play();


        if (reproduccion !== undefined) {

            reproduccion
                .then(function() {

                    iconoPlay.style.display =
                        "none";

                    iconoPause.style.display =
                        "block";

                    contenedor.classList.add(
                        "sonando"
                    );

                })
                .catch(function(error) {

                    console.log(
                        "No se pudo reproducir el audio:",
                        error
                    );

                });

        }

    } else {

        audio.pause();

        iconoPlay.style.display =
            "block";

        iconoPause.style.display =
            "none";

        contenedor.classList.remove(
            "sonando"
        );

    }

}


/* =========================================================
   DETENER ANIMACIÓN SI TERMINA / PAUSA EL AUDIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const audio =
            document.getElementById(
                "audioCancion"
            );

        const contenedor =
            document.querySelector(
                ".reproductor-cancion"
            );

        const iconoPlay =
            document.querySelector(
                ".icono-play"
            );

        const iconoPause =
            document.querySelector(
                ".icono-pause"
            );


        if (!audio) {
            return;
        }


        audio.addEventListener(
            "pause",
            function() {

                if (contenedor) {

                    contenedor.classList.remove(
                        "sonando"
                    );

                }


                if (iconoPlay) {

                    iconoPlay.style.display =
                        "block";

                }


                if (iconoPause) {

                    iconoPause.style.display =
                        "none";

                }

            }
        );

    }
);


/* =========================================================
   ABRIR GOOGLE FORMS
========================================================= */

/* =========================================================
   ARMAR EL LINK DEL GOOGLE FORM CON EL NOMBRE PRELLENADO
========================================================= */

function construirSrcFormulario(nombre) {

    const urlBase =
        "https://docs.google.com/forms/d/e/1FAIpQLSd0krSmBNXZ1KrW2Q6lYu40v0xDPEpEUryDWbAspsi8Nb3Axg/viewform";

    const parametros =
        new URLSearchParams();

    parametros.set("embedded", "true");
    parametros.set("entry.802926556", nombre);

    return urlBase + "?" + parametros.toString();

}


function abrirFormularioRSVP() {

    const modal =
        document.getElementById(
            "modalRSVP"
        );

    const iframe =
        document.getElementById(
            "iframeRSVP"
        );


    if (!modal || !iframe) {
        return;
    }


    // Arma el link del formulario con el nombre del invitado actual
    iframe.src =
        construirSrcFormulario(
            nombreInvitadoActual
        );


    modal.classList.add(
        "visible"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CERRAR GOOGLE FORMS
========================================================= */

function cerrarFormularioRSVP() {

    const modal =
        document.getElementById(
            "modalRSVP"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "visible"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   CERRAR MODAL AL HACER CLIC AFUERA
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "modalRSVP"
            );


        if (
            modal &&
            event.target === modal
        ) {

            cerrarFormularioRSVP();

        }

    }
);


/* =========================================================
   CERRAR MODAL CON ESC
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            cerrarFormularioRSVP();

        }

    }
);

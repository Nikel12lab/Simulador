const pre = document.getElementById("pre")
const post = document.getElementById("post")
const tiempoShow = document.getElementById("tiempo-show")
const showInteres = document.getElementById ("interes-show")
const nombres = document.getElementById("nombres-show")
const email = document.getElementById("email-show")
const total = document.getElementById("total-show")
const ganancia = document.getElementById("ganancia-show")
let ganancias = 0
let totall = 0


function simulador(){
    const campoNombre = document.getElementById("nombres").value
    const campoTelefono = document.getElementById("telefono").value
    const campoEmail = document.getElementById("email").value
    const campoMonto = parseInt(document.getElementById("inversion").value)
    const campoTiempo = document.getElementById("tiempo").value
    post.classList.remove("disabled")
    pre.classList.add("disabled")

    
    nombres.innerText= (campoNombre+" ")
    email.innerText= (campoEmail+" ")
    switch (campoTiempo) {
        case "1":
            tiempoShow.innerText = "12 Meses"
            showInteres.innerText = "0.8%"
            ganancias = (campoMonto*0.008)*12
            totall = campoMonto+ganancias
            ganancia.innerText = ganancias
            total.innerText = totall

            break;

        case "2":
            tiempoShow.innerText ="24 Meses"
            showInteres.innerText = "1.3%"
            ganancias = (campoMonto*0.013)*24
            totall = campoMonto+ganancias
            ganancia.innerText = ganancias
            total.innerText = totall

            break;

        default:
            tiempoShow.innerText ="36 Meses"
            showInteres.innerText = "1.7%"
            ganancias = (campoMonto*0.017)*36
            totall = campoMonto+ganancias
            ganancia.innerText = ganancias
            total.innerText = totall
            break

    }
}

const boton = document.getElementById('simulador-btn');

boton.addEventListener("click", simulador)


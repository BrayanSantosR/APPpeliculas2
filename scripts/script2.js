import {data} from "../data/data.js"

//const card= document.getElementById("card").content;
const card = document.querySelector('#cards')
const fragment=document.createDocumentFragment();
//const items=document.getElementById("items");

//addEventListener escuchador o contralador de eventos, 
//"DOMContentLoaded garantiza  que nos llaman la funcion cargar data luego de que cargue el DOM.
document.addEventListener("DOMContentLoaded", ()=> {
    loadpeliculas(data);
})


// crear una funcion para cargar la data o imagenes
function loadpeliculas(data) {
    card.innerHTML = ''
   console.log(data)
    data.forEach((datos) => {
        const items = document.createElement('div')
        const { name, image } = datos;
        items.innerHTML = `
        <div class="col d-flex justify-content-center mb-4">
                <div class="card shadow mb-1 bg-dark rounded text-white " style="width: 16rem;">
                    <h5 class="card-title text-center pt-2">${datos.superhero}</h5>
                    <img src=${datos.image} class="card-img-top " alt="...">
                    <div class="card-body">
                        <p class="card-text text-white-50 description">${datos.descripcion}</p>
                        <h5 class="text-primary">Precio: <span class="precio">${datos.price}</span></h5>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary button" onclick="cargarCarrito()" id=${data.id}>VER</button>
                        </div>
                    </div>
                </div>
            </div><br> 


       `
        card.appendChild(items)
    });
    
 
}

        
    //items.appendChild(fragment);



// FORMULARIO

form.addEventListener("submit", function LocalStorage(){

    // captura de datos
    let inputName= document.getElementById("inputName").value;
    let inputApellido= document.getElementById("inputApellido").value;
    let inputTelefono= document.getElementById("inputTelefono").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let msm = document.getElementById("msm").value;

    //validacion de datos

    if(inputName==="" || email==="" || gender=== "" || msm ==="" || inputApellido==="" || inputTelefono===""){
        alert("ingresar todos los campos");
    }else{
        localStorage.setItem("Nombre", inputName);
        localStorage.setItem("Apellido",inputApellido);
        localStorage.setItem("Telefono",inputTelefono);
        localStorage.setItem("Email", email);
        localStorage.setItem("Genero", gender);
        localStorage.setItem("Mensaje", msm); 
        ObtenerLocalStorage()      
    }

}
)

// funcion obtener localStorage 
function ObtenerLocalStorage(){
    let nombre= localStorage.getItem("Nombre");
    let apellido= localStorage.getItem("Apellido");
    let telefono= localStorage.getItem("Telefono");
    let email= localStorage.getItem("Email");
    let genero= localStorage.getItem("Genero");
    let mensaje= localStorage.getItem("Mensaje");
    alert(`La informacion almacenada es: ${nombre}
    ${apellido}
    ${telefono}
    ${email}
    ${genero} 
    ${mensaje}`);
    
}
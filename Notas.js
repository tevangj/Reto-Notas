let alumnos = [];
let signaturas = [];
let notas = [];
 
function getDatosAlumnos(url){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", url, true);
    xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        setDataAlumnos(data);
    };
    xhr.send();
}

function getAsignaturas(url){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", url, true);
    xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        notas.push(data);
        setDataAsignaturas(data);
    };
    xhr.send();
}

function getNotas(url){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", url, true);
    xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        setDataNotas(data);
    };
    xhr.send();
}

function setDataAlumnos(datos){
    alumnos.push(datos);
    alumnosBase(alumnos);
}

function setDataAsignaturas(datos){
    signaturas.push(datos);
    asignaturasBase(signaturas);
}


function alumnosBase(baseDeDatos){
    for (let index = 0; index < baseDeDatos.length; index++) {
        const a = baseDeDatos[index];
        document.getElementById("tabla_alumnos").innerHTML = "";
        for(let j =0; j < a.length ; j++){
            let html = "";
            const element = a[j];
            html += "<tr>";
            html += "   <th scope='row'>" + element.Alumno + "</th>";
            html += "   <td>" + element.Nombre + "</td>";
            html += "   <td>" + element.Apellido + "</td>";
            html += "   <td>" + element.Correo + "</td>";
            html += "   <td>" + element.Contraseña + "</td>";
            html += "   <td><img src='" + element.Imagen + "' /></td>";
            html += "</tr>";
            tabla = document.getElementById("tabla_alumnos");
            tabla.insertAdjacentHTML('beforeend', html);
           }
        }
    }


function asignaturasBase(baseDeDatos){
    for (let index = 0; index < baseDeDatos.length; index++) {
        const a = baseDeDatos[index];
        document.getElementById("tabla_asignaturas").innerHTML = "";
        for(let j =0; j < a.length ; j++){
            let html = "";
            const element = a[j];
            html += "<tr id='registro_"+(j+1)+"'>";
            html += "   <th scope='row'>" + element.Asignatura + "</th>";
            html += "   <td><img src='" + element.Imagen + "' /></td>";
            html += "</tr>";
            let tabla = document.getElementById("tabla_asignaturas");
            tabla.insertAdjacentHTML('beforeend', html);
        }
    }  
            
}    
    
            /*
           let evento = document.getElementById("registro_"+ (j+1));
            evento.addEventListener('click', function(){
                var xhr = new XMLHttpRequest(); 
                xhr.open("GET","https://6189d55a34b4f400177c4283.mockapi.io/getNotas" , true);
                xhr.onload = function(){
                    let data = JSON.parse(xhr.response);
                    notas.push(data);
                




        }, false);

           }
        }
    }

*/




function pegarAlumno(){
    getDatosAlumnos("https://6189d55a34b4f400177c4283.mockapi.io/getAlumnos");
}

function pegarNotas(){
    getAsignaturas("https://6189d55a34b4f400177c4283.mockapi.io/getAsignaturas");
}
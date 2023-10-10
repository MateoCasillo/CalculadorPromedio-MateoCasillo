// Funcion que dice que el alumno ingresado tiene que tener nombre y sus notas
function Alumno(nombre, notas){
    this.nombre = nombre;
    this.notas = notas
}

// Funcion para pedir las notas del alumno
function solicitarNotas(){
    let notas = []
    for (let i = 1; i <= 5; i++){
        let notaIngresada = parseFloat(prompt("Ingrese una de sus notas del trimestre"));
        
        while (isNaN(notaIngresada)) {
            alert("Por favor, ingrese un número válido.")
            notaIngresada = parseFloat(prompt("Ingrese una de sus notas del trimestre"));
        }

        notas.push(notaIngresada);
    }

    return notas;
}

// Pedir al usuario el nombre del alumno
let nombreAlumno = prompt("Ingrese el nombre del alumno")

while(!isNaN(nombreAlumno)){
    alert("Por favor, ingrese un nombre valido (texto)")
    nombreAlumno = prompt("Ingrese el nombre del alumno")
}

// Guardar las notas del alumno en una variable
let notasAlumno = solicitarNotas();

// Crear un Alumno con los datos ingresados
let alumno = new Alumno(nombreAlumno, notasAlumno);

// Función para calcular el promedio de las notas
function calcularPromedio(notas){
    return notas.reduce((total, nota) => total + nota, 0) / notas.length;
}

// Guardar la funcion que calcula el promedio en una variable
const promedio = calcularPromedio(alumno.notas);

// Mostrar el resultado en la pagina
alert("El promedio de las notas de " + nombreAlumno + " es " + promedio);
alert("El promedio de " + nombreAlumno + " se redondea a: " + Math.ceil(promedio));

console.log(alumno);
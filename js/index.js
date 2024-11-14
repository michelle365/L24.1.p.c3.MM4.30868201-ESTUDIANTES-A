/**
 * ESTUDIANTE-A 
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota 
máxima es 20, y que los estudiantes aprueban con un mínimo de 10. 
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que 
retorne los estudiantes de un semestre dado. 

La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} 
Función: estudiantesSemestre. 
Parámetros: estudiantes (array de objetos estudiante), semestre (un número). 
Retorno: array de objetos estudiante que pertenecen al semestre indicado. 
 */


let estudiantes = [
    { nombre: 'Luis', semestre: 5, nota: 14 },
    { nombre: 'Pedro', semestre: 6, nota: 15 },
    { nombre: 'Ana', semestre: 7, nota: 9 },
]

let estudiantesSemestre = (estudiantes, semestre) => {
    let estudiantesFiltrados = []
    estudiantes.forEach((estudiante) => {
        if (estudiante.semestre === semestre) {
            estudiantesFiltrados.push(estudiante)
        }
    })
    return estudiantesFiltrados
}
    let salida = document.getElementById("salida")
      
    let estudiantes5 = estudiantesSemestre(estudiantes, 5)
    salida.innerHTML = `Estudiantes del semestre 5: <br>`
    estudiantes5.forEach((estudiante) => {
     salida.innerHTML += `Nombre: ${estudiante.nombre} - Semestre ${estudiante.semestre} <br>`
    })
    

     

/*1.Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo con por lo menos 5 elementos*/
const idiomas =[
{
ididioma: 215,
NombreIdioma: "Ingles",
},
{
ididioma: 2684,
NombreIdioma: "Spanish",
},
{
ididioma: 243,
NombreIdioma: "Aleman",
},
{
ididioma: 432,
NombreIdioma: "Frances",
},
{
ididioma: 643,
NombreIdioma: "Italiano",
},
]

/*2. Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3
instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.*/

idioma.forEach(function(indice)
{
  for (let i = 0; i < 3; i++)
  {
    console.log(indice);
  }
})

 /*FOR IN*/
for (let indice in idioma)
{
  for (let i=0; i<3; i++)
  {
    console.log(idioma[indice]);
  }
}

 /*FOR OF*/
for (let indice of idioma)
{
  for (let i=0; i<3; i++)
  {
    console.log(indice);
  }
}

/* 3.Definir una función con Callback que reciba como parámetro su arreglo de elementos y un ID y devuelva el objeto correspondiente, 
luego mostrarlo por consola usando el callback*/

function buscarPorid(ididioma, callback)
{
  const idiomaencontrado = idiomas.find((element)=>{return element.ididioma === ididioma})
  if (!idiomaencontrado){
    return callback("No se ha encontrado el idioma");
  }
  return callback(null, idiomaencontrado);
}

buscarPorid(432,(error, idioma)=>{
  if(error){
    console.log("Ha ocurrido un error")
  }
  console.log(idioma)
})
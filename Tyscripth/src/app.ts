interface idiomas{
    idIdioma: number;
    nombreIdioma : string;
    
}

const Lengua: idiomas[] =
[
    {idIdioma: 215, nombreIdioma: "Ingles"}, 
    {idIdioma: 2684, nombreIdioma: "Spanish"}, 
    {idIdioma: 243, nombreIdioma: "Aleman"}, 
    {idIdioma: 432, nombreIdioma: "Frances"}, 
    {idIdioma: 643, nombreIdioma: "Italiano"}, 
];

/*2. Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3
instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.*/

Lengua.forEach(function(indice)
{
  for (let i = 0; i < 2; i++)
  {
    console.log(indice);
  }
})

 //FOR IN
 for (let indice in Lengua)
{
  for (let i=0; i<3; i++)
  {
    console.log(Lengua[indice]);
  }
}

 //FOR OF
for (let indice of Lengua)
{
  for (let i=0; i<3; i++)
  {
    console.log(indice);
  }
}

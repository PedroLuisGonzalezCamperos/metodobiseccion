//metodo de la bisección

function f(x) {

    return Math.pow(x,2)+x-6;

}



function biseccion(a,b,error,maxIter) {

  let iter=0;
  
  let fa =f(a);

  let fb =f(b);
  



if (fa*fb>=0) {

console.log("En este intervalo el método de la bisección no halla ninguna raíz");
return null;
}



while ((b-a)/2>error && iter<maxIter) {

  let x0=(a+b)/2;

  let fx0=f(x0);




if (fx0===0) {

console.log("La raíz es" + "  " + x0);
return x0;
}

else if (fa*fx0<0) {

b=x0;// b no se define como variable porque ya es un parámetro de entrada de la función
fb=fx0;

} else {

a=x0;// a no se define como variable porque ya es un parámetro de entrada de la función
fa=fx0;

}

iter++;

}


let respuesta=(a+b)/2;
console.log("la raiz aproximada es" + "  " +respuesta)

return respuesta;

}



biseccion(-4,-1,0.0001,1000)
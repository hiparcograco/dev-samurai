var inicial = 0;
var final = 0;
var incremento = 0;

inicial = Number(prompt ("Digite o valor inicial"));
final = Number(prompt ("Digite o valor final"));
incremento = Number(prompt ("Digite o valor incremento"));

alert ("Valor inicial: " + inicial + "\nvalor final:" + final + "\nvalor do incremento:" + incremento);

for (i=inicial;i<=final;i+=incremento){
    console.log("Log("+i+") = " + Math.log(i));
}



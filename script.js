// Solicitar série escolar

let serie = parseInt(prompt("Digite sua série"))

// Nivel de escolaridade

if (serie <1 ){
    alert("Entrada é inválida")
}else if(serie<=5 ){
    alert("Ensino Fundamental I")
}else if(serie >=6 && serie <=9){
    alert("Ensino Fundamental II")
}else if(serie >=10 && serie <=12){
    alert("Educação Médio")
}else{
    alert("Ensino superior")
}

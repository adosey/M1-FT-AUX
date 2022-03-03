function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
//let formato = time.slice(-2);
//let array = time.split(':');
// let horas = time[0];
// let minutos = time[1];
// let segundos = time[2]  "03:15:00PM"
let horas = Number(time.substr(0,2))
let minutos = Number(time.substr(3,2))
let segundos = Number(time.substr(6,2))
let formato = time.substr(8,2)
let hm
if (time === "") {
    return false
}
if (minutos < 60 && segundos < 60  && horas >= 0 && horas <=12) {
    if(formato === 'AM' ){
        if(horas === 12) {
            hm = '00';
         }else
             hm = time.substr(0,2);
    }

    if(formato === 'PM' ){
        if(horas === 12) {
            hm = 12;
        }else hm = horas + 12
    
    }
}else return false 

hm.toString();
return `${hm}:${time.substr(3,2)}:${time.substr(6,2)}`

}

module.exports = {
    timeConversion
}
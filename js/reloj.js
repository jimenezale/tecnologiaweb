let fecha1 = new Date('2022/11/21');
let fecha2 = new Date()

let resta = fecha1.getTime()-fecha2.getTime() 
        difference=(Math.round(resta / (1000 * 60 * 60 * 24)))-1

//alert(difference) ;
let tiempo=new Date();
let hora=tiempo.getHours();
let minuto=tiempo.getMinutes();
let segundo=tiempo.getSeconds();
let hactual=((((hora*60)+minuto)*60)+segundo)*1000;


///alert(hora+" "+minuto+" "+segundo);

///alert(hactual);

//86400000=milisegundos en un dia


//convertimos el restante a segundos
let dife=(86400000-hactual)/1000;

//obtenemos las horas
let hors=Math.trunc(dife/3600);

//obtenes los segundos que restan 
let reh=dife%3600;

//convertimos los segundos a minutos
let mins=Math.trunc(reh/60)

//obtenemos los segundos restantes
let segs=reh%60;

///alert("segundos restantes:"+dife);
///alert("horas: "+hors+" minutos: "+mins+" segundos: "+segs)


//este cuenta con 1 segundo demas hay que restar ese segundo; tomar en cuenta

let dias=difference;

let horas=hors;
let minutos=mins;
let segundos=segs;
cargarsegundo()
 
function cargarsegundo(){
    let txtSegundos;

    if(segundos<0)
    {
        segundos=59;
    }

    if(segundos<10)
    {
        txtSegundos = `0${segundos}`;

    }
    else
    {
        txtSegundos=segundos;
    }
    document.getElementById('segundos').innerHTML =txtSegundos;
    segundos --;
    cargarminutos(segundos);
}   

/**/ 
setInterval(cargarsegundo,1000);

function cargarminutos(segundos){
    let txtMinutos;
    if(segundos==-1 && minutos !==0){
        setTimeout(()=>{
            minutos--;
        },500)
    }
    else{
        if(segundos ==-1 && minutos ==0){
            setTimeout(()=>{
                minutos=59;
            },500)
        }
    }

    if(minutos<10){
        txtMinutos=`0${minutos}`;
    }
    else{
        txtMinutos=minutos;
    }
    document.getElementById('minutos').innerHTML=txtMinutos;
    cargarHoras(segundos,minutos);
}

function cargarHoras(segundos,minutos){
    let txtHoras;

    if(segundos==-1 && minutos ==0 && horas !==0){
        setTimeout(()=>{
            horas--;
        },500)
    }
    else{
        if(segundos==-1 && minutos==0 && horas==0){
            setTimeout(()=>{
                horas=2;
            })
        }
    }

    if(horas<10){
        txtHoras=`0${horas}`;
    }
    else
    {
        txtHoras=horas;
    }
    document.getElementById('horas').innerHTML=txtHoras;
   cargarDias(minutos,horas);
}


setInterval(cargarSegundo,1000);

function cargarDias(minutos,horas){
    let txtDias;

    if(minutos==-1 && minutos ==0 && horas !==0){
        setTimeout(()=>{
            dias--;
        },500)
    }
    else{
        if( minutos==0 && horas==0){
            setTimeout(()=>{
                dias=2;
            })
        }
    }

    if(horas<10){
        txtDias=`0${dias}`;
    }
    else
    {
        txtDias=dias;
    }
    document.getElementById('dias').innerHTML=txtDias;
}

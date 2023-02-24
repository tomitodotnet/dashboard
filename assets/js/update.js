
let runScripts = () => {

//alert("hola tom")
let chart_bars  = document.getElementById( "chart-bars" );
console.log( chart_bars );

let icons  = document.getElementsByTagName( "i" );
console.log( icons );

let cards  = document.getElementsByClassName( "card" );
console.log( cards );


};

let modifyText = () => {

    
let listOfP   = document.getElementsByTagName( "p" );
let elementP  = listOfP[3];
elementP.innerHTML = "Dinero actual";

let listOfH4    = document.getElementsByTagName( "h4" );
let elementH4   = listOfH4 [0];
elementH4.innerHTML = "$301k";


}

let updateData = () => {

    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];  
    
    
  let [ users, clients, sales ] = data;

  
  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;

   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

  
 let listOfElements = document.getElementsByClassName('text-end pt-1') 


 let [ , second, third, fourth ] = listOfElements;

 second.innerHTML = message_users;
 third.innerHTML = message_clients;
 fourth.innerHTML = message_sales;

 //PAFRTE 2

 let mensaje_cambios =  '<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentaje_de_cambio} </span> ${mensaje_tiempo} </p>' ;


    }


    let updateDataCambios = () => {

        let cambios = [
            {
              valor_previo: 250,
              valor_actual: 301,
              mensaje_tiempo: 'que la semana anterior'
            },
            {
              valor_previo: 3510,
              valor_actual: 3200,
              mensaje_tiempo: 'que la semana anterior'
            },
            {
              valor_previo: 3920,
              valor_actual: 4215,
              mensaje_tiempo: 'que ayer'
            },
            {
              valor_previo: 110200,
              valor_actual: 121520,
              mensaje_tiempo: 'que ayer'
            }
          ]
          
          
        
      let [ cambio1, cambio2, cambio3, cambio4 ] = cambios;
    
      
      let { valor_previo: valor_previo1, valor_actual: valor_actual1 , mensaje_tiempo: mensaje_tiempo1 } = cambio1;
      let { valor_previo: valor_previo2, valor_actual: valor_actual2, mensaje_tiempo: mensaje_tiempo2 } = cambio2;
      let { valor_previo: valor_previo3, valor_actual: valor_actual3 , mensaje_tiempo: mensaje_tiempo3 } = cambio3;
      let { valor_previo: valor_previo4, valor_actual: valor_actual4 , mensaje_tiempo: mensaje_tiempo4 } = cambio4;
      
      let   porcentaje_de_cambio1 = (valor_actual1 - valor_previo1)*100/valor_previo1 ;
      let   porcentaje_de_cambio2 = (valor_actual2 - valor_previo2)*100/valor_previo2 ;
      let   porcentaje_de_cambio3 = (valor_actual3 - valor_previo3)*100/valor_previo3 ;
      let   porcentaje_de_cambio4 = (valor_actual4 - valor_previo4)*100/valor_previo4 ;

      let clase_cambio1 = porcentaje_de_cambio1 > 0 ? "text-success" : "'text-danger";
      let clase_cambio2 = porcentaje_de_cambio2 > 0 ? "text-success" : "'text-danger";
      let clase_cambio3 = porcentaje_de_cambio3 > 0 ? "text-success" : "'text-danger";
      let clase_cambio4 = porcentaje_de_cambio4 > 0 ? "text-success" : "'text-danger";

      porcentaje_de_cambio1 = Math.round(porcentaje_de_cambio1)
      porcentaje_de_cambio2 = Math.round(porcentaje_de_cambio2)
      porcentaje_de_cambio3 = Math.round(porcentaje_de_cambio3)
      porcentaje_de_cambio4 = Math.round(porcentaje_de_cambio4)

      let mensaje_cambio1 = `<p class="mb-0"><span class="text-sm ${clase_cambio1} font-weight-bolder"> ${porcentaje_de_cambio1} </span> ${mensaje_tiempo1} </p>`;
      let mensaje_cambio2 = `<p class="mb-0"><span class="text-sm ${clase_cambio2} font-weight-bolder"> ${porcentaje_de_cambio2} </span> ${mensaje_tiempo2} </p>`;
      let mensaje_cambio3 = `<p class="mb-0"><span class="text-sm ${clase_cambio3} font-weight-bolder"> ${porcentaje_de_cambio3} </span> ${mensaje_tiempo3} </p>`;
      let mensaje_cambio4 = `<p class="mb-0"><span class="text-sm ${clase_cambio4} font-weight-bolder"> ${porcentaje_de_cambio4} </span> ${mensaje_tiempo4} </p>`;
      
      
     let listOfElements = document.getElementsByClassName('card-footer p-3') 
        
     let [ uno, second, third, fourth ] = listOfElements;
     uno.innerHTML = mensaje_cambio1;
    
     second.innerHTML = mensaje_cambio2;
     third.innerHTML = mensaje_cambio3;
     fourth.innerHTML = mensaje_cambio4;
    
    
    
        }
    
    
runScripts();
modifyText();
updateData();

updateDataCambios();


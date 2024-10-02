/*arrayPrincipal.forEach(subArray => {      
    subArray.forEach(element => {         
        console.log(element);
    });
});
*/


  const listaProductos = document.getElementById('listaProductos');

  fetch('data/datos.json')
      .then(response => response.json())
      .then(data => {
            data.productos.forEach ( (productos , index) => {
              const row = document.createElement('tr');
              row.innerHTML = `
               
                  <td>${productos.id}</td>
                  <td>${productos.nombre}</td>
                  <td>${productos.categoria}</td>
                  <td>${productos.descripcion}</td>
                  <td>${productos.precio}</td>
                  
                  `;
                  listaProductos.appendChild(row);
                })
          
          
          const tituloPagina =document.getElementById('tituloPagina');
          tituloPagina.innerHTML = `<h1 id="tituloPagina"> ${data.titulo_pagina}</h1>`;
  
          const contacto =document.getElementById('contacto');
          contacto.innerHTML = `<p id="contacto"> ${data.datos_tienda.nombre}</p>
          <p id="contacto"> ${data.datos_tienda.direccion}</p>
          <p id="contacto"> ${data.datos_tienda.telefono}</p>
          <p id="contacto"> ${data.datos_tienda.correo}</p>
          <p id="contacto"> horarios de atencion</p>
          <p id="contacto"> Lunes a viernes :${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
          <p id="contacto"> sabados :${data.datos_tienda.horario_atencion.sabados}
          <p id="contacto"> domingos :${data.datos_tienda.horario_atencion.domingos}</p></p>`;
          
      })
      .catch(error => {
          console.error('Error al cargar el archivo JSON:', error);
        });

            /*const row = document.createElement('tr');
            row.innerHTML = `
             <th scope="row">${index + 1}</th>
                <td>${computadores.nombre}</td>
                <td>${computadores.descripcion}</td>
                <td>${computadores.precio}</td>
            `;
            listaComputadores.appendChild(row);
            

        
        });
        const tituloPagina =document.getElementById('tituloPagina');
        tituloPagina.innerHTML = `<h1 id="tituloPagina"> ${data.titulo_pagina}</h1>`;

        const contacto =document.getElementById('contacto');
        contacto.innerHTML = `<p id="contacto"> ${data.datos_tienda.nombre}</p>
        <p id="contacto"> ${data.datos_tienda.correo}</p>
        <p id="contacto"> ${data.datos_tienda.telefono}</p>
        <p id="contacto"> ${data.datos_tienda.direccion}</p>`;
        
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
*/
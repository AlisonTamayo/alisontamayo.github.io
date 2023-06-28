const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async(e) => { 
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/6cc56fd5-f407-431e-a795-8d01f59cb897',{
        method:'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/jason'
        },
        body: JSON.stringify({
            "Nombre": "prueba1"

        })
    });
         
    
});
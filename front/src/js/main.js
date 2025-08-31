import Swal from 'sweetalert2';

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e)=>{
        e.preventDefault();

        const cliente= {
      nombres: document.getElementById("nombres").value,
      apellidos: document.getElementById("apellidos").value,
      tipoIdentificacion: document.getElementById("tipoIdentificacion").value,
      numeroIdentificacion: document.getElementById("numeroIdentificacion").value,
      fechaNacimiento: document.getElementById("fechaNacimiento").value,
      direccion: document.getElementById("direccion").value,
      pais: document.getElementById("pais").value,
      departamento: document.getElementById("departamento").value,
      ciudad: document.getElementById("ciudad").value,
      marca: document.getElementById("marca").value,
    };
            try {
      const response = await fetch("http://localhost:8080/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
      });

      if (response.ok) {
        const data = await response.json();

        Swal.fire({
          title: '¡Éxito!',
          text: 'Cliente registrado con éxito',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        console.log("Servidor respondió:", data);
        form.reset();
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al registrar el cliente',
          icon: 'error',
          confirmButtonText: 'Reintentar'
        });

        console.error("Error HTTP:", response.status);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      Swal.fire({
        title: 'Error de conexión',
        text: 'No se pudo conectar con el backend',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
   }
  });
});

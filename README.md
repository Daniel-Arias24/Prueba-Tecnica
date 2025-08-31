📝 Proyecto: Formulario de Registro con Frontend (Vite) + Backend (Spring Boot)

Este proyecto implementa un sistema de registro de clientes con un frontend moderno y un backend robusto conectado a una base de datos MySQL.

El flujo principal permite que un usuario se registre en un programa de fidelidad, enviando sus datos al backend, donde se almacenan correctamente en la base de datos.

📂 Estructura del proyecto
/frontend (Vite + JS + Bootstrap + SweetAlert)
│── index.html                # Página principal del formulario
│── src/
│   ├── css/style.css         # Estilos personalizados
│   ├── js/main.js            # Lógica de envío al backend
│   └── assets/               # Recursos estáticos
│
└── package.json              # Dependencias y scripts npm

/backend (Spring Boot + Java)
│── src/main/java/com/proyecto
│   ├── model/Cliente.java    # Clase modelo del cliente
│   ├── repository/ClienteRepo.java # Repositorio JPA
│   ├── controller/ClienteController.java # Controlador REST
│   └── PruebaFormulario.java # Clase principal para iniciar el backend
│
└── src/main/resources/
    ├── application.properties # Configuración de conexión a MySQL
    └── ...

⚙ Tecnologías usadas
Frontend

Vite (para desarrollo rápido con npm run dev)

JavaScript (ES6+)

Bootstrap 5.3 (estilos y responsive design vía CDN)

SweetAlert2 (notificaciones visuales de éxito y error)

CSS personalizado

Backend

Java 17+

Spring Boot (REST API)

Spring Data JPA (para interacción con la base de datos)

MySQL (almacenamiento de datos)

📌 Funcionalidades

✅ Registro de clientes desde un formulario web.
✅ Validación de campos en frontend con HTML5.
✅ Envío de datos al backend mediante fetch API (JSON).
✅ Notificaciones de éxito o error con SweetAlert2.
✅ Persistencia de datos en MySQL.
✅ Consultas a la base de datos, ejemplo:

SELECT * FROM cliente;


✅ Estructura escalable: modelo, repositorio y controlador en backend.

🚀 Ejecución del proyecto
🔹 1. Frontend

Abrir la carpeta del frontend en Visual Studio Code.

Instalar dependencias (si no están instaladas):

npm install


Ejecutar el proyecto:

npm run dev


En la terminal aparecerá un link (ejemplo: http://localhost:5173/).

Abrir con CTRL + Click para ver el formulario en el navegador.

🔹 2. Backend

Abrir el proyecto de Spring Boot en tu IDE (Eclipse, IntelliJ, STS).

Configurar el archivo application.properties con tu usuario y contraseña de MySQL:

spring.datasource.url=jdbc:mysql://localhost:3306/tu_base_datos
spring.datasource.username=TU_USUARIO
spring.datasource.password=TU_CONTRASEÑA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


Ejecutar la clase principal:

PruebaFormulario.java


El backend quedará corriendo en:

http://localhost:8080

📊 Flujo de registro

El usuario llena el formulario en el frontend.

Al dar clic en “Registrarme”, los datos se envían al backend vía POST (/clientes).

El backend recibe los datos y los guarda en la tabla cliente de la base de datos MySQL.

SweetAlert muestra un mensaje de éxito o error según la respuesta.

Los registros se pueden consultar desde MySQL:

SELECT * FROM cliente;

⚠ Notas importantes

Es necesario tener MySQL corriendo y crear previamente la base de datos (ejemplo: formulario_db).

Cambiar en application.properties el usuario y contraseña según tu instalación de MySQL.

El proyecto está dividido en frontend (Vite) y backend (Spring Boot), se deben ejecutar ambos para el correcto funcionamiento.

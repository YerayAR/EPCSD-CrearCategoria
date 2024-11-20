# EPCSD-CrearCategoria

Este proyecto permite gestionar categorías mediante una API REST y un frontend construido con Vue.js.

## Contenidos

- **Backend**: Microservicio `product-catalog` con endpoints expuestos en Swagger.
- **Frontend**: Aplicación Vue.js para interactuar con la API.

## Requisitos

1. **Docker Desktop**: Asegúrate de tener Docker y Docker Compose instalados.
2. **Configuración del entorno**:
   - Asegúrate de que los puertos **18081** y **8080** estén disponibles.

## Puesta en marcha

### 1. Clonar el repositorio

Clona el repositorio desde GitHub y accede a su directorio:


git clone https://github.com/YerayAR/EPCSD-CrearCategoria.git

cd EPCSD-CrearCategoria

### 2. Construir y levantar los contenedores
Para construir y levantar los contenedores, ejecuta:
docker-compose up --build
Si deseas evitar el uso de caché para la construcción, utiliza:
docker-compose up --build --no-cache
Esto levantará los siguientes contenedores:
API: Disponible en http://localhost:18081.
Swagger: Interfaz para probar la API disponible en http://localhost:18081/swagger-ui/index.html.
Frontend: Interfaz web en http://localhost:8080.


### 3. Acceder a la API
La API expone los siguientes endpoints principales:
GET /categories: Recuperar todas las categorías.
POST /categories: Crear una nueva categoría.
DELETE /categories/{id}: Eliminar una categoría por su ID.
Puedes explorar todos los endpoints en Swagger:
http://localhost:18081/swagger-ui/index.html

### 4. Acceder al Frontend
La interfaz de usuario está disponible en http://localhost:8080. Desde aquí puedes:
Ver las categorías existentes.
Crear nuevas categorías.

### 6. Detener los contenedores
Cuando termines de trabajar, puedes detener los contenedores con:

docker-compose down

### Estructura del proyecto

EPCSD-CrearCategoria/
├── category-frontend/   # Código fuente del frontend en Vue.js
├── product-catalog/     # Microservicio backend con endpoints para manejar categorías
├── docker-compose.yml   # Configuración para levantar los servicios
└── README.md            # Instrucciones del proyecto

Notas adicionales
Persistencia de datos: Los datos de las categorías se almacenan en una base de datos PostgreSQL. Si detienes los contenedores, los datos se conservarán a menos que borres los volúmenes de Docker.
Problemas comunes:
Si tienes problemas de red, asegúrate de que los puertos no estén siendo utilizados por otro servicio.
Si encuentras algún problema con CORS, asegúrate de que el backend esté configurado correctamente para permitir solicitudes.

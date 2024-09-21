Formas de Ejecutar el Proyecto

1. Desde el Código Fuente
Backend (Spring Boot)


Clonar el repositorio y navegar al backend:
git clone https://github.com/Marulanda921/LoginBack.git
cd LoginBack
Configurar la base de datos en application.properties:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/tu_base_de_datos
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña

Ejecutar el backend:
mvn clean install
mvn spring-boot:run

Frontend (Angular)

Clonar el repositorio y navegar al frontend:
git clone https://github.com/Marulanda921/LoginFront.git
cd LoginFront

Instalar dependencias:
npm install

Ejecutar el frontend:
ng serve

2. Usando Docker
Ejecutar los Contenedores Docker


Descargar las imágenes:
docker pull achner/backendfinal:latest
docker pull achner/backendfinal-angular:latest

Ejecutar el backend:
docker run -d -p 8080:8080 achner/backendfinal:latest

Ejecutar el frontend:
docker run -d -p 4200:80 achner/backendfinal-angular:latest
3. Usando Docker Compose
Crear un archivo docker-compose.yml y usar el siguiente contenido básico:

yaml
Copy code
version: '3.8'

services:
  backend:
    image: achner/backendfinal:latest
    ports:
      - "8080:8080"
  frontend:
    image: achner/backendfinal-angular:latest
    ports:
      - "4200:80"

      
Ejecutar con Docker Compose:
docker-compose up -d

Acceso a la Aplicación
Frontend: http://localhost:4200
Backend: http://localhost:8080

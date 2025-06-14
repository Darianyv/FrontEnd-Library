# 📚 Sombras y Letras - Biblioteca Digital

**Sombras y Letras** es una biblioteca digital desarrollada con **React + Vite**, que permite a los usuarios explorar libros por categoría, visualizar detalles, registrarse, iniciar sesión y realizar préstamos. También incluye un panel de administrador para gestionar libros, usuarios y préstamos.

## 🚀 Tecnologías utilizadas

- React
- Vite
- Bootstrap
- Chart.js (para gráficas)
- LocalStorage (para autenticación)
- Axios (para conexión con el backend)
- React Router DOM

## 🎯 Características principales

### Para usuarios/clientes:
- Página de inicio con imagen destacada y botón de registro.
- Navegación por categorías.
- Vista de libros destacados.
- Formulario para reservar libros.
- Panel personal para ver libros reservados y cerrar sesión.

### Para administradores:
- Dashboard con tarjetas de resumen y gráficas.
- CRUD de libros, usuarios y préstamos.
- Estadísticas de préstamos y libros por categoría.

## 🧩 Estructura del proyecto

sombrasyletras/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── vite.config.js
└── README.md


## ⚙️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Darianyv/FrontEnd-Library.git
cd FrontEnd-Library

2. Instalar dependencias
bash
Copiar
Editar
npm install
3. Ejecutar el servidor de desarrollo
bash
Copiar
Editar
npm run dev
Accede a la app desde: http://localhost:5173

4. Configurar conexión al backend
Asegúrate de que el backend esté corriendo en http://localhost:8080. La app ya está configurada para consumir la API REST desde ese puerto.

Puedes editar las URLs de conexión a la API en los archivos de servicio o directamente en los componentes (axios.get/post/put/...).

🛡️ Autenticación
Se utiliza localStorage para mantener la sesión del usuario.

Al registrarse/iniciar sesión, se almacena el rol y redirige según sea cliente o admin.

🧪 Requisitos
Node.js (v18 o superior recomendado)

Navegador moderno (Chrome, Firefox, etc.)

Backend funcional (revisa: Backend del proyecto)
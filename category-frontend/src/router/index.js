// Importaciones necesarias desde Vue Router
import { createRouter, createWebHistory } from 'vue-router'; // Crea un enrutador usando el historial del navegador
import HomePage from '../views/HomePage.vue'; // Importa el componente HomePage
import CreateCategory from '../views/CreateCategory.vue'; // Importa el componente CreateCategory

// Definición de las rutas del enrutador
const routes = [
  {
    path: '/', // Ruta principal
    name: 'HomePage', // Nombre de la ruta
    component: HomePage, // Componente que se renderiza en esta ruta
  },
  {
    path: '/create-category', // Ruta para crear una categoría
    name: 'CreateCategory', // Nombre de la ruta
    component: CreateCategory, // Componente que se renderiza en esta ruta
  },
];

// Creación del enrutador
const router = createRouter({
  // Modo de historial: utiliza el historial del navegador para una navegación limpia
  history: createWebHistory(),
  routes, // Asigna las rutas definidas
});

// Exporta el enrutador para que pueda ser utilizado en el resto del proyecto
export default router;


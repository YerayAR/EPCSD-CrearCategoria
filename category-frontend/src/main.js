// Importa la función `createApp` desde Vue para inicializar la aplicación
import { createApp } from 'vue';

// Importa el componente principal de la aplicación
import App from './App.vue';

// Importa la configuración de las rutas definidas en el router
import router from './router';

// Crea una nueva instancia de la aplicación utilizando el componente principal `App`,
// agrega el sistema de rutas `router` para manejar la navegación entre páginas
// y monta la aplicación en el elemento con el ID `app` en el archivo HTML.
createApp(App).use(router).mount('#app');
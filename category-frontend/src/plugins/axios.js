// Importa la librería axios, utilizada para realizar solicitudes HTTP
import axios from 'axios';

// Crea una instancia personalizada de axios
const instance = axios.create({
  // Define la URL base para todas las solicitudes realizadas con esta instancia
  // Esto permite mantener un código más limpio, ya que no es necesario escribir la URL completa en cada solicitud
  baseURL: 'http://localhost:18081',
});

// Exporta la instancia personalizada para que pueda ser reutilizada en diferentes partes del proyecto
// Esto garantiza que todas las solicitudes compartan la misma configuración, como la URL base
export default instance;
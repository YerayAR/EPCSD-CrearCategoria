<template>
  <div>
    <!-- Título de la página -->
    <h1>Create a New Category</h1>

    <!-- Formulario para crear una categoría -->
    <form @submit.prevent="createCategory">
      <!-- Campo para ingresar el ID de la categoría -->
      <div>
        <label for="id">ID:</label>
        <input
          type="number"
          id="id"
          v-model="id"
          placeholder="Enter category ID"
          required
        />
      </div>

      <!-- Campo para ingresar el nombre de la categoría -->
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Enter category name"
          required
        />
      </div>

      <!-- Campo para ingresar la descripción de la categoría -->
      <div>
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="description"
          placeholder="Enter category description"
          required
        ></textarea>
      </div>

      <!-- Botón para enviar el formulario -->
      <button type="submit">Create</button>
    </form>

    <!-- Mensaje de éxito o error después de enviar el formulario -->
    <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'; // Importa Axios para realizar solicitudes HTTP

export default {
  // Datos reactivos del componente
  data() {
    return {
      id: null, // Campo obligatorio para el ID de la categoría
      name: '', // Nombre de la categoría
      description: '', // Descripción de la categoría
      message: '', // Mensaje para mostrar éxito o error
      success: false, // Indica si la operación fue exitosa
    };
  },
  methods: {
    // Método para crear una categoría
    async createCategory() {
      try {
        // Realiza una solicitud POST al backend con los datos de la categoría
        const response = await axios.post('http://localhost:18081/categories', {
          id: this.id, // Incluye el ID de la categoría
          name: this.name, // Incluye el nombre
          description: this.description, // Incluye la descripción
          parentId: null, // parentId es opcional, aquí lo dejamos como null
        });

        // Muestra un mensaje de éxito
        this.message = `Category created successfully with ID: ${response.data}`;
        this.success = true;

        // Reinicia los campos del formulario después de crear la categoría
        this.id = null;
        this.name = '';
        this.description = '';
      } catch (error) {
        // Maneja errores y muestra un mensaje de error
        console.error(error);
        this.message = 'Failed to create category. Please try again.';
        this.success = false;
      }
    },
  },
};
</script>

<style scoped>
/* Estilo para el título */
h1 {
  color: #333; /* Color oscuro */
}

/* Estilo para el formulario */
form {
  margin-top: 20px; /* Espaciado superior */
}

form div {
  margin-bottom: 1.5rem; /* Espaciado entre los campos */
}

/* Estilo para las etiquetas */
label {
  display: block;
  font-weight: bold; /* Negrita */
  margin-bottom: 0.5rem; /* Espaciado con el campo */
}

/* Estilo para los campos de entrada y el área de texto */
input,
textarea {
  width: 100%; /* Ancho completo */
  padding: 0.5rem; /* Espaciado interno */
  border: 1px solid #ccc; /* Borde gris claro */
  border-radius: 4px; /* Bordes redondeados */
  font-size: 1rem; /* Tamaño de fuente */
}

textarea {
  resize: vertical; /* Permite redimensionar solo verticalmente */
  height: 100px; /* Altura predeterminada */
}

/* Estilo para el botón de envío */
button {
  padding: 0.75rem 1.5rem; /* Espaciado interno */
  font-size: 1rem; /* Tamaño de fuente */
  background-color: #007BFF; /* Fondo azul */
  color: white; /* Texto blanco */
  border: none; /* Sin bordes */
  border-radius: 4px; /* Bordes redondeados */
  cursor: pointer; /* Cambia el cursor al pasar el ratón */
}

/* Cambia el color del botón al pasar el ratón */
button:hover {
  background-color: #0056b3;
}

/* Estilo para los mensajes */
.message {
  margin-top: 1rem; /* Espaciado superior */
  font-size: 1.2rem; /* Tamaño de fuente */
  color: green; /* Texto verde para éxito */
}

.message.error {
  color: red; /* Texto rojo para errores */
}
</style>

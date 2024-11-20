<template>
  <!-- Contenedor principal de la página -->
  <div>
    <!-- Título principal de la página -->
    <h1>Welcome to HomePage</h1>

    <!-- Enlace para navegar a la página de creación de categorías usando Vue Router -->
    <router-link to="/create-category">Go to Create Category</router-link>
  </div>
</template>

<script>
export default {
  // Nombre del componente (útil para depuración y referencias en otros componentes)
  name: 'HomePage',
};
</script>

<style scoped>
/* Estilo del título principal */
h1 {
  color: #333; /* Color oscuro para el texto */
}

/* Estilo para los enlaces (router-link genera un enlace HTML <a>) */
a {
  color: #007BFF; /* Azul para el texto del enlace */
  text-decoration: none; /* Sin subrayado por defecto */
  font-weight: bold; /* Texto en negrita */
}

/* Estilo para el efecto hover del enlace */
a:hover {
  text-decoration: underline; /* Subrayado al pasar el ratón */
}
</style>


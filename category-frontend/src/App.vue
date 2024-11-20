<template>
  <!-- Contenedor principal de la aplicación -->
  <div id="app">
    <!-- Encabezado que contiene la navegación -->
    <header>
      <nav>
        <ul>
          <!-- Enlace para la página de inicio -->
          <li><router-link to="/">HomePage</router-link></li>
          <!-- Enlace para la página de creación de categoría -->
          <li><router-link to="/create-category">Create Category</router-link></li>
        </ul>
      </nav>
    </header>
    <!-- Área principal donde se renderizan las vistas dinámicas -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  // Nombre del componente principal de la aplicación
  name: 'App',
};
</script>

<style>
/* Estilo para el encabezado */
header {
  background-color: #333; /* Fondo oscuro */
  color: white; /* Texto en blanco */
  padding: 1rem; /* Espaciado interno uniforme */
}

/* Estilo para la lista de navegación */
nav ul {
  list-style: none; /* Sin puntos en la lista */
  margin: 0; /* Elimina márgenes externos */
  padding: 0; /* Elimina rellenos internos */
  display: flex; /* Distribución en línea */
  justify-content: center; /* Centrado horizontal */
}

/* Espaciado entre elementos de la lista */
nav ul li {
  margin: 0 1rem;
}

/* Estilo para los enlaces de navegación */
nav ul li a {
  color: white; /* Texto en blanco */
  text-decoration: none; /* Sin subrayado */
  font-size: 1.2rem; /* Tamaño de fuente aumentado */
}

/* Efecto hover para los enlaces */
nav ul li a:hover {
  text-decoration: underline; /* Subrayado al pasar el ratón */
}
</style>

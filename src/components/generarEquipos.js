export function generarEquipos(nombres, numJugadoresPorEquipo, numEquipos) {
   // Crear una copia del array original para no modificarlo
   const nombresRestantes = [...nombres];
   // Crear un array vacío para almacenar los equipos
   const equipos = [];
   // Iterar sobre el número de equipos
   for (let i = 0; i < numEquipos; i++) {
      // Crear un array vacío para almacenar los miembros del equipo actual
      const equipo = [];
      // Iterar sobre el número de jugadores por equipo
      for (let j = 0; j < numJugadoresPorEquipo; j++) {
         // Elegir un índice aleatorio entre 0 y la longitud del array restante
         const indiceAleatorio = Math.floor(Math.random() * nombresRestantes.length);
         // Obtener el nombre correspondiente al índice aleatorio
         const nombreAleatorio = nombresRestantes[indiceAleatorio];
         // Añadir el nombre al equipo actual
         equipo.push(nombreAleatorio);
         // Eliminar el nombre del array restante para evitar repeticiones
         nombresRestantes.splice(indiceAleatorio, 1);
      }
      // Añadir el equipo al array de equipos
      equipos.push(equipo);
   }
   // Devolver el array de equipos
   return equipos;
}

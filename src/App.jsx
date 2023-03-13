import React, { useState, useRef } from 'react';
import Equipo from './components/Equipo';
import { generarEquipos } from './components/generarEquipos.js';
import { CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
   const equiposRef = useRef(null);

   const executeScroll = () => {
      const element = document.getElementById('lista-equipos');
      if (element) {
         // 👇 Will scroll smoothly to the top of the next section
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   // Crear un estado para almacenar la lista de nombres ingresados por el usuario
   const [nombres, setNombres] = useState([]);
   // Crear un estado para almacenar el número de jugadores por equipo ingresado por el usuario
   const [numJugadoresPorEquipo, setNumJugadoresPorEquipo] = useState(0);
   // Crear un estado para almacenar el número de equipos ingresado por el usuario
   const [numEquipos, setNumEquipos] = useState(0);
   // Crear un estado para almacenar los equipos generados por la función generarEquipos()
   const [equipos, setEquipos] = useState([]);

   // Definir una función que se ejecute cuando se cambie el valor del input donde se ingresa la lista de nombres

   function handleChangeNombres(event) {
      // Obtener el valor del input
      const valor = event.target.value;
      // Separar los nombres por coma o salto de línea y eliminar los espacios en blanco
      const listaNombres = valor.split(/[\n,]+/).map((nombre) => nombre.trim());
      // Actualizar el estado con la lista de nombres
      setNombres(listaNombres);
   }

   // Definir una función que se ejecute cuando se cambie el valor del input donde se ingresa el número de jugadores por equipo

   function handleChangeNumJugadoresPorEquipo(event) {
      // Obtener el valor del input y convertirlo a número
      const valor = Number(event.target.value);
      // Actualizar el estado con el número de jugadores por equipo
      setNumJugadoresPorEquipo(valor);
   }

   // Definir una función que se ejecute cuando se cambie el valor del input donde se ingresa el número de equipos

   function handleChangeNumEquipos(event) {
      // Obtener el valor del input y convertirlo a número
      const valor = Number(event.target.value);
      // Actualizar el estado con el número de equipos
      setNumEquipos(valor);
   }

   // Definir una función que se ejecute cuando se haga clic en el botón de generar equipos

   function handleClickGenerarEquipos() {
      // Llamar a la función generarEquipos() con los parámetros correspondientes y guardar el resultado en una variable
      const equiposGenerados = generarEquipos(nombres, numJugadoresPorEquipo, numEquipos);
      if (equiposGenerados.length === 0)
         return alert('Complete los campos para generar los equipos');
      // Actualizar el estado con los equipos generados
      setEquipos(equiposGenerados);
      setTimeout(() => {
         executeScroll();
      }, 100);
   }

   // Definir una función que renderice los componentes Equipo según los equipos generados

   function renderizarEquipos() {
      // Si no hay equipos generados, devolver null
      if (equipos.length === 0) return null;

      // Si hay equipos generados, devolver un elemento div que contenga un elemento h1 con el título "EQUIPOS ALEATORIOS" y un elemento ul que contenga tantos elementos li como equipos haya. Cada elemento li debe contener un componente Equipo al que se le pasen como props el nombre y los miembros del equipo correspondiente.
      return (
         <CSSTransition
            nodeRef={equiposRef}
            in={true}
            appear={true}
            timeout={5000}
            classNames="fade"
            enter={true}
            unmountOnExit={true}
         >
            <div ref={equiposRef} id="lista-equipos" className="equipos my-10 divide-y-[10px]">
               {' '}
               <h1 className="text-4xl font-bold text-center text-blue-600 ">EQUIPOS ALEATORIOS</h1>
               <ul className="flex flex-wrap justify-center gap-52 mt-4">
                  {equipos.map((equipo, index) => (
                     <li key={index} className="border border-gray-300 rounded-lg p-2 w-64">
                        <Equipo nombre={`Equipo ${index + 1}`} miembros={equipo} />
                     </li>
                  ))}
               </ul>
            </div>
         </CSSTransition>
      );
   }

   // Devolver un elemento div que contenga todos los elementos HTML y componentes necesarios para la app
   /*  rgb(0, 101, 179); */
   return (
      <div className="app bg-gray-100 min-h-screen ">
         <header className="flex flex-row justify-center pb-3 bg-[#0065b3]">
            <img className="bg-cyan-800 w-4/6 h-36" src="./logo.png" alt="" />
         </header>
         <h1 className="text-5xl mt-3 font-bold text-center text-blue-600">
            GENERADOR DE EQUIPOS ALEATORIOS
         </h1>
         <p className="text-xl mt-6 mx-10">
            Ingresa una lista de nombres separados por coma o salto de línea:
         </p>
         <textarea
            className="w-1/2 h-32 border-2 box-border border-gray-300 rounded-lg p-3 mt-2 mx-10 font-semibold text-justify"
            onChange={handleChangeNombres}
            required
         />
         <p className="text-xl mt-6 mx-10">Ingresa el número de jugadores por equipo:</p>
         <input
            type="number"
            className="w-1/4 border border-gray-300 rounded-lg p-2 mt-2 mx-10"
            onChange={handleChangeNumJugadoresPorEquipo}
            required
         />
         <p className="text-xl mt-6 mx-10">Ingresa el número de equipos:</p>
         <input
            type="number"
            className="w-1/4 border border-gray-300 rounded-lg p-2 mt-2 mx-10"
            onChange={handleChangeNumEquipos}
            required
         />
         <button
            className="w-52 bg-blue-600 text-white font-bold rounded-lg p-2 mt-6 hover:bg-blue-800"
            onClick={handleClickGenerarEquipos}
         >
            Generar Equipos
         </button>
         {renderizarEquipos()}
      </div>
   );
}

export default App;

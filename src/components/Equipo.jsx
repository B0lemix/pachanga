import React, { useState } from 'react';

function Equipo(props) {
   const [showModal, setShowModal] = useState(false);

   function modalEquipo() {
      if (showModal === false) return null;
      return (
         <div className="fixed inset-32 w-64 z-10 p-4 m-auto shadow-lg rounded-2xl bg-gray-800 ">
            <div className="w-full h-full text-center">
               <div className="flex flex-col justify-between h-full">
                  <h2 className="text-xl font-semibold text-white underline underline-offset-8 -mb-20">
                     {props.nombre}
                  </h2>
                  {/* ICON TEAM */}
                  <ul className="flex flex-col ">
                     {props.miembros.map((miembro) => (
                        <li key={miembro} className="flex flex-row">
                           <div className="flex items-center flex-1 select-none">
                              <div className="flex-1 mr-32">
                                 <div className="font-medium dark:text-white">{miembro}</div>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div className="flex items-center justify-between w-full gap-4 mt-8">
                     <button
                        onClick={() => setShowModal(false)}
                        type="button"
                        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                     >
                        Cerrar
                     </button>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   return (
      <>
         <div
            onClick={() => {
               setShowModal(true);
               console.log(showModal);
            }}
            className="container cursor-pointer flex flex-col items-center justify-center w-full mx-auto bg-gray-700 rounded-lg shadow p-4 "
         >
            <h2 className="text-2xl font-semibold leading-6  text-white">{props.nombre}</h2>
            <ul className="flex flex-col divide-y divide">
               {props.miembros.map((miembro) => (
                  <li key={miembro} className="flex flex-row">
                     <div className="flex items-center flex-1 p-4  select-none">
                        <div className="flex mr-16">
                           <div className="font-extralight text-lg text-white">{miembro}</div>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>

         {showModal ? modalEquipo() : null}
      </>
   );
}

export default Equipo;

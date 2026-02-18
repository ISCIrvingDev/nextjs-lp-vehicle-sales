'use client';

import { useEffect } from 'react';

export function PreventRefreshGuard() {
  useEffect(() => {
    // * Advierte al usuario de intentar refrescar la pagina con el boton de "Refresh" del mismo navegador mostrandole un mensaje (el mensaje esta por defecto en el navegador y no se puede modificar)
    // * El problema de este metodo, es que tambien sale el mensaje cuando el usuario va a cerrar la pestaña
    // const preventRefreshHandler = (e: BeforeUnloadEvent) => {
    //   e.preventDefault();
    //   e.returnValue = '';
    // };

    // window.addEventListener('beforeunload', preventRefreshHandler);

    // * Evita refrescar la pagina con "F5" y "Ctrl + R"
    const disableRefreshKeysHandler = (e: KeyboardEvent) => {
      if (
        e.key === 'F5' ||
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', disableRefreshKeysHandler);
    return () => {
      // window.removeEventListener('beforeunload', preventRefreshHandler)
      window.removeEventListener('keydown', disableRefreshKeysHandler)
    };
  }, []);

  return null;
}

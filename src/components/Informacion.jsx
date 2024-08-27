import Teoria from "./Teoria";

const Informacion = () => {
  // AQUI AGREGO LA MAYOR PARTE DE LOGICA

  return (
    <section>
      <h2>Introducción a react</h2>
      <p>
        React es una biblioteca de JavaScript desarrollada por Facebook para
        construir interfaces de usuario. Se destaca por su enfoque en la
        creación de aplicaciones web de una sola <strong>página SPA</strong> y su capacidad para
        manejar la interfaz de manera eficiente mediante el uso de un <span className="parrafoResaltado">DOM
        virtual</span>. React permite a los desarrolladores construir interfaces
        dinámicas y reactivas de forma modular, lo que facilita el desarrollo y
        el mantenimiento de aplicaciones a gran escala.
      </p>
      {/*enviar informacion */}
        <Teoria comision='comision 101i'/>
    </section>
  );
};

export default Informacion;

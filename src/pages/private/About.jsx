import { PrivateLayout } from "../../layout/PrivateLayout"
import { SiRailway } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiSwagger } from "react-icons/si";

export const About = () => {
  return (
    <PrivateLayout title='Acerca de'>
      <div className="text-lg max-w-4xl">
        <p>El Modulo de Evaluación y Perfilamiento fue desarrollado con Spring Framework. Permite a los usuarios gestionar la información de los aspirantes que se inscriben a los programas académicos del Bootcamp. La API utiliza el protocolo HTTP para permitir que los usuarios interactúen con el sistema a través de una serie URL definidos.</p>
        <br />
        <p className="font-bold">Tecnologías:</p>
        <br />
        <div className="grid grid-cols-2">

          <div>
            <p className="font-bold">Back-end:</p>
            <ul className="list-disc ms-6">
              <li>Java 17</li>
              <li>Spring Boot 3.2.1</li>
              <li>Maven como gestor de dependecias</li>
              <li>MySQL y persistencia de datos con JPA e Hibernate.</li>
              <li>Github Actions para integración Continua</li>
              <li>Railway</li>
            </ul>
          </div>

          <div>
            <p className="font-bold">Front-end:</p>
            <ul className="list-disc ms-6">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Vite como gestor de dependecias</li>
            </ul>
          </div>

        </div>
        <br />
        <div className="font-bold">Dependencias:</div>
        <div className="grid grid-cols-2">
          <ul className="list-disc ms-6">
            <li>Spring Data JPA</li>
            <li>Spring Web </li>
            <li>Spring Security</li>
            <li>JUnit</li>
            <li>Swagger </li>
          </ul>
        </div>
        <br />
        <p>La API se encuentra documentada en Swagger y se podrá probar la funcionalidad de cada uno de los Endpoints disponibles.</p>
        <br />
        <div className="flex justify-center gap-3">
          <a className="flex items-center" href="https://evaluacion-y-perfilamiento.up.railway.app" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center bg-secondary hover:bg-primary text-white py-2 px-4 rounded-full">
              <SiRailway /> <div className="ms-3">Railway</div></div></a>

          <a className="flex items-center" href="https://github.com/Alejo-Rojas-R/MakaiaProyectoFinal" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center bg-secondary hover:bg-primary text-white py-2 px-4 rounded-full">
              <FaGithub /> <div className="ms-3">GitHub</div> </div></a>

          <a className="flex items-center" href="https://evaluacion-y-perfilamiento.up.railway.app/swagger-ui/index.html#/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center bg-secondary hover:bg-primary text-white py-2 px-4 rounded-full">
              <SiSwagger /> <div className="ms-3">Swagger</div> </div></a>
        </div>
      </div>
    </PrivateLayout>
  )
}

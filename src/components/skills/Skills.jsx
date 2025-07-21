import React from "react";
import Frontend from "../../assets/front-end3.png";
import Frontend_1 from "../../assets/front-end3.png";
import Frontend_2 from "../../assets/front-end3.webp"; 

export default function Skills() {
  return (
    <div>
      <main id="skills" className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 lg:max-w-5xl lg:grid-cols-2 lg:gap-x-20">

          {/* Título e Subtítulo */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col items-start rounded-lg p-4 sm:bg-transparent"
          >
            <h1 className="text-xl font-semibold text-pink-950 md:text-3xl mt-2">
        FullStack Developer
            </h1>
        <p className="text-sm font-medium text-pink-950 mb-2">
            Skills
            </p>
          </div>

          {/* Imagem */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex justify-center"
          >
            <img
              src={Frontend}
              alt="Frontend"
              className="w-40 h-40 object-cover rounded-lg sm:w-64 sm:h-64 lg:w-80 lg:h-72"
              loading="lazy"
            />
          </div>

          {/* Botão de Download */}
          <div className="flex justify-center lg:justify-start">
            <a href="/CV_Resume.pdf" download>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                type="button"
                className="text-white bg-pink-900 hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-700 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center"
              >
                Download CV
              </button>
            </a>
          </div>

          {/* Parágrafo Descritivo */}
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-sm leading-6 text-pink-950"
          >
            Desenvolvedor Full Stack com experiência em desenvolvimento front-end e back-end e ferramentas de versionamento de código. Experiência em projetos de grande escala, incluindo
            desenvolvimento de aplicações web responsivas e otimização de performance de servidores. Habilidade em trabalhar em equipe e resolver problemas
            de forma eficiente.
          </p>

        </div>
      </main>
    </div>
  );
}

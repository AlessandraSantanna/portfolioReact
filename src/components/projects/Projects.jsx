import React from "react";
import Frontend from "../../assets/bolo.png"
import Frontend_1 from "../../assets/salgados.jpeg"
import Frontend_3 from "../../assets/tarot insight.jpg"
import frontend_2 from "../../assets/ia.jpg"
import Frontend_4 from "../../assets/geradorCV.png"
import Frontend_5 from "../../assets/blog.png"
import { BsGithub } from "react-icons/bs";




const ProjectCard = ({image,title,url,github,description})=> (
    <div className="p-4 md:w-1/3 mb-6">
      
        <div className="rounded-lg  overflow-hidden flex justify-center  bg-white">
    {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="content" className="object-center h-full w-full"/>
        </a>
    ) : (
        <img src={image} alt="content" className="object-center h-full w-full"/>
    )}
</div>          
        <h2 className='text-xl font-medium title-font text-white mt-5 '>{title} </h2>
         <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-300 hover:text-pink-100 inline-flex items-center mt-3"
        >
         
            <a
                className="text-gray-200 mx-2">
                <BsGithub size={24} />                         
            </a>
            GitHub
        </a>

        <p className="leading-relaxed text-base text-gray-300 mt-2">{description}</p>
    </div>
)

export default function Projects() {
  const projects = [
  {title: ' Bolos' , description: 'Tecnologias: React, Vite, Tailwind', image:Frontend,url:"https://docesabor.vercel.app/", github: "https://github.com/AlessandraSantanna/page"},
  {title: 'Loja de Salgados', description: 'Tecnologias: React, Vite, Tailwind', image:Frontend_1, url:"https://lilinda-salgados.netlify.app",github: "https://github.com/DeyvissonRobert/lilinda-salgados"},
  {title: 'Site Tarot', description: 'Tecnologias: HTML,CSS e JavaScript', image:Frontend_3 , url:"https://tarotinsightsheer.vercel.app/", github: "https://github.com/AlessandraSantanna/TarotInsightSher"},
  {title: 'ToDoList', description: 'Tecnologias: HTML,CSS e JavaScript', image:frontend_2 , url:"https://18bitsapi.netlify.app/", github: "https://github.com/AlessandraSantanna/ToDoList"},
  {title: 'Gerador de Currículo', description: 'Tecnologias: React, TypeScript e Next.js', image:Frontend_4 , url:"https://cv-maker-preview.vercel.app/", github: "https://github.com/AlessandraSantanna/cv-maker-koru.git"},
  {title: 'Blog Pessoal', description: 'Tecnologias: React, TypeScript e Next.js', image:Frontend_5 , url:"https://blogale-three.vercel.app/", github: "https://github.com/AlessandraSantanna/blogale.git"},

]
  ;
  return (
   <section id="projects" className="text-gray-200 bg-pink-900 body-font" >
    <div className="container px-3 py-11 mx-auto">
<div data-aos='fade-up' data-aos-delay='300' className="flex flex-col">     
     <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0"> My projects</h1>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 10 pl-0">
              Ao longo da minha trajetória como desenvolvedora, venho construindo projetos que combinam estética, 
              funcionalidade e foco na experiência do usuário. Meu portfólio inclui desde sites institucionais responsivos 
              até aplicações web interativas, com destaque para organização de código,
              uso de boas práticas e atenção aos detalhes visuais. 
            </p>
              
            <a
             href="https://linktree-alessandra.vercel.app/"
             target="_blank"
             rel="noopener noreferrer"
             className="mt-6 block"
            >
              

              <button type='button' data-aos="fade-up" data-aos-delay='300' className="text-pink-900 bg-white
             hover:bg-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-300 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center">
              Linktree
              </button>
              </a>
        </div>
      </div>
      <div data-aos='fade-up' data-aos-delay='400' className="flex flex-wrap sm:m-4  -mx-4 -mb-10 -mt-4">
        {
          projects.map ((project, index)=>(
          <ProjectCard key={index} {...project}/>
          ) )
        }
      </div>
    </div>

   </section>
  )
}
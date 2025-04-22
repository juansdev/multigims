import Link from "next/link"
import {Button} from "@/components/ui/button"
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Code,
  Command,
  Cpu,
  Gamepad2,
  Globe,
  Rocket,
  Smartphone,
  Terminal,
  Users,
  Zap
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      {/* Header */}
      <header className="sticky top-0 py-2 bg-[#0a0a14] z-50">
        <div className={"container flex items-center justify-between"}>
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <div className="flex flex-row items-center justify-center gap-1">
                <Command className={"inline-block text-purple-500"}
                         style={{"strokeWidth": 2, "width": 30, "height": 30}}/>
                <span className={"text-white font-bold text-xl"}>MultiGims</span>
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center font-bold gap-6 text-sm">
            <Link href="/#sobre" className="text-gray-400 hover:text-white">
              Sobre
            </Link>
            <Link href="/#vacantes" className="text-gray-400 hover:text-white">
              Vacantes
            </Link>
            <Link href="/#comunidad" className="text-gray-400 hover:text-white">
              Comunidad
            </Link>
          </nav>
          <Link href={"https://discord.gg/BZMarT7Fcf"} target="_blank" rel="noopener noreferrer"
                className="button p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-bold">Unirse al
            Discord</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id={"inicio"}
               className="lg:px-20 px-10 mx-auto py-12 lg:grid lg:grid-cols-2 gap-8 relative bg-no-repeat bg-cover bg-center background"
               style={{
                 "backgroundImage": "url('/background.png')"
               }}>
        <div className="relative z-10">
          <div className="text-purple-500 text-sm mb-4">
            <div
                className="border bg-violet-900/30 border-purple-500 px-4 py-2 rounded-full flex flex-row items-start justify-start gap-1 md:size-max">
              <Zap className={"inline-block"} width={20} height={20} style={{"strokeWidth": 1}}/>
              <span className={"font-bold"}>El servidor Discord #1 para desarrolladores y programadores tech</span>
            </div>
          </div>
          <div className="text-4xl md:text-6xl font-bold mb-4 flex flex-col gap-2">
            <span
                className="bg-gradient-to-r from-purple-500 via-sky-500 to-blue-500 inline-block text-transparent bg-clip-text">Construye el futuro</span>
            <span>tecnológico con</span>
            <span>nosotros</span>
          </div>
          <div className={"bg-gradient-to-r from-purple-500 via-sky-500 to-blue-500 w-2/6 h-1 rounded my-3"}></div>
          <p className="text-gray-400 text-md mb-6 w-4/5">
            Formamos una comunidad de profesionales tech en un servidor Discord donde colaboramos en proyectos de
            desarrollo web, móvil, gaming, IA y promovemos la innovación, el aprendizaje continuo y el crecimiento
            conjunto.
          </p>
          <div className="flex gap-4 mb-8">
            <Link href={"https://discord.gg/BZMarT7Fcf"}
                  className="button bg-purple-600 hover:bg-purple-700 rounded-md flex items-center gap-2 p-3 flex-row">
              <Rocket style={{"strokeWidth": 3, "width": 20, "height": 20}}/>
              <span className={"text-white font-bold text-lg"}>Unirse ahora</span>
              <ArrowRight style={{"strokeWidth": 2, "width": 20, "height": 20}}/>
            </Link>
            <Link href={"#vacantes"}
                  className="button border-purple-500 border hover:bg-gray-800 rounded-md flex items-center gap-2 p-3 flex-row">
              <span className={"text-purple-500 font-bold text-lg"}>Ver vacantes</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#0a0a14] bg-no-repeat bg-cover bg-center" style={{
                "backgroundImage": "url('/1.png')"
              }}></div>
              <div
                  className="w-8 h-8 rounded-full bg-blue-600 border-2 border-[#0a0a14] bg-no-repeat bg-cover bg-center"
                  style={{
                    "backgroundImage": "url('/2.png')"
                  }}></div>
              <div
                  className="w-8 h-8 rounded-full bg-green-600 border-2 border-[#0a0a14] bg-no-repeat bg-cover bg-center"
                  style={{
                    "backgroundImage": "url('/3.png')"
                  }}></div>
              <div
                  className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0a0a14] bg-no-repeat bg-cover bg-center"
                  style={{
                    "backgroundImage": "url('/4.png')"
                  }}></div>
            </div>
            <div className="text-sm flex flex-row gap-1">
              <span className={"text-gray-400"}>Únete a</span>
              <span className={"text-purple-500 font-bold"}>+100</span>
              <span className={"text-gray-400"}>desarrolladores</span>
            </div>
          </div>
        </div>
        <div
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl overflow-hidden border border-purple-900/50 h-full flex flex-col items-center justify-center">
          <div className={"bg-no-repeat bg-cover bg-center relative h-full rounded"}
               style={{
                 "backgroundImage": "url('/portada.webp')",
                 "width": "98%",
                 "height": "98%"
               }}>
            <div
                className="absolute top-8 left-8 bg-black/70 p-3 rounded-md backdrop-blur-sm flex flex-row gap-2 items-center justify-center border-gray-300 border-2">
              <Code className={"inline-block text-purple-500"}/>
              <span className={"font-bold text-md"}>Desarrollo creativo</span>
            </div>
            <div
                className="absolute bottom-8 right-8 font-bold bg-black/70 text-md p-3 rounded-md backdrop-blur-sm flex flex-row gap-2 items-center justify-center border-gray-300">
              <Terminal className={"inline-block text-sky-500"}/>
              <span className={"font-bold text-md"}>Innovación tecnológica</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20" id={"sobre"}>
        <div className="container mx-auto text-center mb-12 flex flex-col justify-center items-center gap-5">
          <h2 className="text-3xl font-bold">
            Sobre el <span className="text-purple-500">Proyecto</span>
          </h2>
          <div className={"bg-gradient-to-r from-purple-500 via-sky-500 to-blue-500 h-1 rounded"}
               style={{"width": "10%"}}></div>
          <p className="max-w-3xl mx-auto text-gray-400 text-m">
            Un hub de makers y programadores apasionados, que colaboran en múltiples áreas tecnológicas. Nuestra
            comunidad está enfocada en el desarrollo web, móvil, gaming, IA y más, promoviendo la innovación, el
            aprendizaje continuo y el crecimiento conjunto.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-3 gap-8 md:w-4/5">
          {/* Team Member 1 */}
          <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 flex flex-col gap-4">
            <div className={"flex flex-row gap-3"}>
              <div className="w-12 h-12 rounded-full flex-shrink-0 bg-no-repeat bg-cover bg-center" style={{
                "backgroundImage": "url('/10.png')"
              }}></div>
              <div>
                <h3 className="font-bold text-lg">D.John</h3>
                <p className="text-purple-500 text-sm mb-2">@.don.john.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Especialista en gestión y diseño con más de 4 años de experiencia. Apasionado por ofrecer más que una
              simple experiencia a los clientes.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 flex flex-col gap-4">
            <div className={"flex flex-row gap-3"}>
              <div className="w-12 h-12 rounded-full flex-shrink-0 bg-no-repeat bg-cover bg-center" style={{
                "backgroundImage": "url('/20.png')"
              }}></div>
              <div className={"flex flex-col gap-1"}>
                <h3 className="font-bold text-lg">cirocast14</h3>
                <p className="text-purple-500 text-sm mb-2">@cirocast14</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Programador y diseñador con enfoque en Minecraft y desarrollo web. Especialista en plugins y mods que
              transforman la experiencia de juego.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 flex flex-col gap-4">
            <div className={"flex flex-row gap-3"}>
              <div className="w-12 h-12 rounded-full flex-shrink-0 bg-no-repeat bg-cover bg-center" style={{
                "backgroundImage": "url('/30.png')"
              }}></div>
              <div>
                <h3 className="font-bold text-lg">DragønX</h3>
                <p className="text-purple-500 text-sm mb-2">@dragonx72</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Ingeniero de Sistemas con más de 3 años de experiencia en el desarrollo web FrontEnd y BackEnd. Con
              participación en proyectos open-source y privados.
            </p>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="pt-20 pb-5 bg-violet-950" id={"vacantes"}>
        <div className="container mx-auto text-center mb-12 flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl font-bold">
            Vacantes <span className="text-purple-500">Abiertas</span>
          </h2>
          <div className={"bg-gradient-to-r from-purple-500 via-sky-500 to-blue-500 h-1 rounded"}
               style={{"width": "10%"}}></div>
          <p className="max-w-3xl mx-auto text-gray-400 mb-10">
            Únete a nuestra comunidad de creadores y desarrolladores. Buscamos talentos en diversas áreas para colaborar
            y crecer en nuestros proyectos.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Vacancy 1 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Gamepad2 className="text-purple-500" size={24}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Creación de Experiencias (Roblox)</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16}/>
              </Link>
            </div>

            {/* Vacancy 2 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Code className="text-purple-500" size={24}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Diseño</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16}/>
              </Link>
            </div>

            {/* Vacancy 3 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Briefcase className="text-purple-500" size={24}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Edición</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16}/>
              </Link>
            </div>

            {/* Vacancy 4 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Code className="text-purple-500" size={24}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Programación</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16}/>
              </Link>
            </div>

            {/* Vacancy 5 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Users className="text-purple-500" size={24}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Moderación</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16}/>
              </Link>
            </div>

            {/* Vacancy 6 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Cpu className="text-purple-500" size={24}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Plugins (Minecraft)</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16}/>
              </Link>
            </div>

            {/* Vacancy 7 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Zap className="text-purple-500" size={24}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Marketing</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crecer juntos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Create Your Path Section */}
      <section className="bg-violet-950 pb-1">
        <div className="container mx-auto text-center mb-12 flex flex-col justify-center items-center gap-4">
          <div className={"bg-gradient-to-r from-purple-500 via-sky-500 to-blue-500 h-1 rounded"}
               style={{"width": "10%"}}></div>
          <h2 className="text-3xl font-bold">Crea tu propio camino</h2>
          <p className="max-w-3xl mx-auto text-gray-400">No limitamos las habilidades a categorías predefinidas</p>
          <div className="max-w-3xl mx-auto bg-[#0f0f1e] mt-3 p-8 rounded-xl border border-purple-900/30 text-left">
            <h3 className="text-2xl font-bold mb-4">¡Crea y lidera tu propio departamento!</h3>
            <p className="text-gray-400 mb-6">
              Si tienes experiencia en algún área no mencionada, como Base de Datos, Blockchain, AR/VR, DevOps, o
              cualquier otra campo tecnológico, queremos tu experiencia y visión.
            </p>
            <p className="text-gray-400 mb-6">
              En MultiGims valoramos la experiencia única. Propón tu especialidad y lidera a nuestros proyectos
              tecnológicos.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md flex items-center gap-2">
              Presentar propuesta <ChevronRight size={16}/>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pt-20 pb-10 bg-[#080812]" id={"comunidad"}>
        <div className="container mx-auto text-center flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl font-bold">
            Desarrolla <span className="text-purple-500">Proyectos</span> Innovadores
          </h2>
          <div className={"bg-gradient-to-r from-purple-500 via-sky-500 to-blue-500 h-1 rounded"}
               style={{"width": "10%"}}></div>
          <p className="max-w-3xl mx-auto text-gray-400">
            En el servidor de Discord MultiGims, los desarrolladores colaboran en proyectos tecnológicos de cualquier
            tipo.
            Nuestro equipo entrega combina creatividad, innovación y talento en especialistas de diversas áreas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div
                className="bg-gradient-to-br from-purple-900/20 to-purple-600/20 rounded-xl overflow-hidden border border-purple-900/50 h-full flex flex-col items-center justify-center">
              <div className={"bg-no-repeat bg-cover bg-center relative h-full rounded"}
                   style={{
                     "backgroundImage": "url('/proyectos.jpg')",
                     "width": "98%",
                     "height": "98%"
                   }}>
              </div>
            </div>
            <div className="text-left flex flex-col items-start justify-start">
              <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 via-sky-500 to-blue-500 inline-block text-transparent bg-clip-text">Múltiples
                Tecnologías + Tu Creatividad</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Gamepad2 className="text-purple-500" size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Desarrollo de Juegos</h4>
                    <p className="text-gray-400 text-md">
                      Desde Roblox y Minecraft hasta Unity y Unreal Engine, creamos experiencias inmersivas para todos
                      los jugadores.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Cpu className="text-purple-500" size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Inteligencia Artificial</h4>
                    <p className="text-gray-400 text-md">
                      Implementamos tecnologías de IA y machine learning para aplicaciones innovadoras y soluciones
                      eficientes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Globe className="text-purple-500" size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Desarrollo Web</h4>
                    <p className="text-gray-400 text-md">
                      Creamos aplicaciones web con modernas con React, Vue, Angular y tecnologías backend como Node.js,
                      Python y más.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Smartphone className="text-purple-500" size={20}/>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Desarrollo Móvil</h4>
                    <p className="text-gray-400 text-md">
                      Creamos aplicaciones nativas y multiplataforma para iOS y Android utilizando Swift, Kotlin, React
                      Native y Flutter.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href={"https://discord.gg/BZMarT7Fcf"} target="_blank" rel="noopener noreferrer"
                      className="button block bg-purple-600 hover:bg-purple-700 text-white rounded-md text-lg p-4 font-bold">
                  Conoce la comunidad <ChevronRight className={"inline-block"} size={16}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className={"flex flex-col justify-start items-start gap-3"}>
            <div className="flex flex-row items-center justify-center gap-1">
              <Command className={"inline-block text-purple-500"}
                       style={{"strokeWidth": 2, "width": 30, "height": 30}}/>
              <span className={"text-white font-bold text-xl"}>MultiGims</span>
            </div>
            <p className="text-gray-400 text-md">
              Una comunidad Discord de makers apasionados por el desarrollo de juegos, enfocada en proyectos
              colaborativos para Roblox y Minecraft.
            </p>
            <p className="text-gray-500 text-sm italic">
              Este proyecto es colaborativo, no remunerado (en principio), enfocado en el crecimiento conjunto.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Fundadores</h3>
            <div className="flex flex-row flex-wrap items-center justify-start gap-5">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-no-repeat bg-cover bg-center" style={{
                  "backgroundImage": "url('/10.png')"
                }}></div>
                <div className={"flex flex-col items-start justify-center"}>
                  <span>D.John</span>
                  <span className="text-purple-500 text-sm">@.don.john.</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-no-repeat bg-cover bg-center" style={{
                  "backgroundImage": "url('/20.png')"
                }}></div>
                <div className={"flex flex-col items-start justify-center"}>
                  <span>cirocast14</span>
                  <span className="text-purple-500 text-sm">@cirocast14</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-no-repeat bg-cover bg-center" style={{
                  "backgroundImage": "url('/30.png')"
                }}></div>
                <div className={"flex flex-col items-start justify-center"}>
                  <span>DragønX</span>
                  <span className="text-purple-500 text-sm">@dragonx72</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="https://discord.gg/BZMarT7Fcf" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-purple-500" />
                  Servidor Discord
                </Link>
              </li>
              <li>
                <Link href="/#vacantes" className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-purple-500" />
                  Vacantes Disponibles
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-purple-500" />
                  Sobre el Proyecto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date(Date.now()).getFullYear()} MultiGims. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

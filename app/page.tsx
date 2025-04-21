import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Gamepad2, Users, Briefcase, Cpu, Globe, Smartphone, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="text-purple-500 font-bold text-xl">
            <span className="bg-purple-500 text-white px-1">Multi</span>Grims
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#" className="text-gray-300 hover:text-white">
            Sobre
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Vacantes
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Contacto
          </Link>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md">Unirse al Discord</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 grid md:grid-cols-2 gap-8 relative">
        <div className="relative z-10">
          <div className="text-purple-500 text-sm mb-2">
            <span className="border border-purple-500 px-2 py-1 rounded-full">
              El servidor Discord #1 para desarrolladores y programadores tech
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-purple-500">Construye el futuro</span>
            <br />
            tecnológico con
            <br />
            nosotros
          </h1>
          <p className="text-gray-400 mb-6 max-w-md">
            Formamos una comunidad de profesionales tech en un servidor Discord donde colaboramos en proyectos de
            desarrollo web, móvil, gaming, IA y promovemos la innovación, el aprendizaje continuo y el crecimiento
            conjunto.
          </p>
          <div className="flex gap-4 mb-8">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md flex items-center gap-2">
              <Users size={16} />
              Unirse ahora
            </Button>
            <Button variant="outline" className="text-gray-300 border-gray-700 hover:bg-gray-800">
              Ver vacantes
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-[#0a0a14]"></div>
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-[#0a0a14]"></div>
              <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-[#0a0a14]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0a0a14] flex items-center justify-center text-xs">
                +
              </div>
            </div>
            <span className="text-sm text-gray-400">Únete a +100 desarrolladores</span>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-600/20 rounded-xl overflow-hidden border border-purple-900/50">
            <div className="absolute top-2 left-2 bg-black/50 text-xs px-2 py-1 rounded-md backdrop-blur-sm">
              Desarrollo rápido
            </div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Developer workspace"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/50 text-xs px-2 py-1 rounded-md backdrop-blur-sm">
              Innovación tecnológica
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Sobre el <span className="text-purple-500">Proyecto</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            Un hub de makers y programadores apasionados, que colaboran en múltiples áreas tecnológicas. Nuestra
            comunidad está enfocada en el desarrollo web, móvil, gaming, IA y más, promoviendo la innovación, el
            aprendizaje continuo y el crecimiento conjunto.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex-shrink-0"></div>
            <div>
              <h3 className="font-bold text-lg">DJohn</h3>
              <p className="text-purple-500 text-sm mb-2">Fundador</p>
              <p className="text-gray-400 text-sm">
                Especialista en desarrollo de juegos con más de 5 años de experiencia en Roblox y Unity. Apasionado por
                crear experiencias inmersivas y construir comunidades.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex-shrink-0"></div>
            <div>
              <h3 className="font-bold text-lg">chocas114</h3>
              <p className="text-purple-500 text-sm mb-2">Fundador</p>
              <p className="text-gray-400 text-sm">
                Programador y diseñador con enfoque en Minecraft y desarrollo web. Especialista en plugins y mods que
                transforman la experiencia de juego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="py-20 bg-[#080812]">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Vacantes <span className="text-purple-500">Abiertas</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 mb-12">
            Únete a nuestra comunidad de creadores y desarrolladores. Buscamos talentos en diversas áreas para colaborar
            y crecer en nuestros proyectos.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Vacancy 1 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Gamepad2 className="text-purple-500" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Creación de Experiencias (Roblox)</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16} />
              </Link>
            </div>

            {/* Vacancy 2 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Code className="text-purple-500" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Diseño</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16} />
              </Link>
            </div>

            {/* Vacancy 3 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Briefcase className="text-purple-500" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Edición</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16} />
              </Link>
            </div>

            {/* Vacancy 4 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Code className="text-purple-500" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Programación</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16} />
              </Link>
            </div>

            {/* Vacancy 5 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Users className="text-purple-500" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Moderación</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16} />
              </Link>
            </div>

            {/* Vacancy 6 */}
            <div className="bg-[#0f0f1e] p-6 rounded-xl border border-purple-900/30 text-left">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <Cpu className="text-purple-500" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Plugins (Minecraft)</h3>
              <p className="text-gray-400 text-sm mb-4">
                Buscamos personas con experiencia para colaborar y crear juegos.
              </p>
              <Link href="#" className="text-purple-500 text-sm flex items-center">
                Postularme <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Create Your Path Section */}
      <section className="py-20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Crea tu propio camino</h2>
          <p className="max-w-3xl mx-auto text-gray-400 mb-8">No limitamos las habilidades a categorías predefinidas</p>

          <div className="max-w-3xl mx-auto bg-[#0f0f1e] p-8 rounded-xl border border-purple-900/30 text-left mb-8">
            <h3 className="text-2xl font-bold mb-4">¡Crea y lidera tu propio departamento!</h3>
            <p className="text-gray-400 mb-6">
              Si tienes experiencia en algún área no mencionada, como Base de Datos, Blockchain, AR/VR, DevOps, o
              cualquier otra campo tecnológico, queremos tu experiencia y visión.
            </p>
            <p className="text-gray-400 mb-6">
              En MultiGrims valoramos la experiencia única. Propón tu especialidad y lidera a nuestros proyectos
              tecnológicos.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md flex items-center gap-2">
              Presentar propuesta <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#080812]">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Desarrolla <span className="text-purple-500">Proyectos</span> Innovadores
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 mb-12">
            En el servidor de Discord MultiGrims, los desarrolladores colaboran en proyectos tecnológicos de cualquier tipo.
            Nuestro equipo entrega combina creatividad, innovación y talento en especialistas de diversas áreas.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Code editor"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-center">Múltiples Tecnologías + Tu Creatividad</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Gamepad2 className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Desarrollo de Juegos</h4>
                    <p className="text-gray-400 text-sm">
                      Desde Roblox y Minecraft hasta Unity y Unreal Engine, creamos experiencias inmersivas para todos
                      los jugadores.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Cpu className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Inteligencia Artificial</h4>
                    <p className="text-gray-400 text-sm">
                      Implementamos tecnologías de IA y machine learning para aplicaciones innovadoras y soluciones
                      eficientes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Globe className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Desarrollo Web</h4>
                    <p className="text-gray-400 text-sm">
                      Creamos aplicaciones web con modernas con React, Vue, Angular y tecnologías backend como Node.js,
                      Python y más.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Smartphone className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Desarrollo Móvil</h4>
                    <p className="text-gray-400 text-sm">
                      Creamos aplicaciones nativas y multiplataforma para iOS y Android utilizando Swift, Kotlin, React
                      Native y Flutter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md">
                  Conoce la comunidad <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-purple-500 font-bold text-xl">
                <span className="bg-purple-500 text-white px-1">Multi</span>Grims
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Una comunidad Discord de makers apasionados por el desarrollo de juegos, enfocada en proyectos
              colaborativos para Roblox y Minecraft.
            </p>
            <p className="text-gray-500 text-xs">
              Únete a nuestra comunidad, comparte conocimientos y construye tu portafolio.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Fundadores</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600"></div>
                <span>DJohn</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600"></div>
                <span>chocas114</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-purple-500" />
                  Servidor Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-purple-500" />
                  Vacantes Disponibles
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-purple-500" />
                  Sobre el Proyecto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          © 2023 MultiGrims. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

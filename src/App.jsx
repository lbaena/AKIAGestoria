
import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { MapPin, Mail, Phone, CheckCircle, Users, Building, Calculator, ShoppingCart, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"

const services = [
  {
    icon: Building,
    title: "Assessorament Jurídic-Mercantil",
    description: "Gestió integral de la constitució i administració de la teva empresa",
    items: [
      { name: "Tràmits Administratius i Permisos", priceCompany: "40,00 €", priceFreelancer: "35,00 €" },
      { name: "Documentació i Impostos Referents al Transport", priceCompany: "35,00 €", priceFreelancer: "30,00 €" },
      { name: "Contractes Mercantils", priceCompany: "80,00 €", priceFreelancer: "70,00 €" },
      { name: "Assessorament en Litigis amb Clients Proveïdors i Treballadors", priceCompany: "50,00 €", priceFreelancer: "45,00 €" }
    ]
  },
  {
    icon: ShoppingCart,
    title: "Assessorament i Gestió de Compra-venta",
    description: "Control i optimització de les operacions comercials",
    items: [
      { name: "Facturació i Llistat de Factures Emeses i Rebudes", priceCompany: "40,00 €", priceFreelancer: "35,00 €" },
      { name: "Inventari i Control d’Estoc", priceCompany: "40,00 €", priceFreelancer: "35,00 €" },
      { name: "Gestió de Publicitat i Màrqueting - Disseny de Catàlegs", priceCompany: "150,00 €", priceFreelancer: "120,00 €" },
      { name: "Gestió de Publicitat i Màrqueting - Difusió a Xarxes Socials", priceCompany: "80,00 €", priceFreelancer: "70,00 €" },
      { name: "Gestió de Publicitat i Màrqueting - Disseny de Logo i Marca", priceCompany: "100,00 €", priceFreelancer: "80,00 €" },
      { name: "Gestió i Tractament de Bases de Dades Comercials", priceCompany: "60,00 €", priceFreelancer: "50,00 €" }
    ]
  },
  {
    icon: Calculator,
    title: "Assessorament Comptable i Fiscal",
    description: "Control financer i compliment d'obligacions fiscals",
    items: [
      { name: "Comptabilitat Completa de l’Empresa i Liquidació Trimestral i Anual d’Impostos", priceCompany: "100,00 €", priceFreelancer: "40,00 €" },
      { name: "Previsió de Tresoreria i Control de Cobraments/Pagaments pendents", priceCompany: "30,00 €", priceFreelancer: "25,00 €" }
    ]
  },
  {
    icon: Users,
    title: "Assessorament Laboral",
    description: "Gestió completa dels recursos humans i relacions laborals",
    items: [
      { name: "Selecció i Reclutament de Treballadors", priceCompany: "250,00 €", priceFreelancer: "200,00 €" },
      { name: "Contractació i Altes/Baixes a la Seguretat Social", priceCompany: "25,00 €", priceFreelancer: "20,00 €" },
      { name: "Confecció de Nòmines", priceCompany: "8,00 €", priceFreelancer: "7,00 €" },
      { name: "Assessorament Sobre Conveni Col·lectiu", priceCompany: "40,00 €", priceFreelancer: "35,00 €" }
    ]
  }
]

const teamMembers = [
  {
    name: "Joan Ametller Gallart",
    role: "Soci Fundador",
  },
  {
    name: "Nadia Monserrat Arias",
    role: "Sòcia Fundadora",
  },
  {
    name: "Fatima Ikouh Ahabbarouch",
    role: "Sòcia Fundadora",
  },
  {
    name: "Nouh Kaoutar El Barouti",
    role: "Soci Fundador",
  }
]

const packs = [
  {
    name: "Pack Autònom Bàsic",
    description: "Comptabilitat + Facturació + Presentació Impostos",
    price: "100,00 €"
  },
  {
    name: "Pack Pime Essencial",
    description: "Comptabilitat + Facturació + Gestió d’Estoc + Assessorament Laboral",
    price: "120,00 €"
  },
  {
    name: "Pack Premium",
    description: "Tot Inclòs",
    price: "300,00 €"
  }
];

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img  alt="AKIA Gestoria Logo" className="h-20" src="/logo_akia.png" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#qui-som" className="text-gray-700 hover:text-secondary">Qui Som</a>
            <a href="#serveis" className="text-gray-700 hover:text-secondary">Serveis</a>
            <a href="#equip" className="text-gray-700 hover:text-secondary">Equip</a>
            <a href="#contacte" className="text-gray-700 hover:text-secondary">Contacte</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Demana Cita
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-pattern py-32 sm:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6">
                AKIA Gestoria
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Som una Gestoria especialitzada en l'assessorament i administració comercial, 
                oferint serveis professionals i personalitzats a Vilafranca del Penedès.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  className="bg-secondary hover:bg-secondary/90"
                  size="lg"
                  onClick={() => document.getElementById('contacte').scrollIntoView({ behavior: 'smooth' })}
                >
                  Contacta'ns
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('serveis').scrollIntoView({ behavior: 'smooth' })}
                >
                  Els Nostres Serveis
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Qui Som Section */}
        <section id="qui-som" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Qui Som?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Som AKIA SL, un equip de professionals especialitzats en l'administració, 
                gestió i finances. La nostra missió és oferir un servei proper i personalitzat 
                als nostres clients de Vilafranca del Penedès.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="serveis" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Els Nostres Serveis</h2>
              <p className="text-xl text-gray-600">Oferim solucions integrals per al teu negoci</p>
            </motion.div>

            <Tabs defaultValue="juridic" className="w-full">
              <TabsList className="w-full justify-center mb-8">
                <TabsTrigger value="juridic">Jurídic-Mercantil</TabsTrigger>
                <TabsTrigger value="laboral">Laboral</TabsTrigger>
                <TabsTrigger value="compravenda">Compra Venda</TabsTrigger>
                <TabsTrigger value="comptable">Comptable i Fiscal</TabsTrigger>
              </TabsList>

              {services.map((service, index) => (
                  <TabsContent key={index} value={["juridic", "laboral", "compravenda", "comptable"][index]}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <service.icon className="h-8 w-8 text-secondary" />
                          <CardTitle>{service.title}</CardTitle>
                        </div>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.items.map((item, i) => (
                              <li key={i} className="flex flex-col items-start">
                                <div className="flex items-center">
                                  <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-gray-600">{item.name}</span>
                                </div>
                                <div className="ml-7 text-gray-500">
                                  <p>Preu Empresa: {item.priceCompany}</p>
                                  <p>Preu Autònom: {item.priceFreelancer}</p>
                                </div>
                              </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>


        <section id="packs" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary">Els Nostres Packs</h2>
              <p className="text-xl text-gray-600">Oferim solucions integrals per al teu negoci</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packs.map((pack, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-primary hover:bg-primary hover:text-white transition duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2">{pack.name}</h3>
                    <p className="text-gray-600 mb-4">{pack.description}</p>
                    <p className="text-secondary text-2xl font-bold">{pack.price}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equip" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">El Nostre Equip</h2>
              <p className="text-xl text-gray-600">Professionals compromesos amb el teu èxit i el de la teva empresa!</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacte" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Contacta amb Nosaltres</h2>
              <p className="text-xl text-gray-600">Estem aquí per ajudar-te</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Envia'ns un missatge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <MapPin className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Adreça</h3>
                  <p className="text-gray-600">
                    Plaça de la Sardana, 4
                    <br />
                    08720, Vilafranca del Penedès
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <Mail className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Correu</h3>
                  <a href="mailto:gestoria.akia@gmail.com" className="text-gray-600 hover:text-secondary">
                    gestoria.akia@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <Phone className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Telèfon</h3>
                  <a href="tel:+34938901234" className="text-gray-600 hover:text-secondary">
                    +34 938 90 12 34
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AKIA Gestoria</h3>
              <p className="text-gray-400">
                Professionals en assessorament i gestió empresarial
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horari</h3>
              <p className="text-gray-400">
                Dilluns a Divendres
                <br />
                9:00 - 14:00 | 16:00 - 19:00
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/avis-legal" className="text-gray-400 hover:text-white">
                    Avís Legal
                  </a>
                </li>
                <li>
                  <a href="/privacitat" className="text-gray-400 hover:text-white">
                    Política de Privacitat
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-gray-400 hover:text-white">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Segueix-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} AKIA Gestoria. Tots els drets reservats.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function AvisLegal() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo_akia.png" alt="AKIA Gestoria" className="h-12" />
          </div>
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tornar
          </Button>
        </nav>
      </header>

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8">Avís Legal</h1>

            <div className="prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Dades identificatives</h2>
                <p>
                  En compliment amb el deure d'informació recollit en article 10 de la Llei 34/2002, 
                  de 11 de juliol, de Serveis de la Societat de la Informació i del Comerç Electrònic, 
                  a continuació es reflecteixen les següents dades:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Raó social: AKIA SL</li>
                  <li>Domicili: Plaça de la Sardana, 4, 08720 Vilafranca del Penedès</li>
                  <li>NIF: [Número d'Identificació Fiscal]</li>
                  <li>Telèfon: +34 938 90 12 34</li>
                  <li>Correu electrònic: gestoria.akia@gmail.com</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Usuaris</h2>
                <p>
                  L'accés i/o ús d'aquest portal d'AKIA SL atribueix la condició d'USUARI, que accepta, 
                  des de dit accés i/o ús, les Condicions Generals d'Ús aquí reflectides.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Ús del portal</h2>
                <p>
                  www.akiagestoria.com proporciona l'accés a multitud d'informacions, serveis, programes 
                  o dades (en endavant, "els continguts") a Internet pertanyents a AKIA SL o als seus 
                  llicenciants als quals l'USUARI pugui tenir accés.
                </p>
                <p className="mt-4">
                  L'USUARI assumeix la responsabilitat de l'ús del portal. Aquesta responsabilitat 
                  s'estén al registre que fos necessari per accedir a determinats serveis o continguts.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Protecció de dades</h2>
                <p>
                  AKIA SL compleix amb les directrius del Reglament General de Protecció de Dades 
                  (RGPD) i la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals 
                  i garantia dels drets digitals.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Propietat intel·lectual</h2>
                <p>
                  AKIA SL és titular de tots els drets de propietat intel·lectual i industrial de la 
                  seva pàgina web, així com dels elements continguts en la mateixa.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Responsabilitat</h2>
                <p>
                  AKIA SL no es fa responsable dels danys i perjudicis que es puguin derivar de la 
                  interferència, interrupció, absència o deficient funcionament dels serveis i continguts 
                  del portal.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Modificacions</h2>
                <p>
                  AKIA SL es reserva el dret d'efectuar sense previ avís les modificacions que consideri 
                  oportunes en el seu portal, podent canviar, suprimir o afegir tant els continguts i 
                  serveis que es prestin a través del mateix com la forma en la qual aquests apareguin 
                  presentats o localitzats en el seu portal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Legislació aplicable i jurisdicció</h2>
                <p>
                  La relació entre AKIA SL i l'USUARI es regirà per la normativa espanyola vigent i 
                  qualsevol controvèrsia se sotmetrà als Jutjats i tribunals de la ciutat de Vilafranca 
                  del Penedès.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AKIA Gestoria. Tots els drets reservats.
          </p>
        </div>
      </footer>
    </div>
  )
}

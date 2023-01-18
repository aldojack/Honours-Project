import { Atom} from "phosphor-react";
export default function Hero({HeroText}) {
  return (
  <section className=" text-center py-12 text-gray-900 dark:text-white">
    
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The one stop shop to store recipes!</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{HeroText}</p>
        <p>Powered by <Atom size={32} color="#61dbfb" className="inline"/></p>

  </section>
  )
}

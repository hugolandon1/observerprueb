
import Image from "next/image";
import { getCaras } from "@/components/llamadas/llamada";
import CardsAnim from "@/components/cardsmotion/CardsAnim";



const Nosotros = async () => {
  const caras = await getCaras()
  /* console.log(caras) */
  return (
    <div className="">

      <div className="flex pb-10 justify-center items-center flex-wrap">
        <CardsAnim />
      </div>
      <div className="w-full flex justify-center items-center flex-wrap gap-1">
        {caras.map((cara) => (
          <li key={cara.id}>
            <Image src={cara.image} width={400} height={400} alt={cara.title} />
          </li>
        ))}
      </div>
    </div>
  )
}

export default Nosotros
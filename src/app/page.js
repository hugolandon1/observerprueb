import { SvgHome } from "@/components/svg/Svg"
import Image from "next/image"


export default function Home() {
  return(
    <div>
      <video className="w-full" autoPlay muted loop preload="none">
        <source src="https://res.cloudinary.com/dl4tjbaow/video/upload/v1722605079/R3HAB_x_A_Touch_Of_Class_-_All_Around_The_World_La_La_La_Official_Video_bfngmu.mp4"
        type="video/mp4"
        />
      </video>
      <Image className="w-full" src="https://res.cloudinary.com/dl4tjbaow/image/upload/v1722605661/Pantallazo_31-01-2024_12.32.39_fdlapw.png" width={1000} height={1000} alt="fotis"/>
      <Image className="w-full" src="https://res.cloudinary.com/dl4tjbaow/image/upload/v1722605961/mvccopbalenciaga-scaled_omxxhs.jpg" width={1000} height={1000} alt="fotis"/>
      <SvgHome />
    </div>
  )
}
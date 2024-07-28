import Carousel from "@/components/caraousel/Carousel";

const images = [
  "https://iili.io/dxk3Ojj.png",
  "https://iili.io/dxk3eZx.png",
  "https://iili.io/dxk3NTb.png"
]

const Chicos = () => {
    return (
      <div className="flex justify-center items-center">
          <Carousel images={images} />
      </div>
    )
  }
  
  export default Chicos;
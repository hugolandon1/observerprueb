

import Card from '../card/Card'

const fotis = [
    {
        id: 1,
        src: "https://iili.io/doaFns4.png"
    },

    {
        id: 2,
        src: "https://iili.io/dxamzeS.jpg"
    },

    {
        id: 3,
        src: "https://iili.io/dxamhBa.jpg"
    },

    {
        id: 4,
        src: "https://iili.io/dxamjEJ.jpg"
    },

    {
        id: 5,
        src: "https://iili.io/dxamwrv.jpg"
    },

    {
        id: 6,
        src: "https://iili.io/dxap3vV.jpg"
    },

    {
        id: 7,
        src: "https://iili.io/dxk38GV.png"
    },

    {
        id: 8,
        src: "https://iili.io/dxk3vCQ.png"
    },

]

const CardsAnim = () => {
    return (
        <div className='w-full justify-center flex flex-wrap'>
            {fotis.map((foti) => (
                <li key={foti.id}>
                    <Card imag={foti.src} />
                </li>
            ))}
        </div>
    )

}

export default CardsAnim
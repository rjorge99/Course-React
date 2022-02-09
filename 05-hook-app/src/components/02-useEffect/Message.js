import { useEffect, useState } from "react"

export const Message = () => {
    
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    const mouseMove = (e) => {
        setCoords({
            x: e.x,
            y: e.y
        })
    } 

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>x: {x}   y:{y}</p>
        </div>
    )
}

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Wellcome() {
    const {page, setpage} = useContext(GlobalContext)
    if (page === 'Wellcome') {
        return (
            <div>
            Bienvenido a compuFacilito
            <br>
            </br>
            <div>
                Este es el mensaje de bienvenida
            </div>
            <button onClick={()=>setpage('InputData')}>Siguiente</button>
        </div>
    )
}
return <></>
}

export default Wellcome

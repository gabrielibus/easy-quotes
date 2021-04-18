import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function UploadPicture(props) {
    const { page, onDrop, userData, setpage, setuserPicture } = useContext(GlobalContext);
    if (page === 'UploadPicture') {

        return (
            <div>
                Sube el logo de tu empresa
                <br></br>
                <input 
                    type='file'
                    accept='image/*, .pdf'
                    // onInput={(event)=>console.log(event.target.value)}
                    onChange={(event)=>setuserPicture(event.target.files[0])}

                />
                <button onClick={()=>setpage('InputData')} >Atrás</button>
                <button disabled >Siguiente</button>
            </div>
    )
}
return <></>
}

export default UploadPicture;

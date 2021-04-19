import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function UploadPicture(props) {
    const { page, setpage, userPicture, setuserPicture } = useContext(GlobalContext);
    const onClickHandler = () => {
        const data = new FormData() 
        data.append('file', userPicture)
        // put data on backend
    }
    console.log(userPicture)
    
    const onChangeHandler = (event) => {
        const file = event.target.files[0];
        setuserPicture(
            Object.assign(file, {
                preview: URL.createObjectURL(file)})
        )
    };
    const validPicture =()=>{
        if (userPicture && userPicture.preview)  {
            return 1;
    } 
}

    const PreviewImg = () => {
        if (validPicture())  {
            return (
                <img width='200' src={userPicture.preview} alt='algo' />
            )
        } 
            return <></>
        }

    if (page === 'UploadPicture') {
        return (
            <div>
                Sube el logo de tu empresa
                <PreviewImg />
                <br></br>
                <input 
                    type='file'
                    accept='image/*, .pdf'
                    // onInput={(event)=>console.log(event.target.value)}
                    onChange={onChangeHandler}
                />
                <button onClick={onClickHandler} >Subir</button>
                <button onClick={()=>setpage('InputData')} >Atrás</button>
                <button disabled={validPicture() ? 0 : 1} >Siguiente</button>
            </div>
    )
}
return <></>
}

export default UploadPicture;

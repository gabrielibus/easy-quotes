import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function UploadPicture(props) {
    const { page, setpage, userPicture, setuserPicture } = useContext(GlobalContext);
    const onClickHandler = () => {
        const data = new FormData() 
        data.append('file', userPicture)
        // put data on backend
    }
    const onChangeHandler = (event) => {
        const file = event.target.files[0];
        const img = URL.createObjectURL(file)

        
        setuserPicture(img)
    };
    
    const previewImg = () => {
        if (userPicture)  {

            const reader = new FileReader();
        reader.readAsDataURL(userPicture);
        return (
            <img src={reader.result} alt='algo' />
            )
        }
        }

    if (page === 'UploadPicture') {
        return (
            <div>
                Sube el logo de tu empresa
                { 
                previewImg()
                // userPicture
                // ? (<div>
                //         <div>entró</div>
                //         <img src={userPicture} alt='algo' />
                //     </div>
                //   )
                // : <>no entró</>
                }
                <br></br>
                <input 
                    type='file'
                    accept='image/*, .pdf'
                    // onInput={(event)=>console.log(event.target.value)}
                    onChange={onChangeHandler}
                />
                <button onClick={onClickHandler} >Subir</button>
                <button onClick={()=>setpage('InputData')} >Atrás</button>
                <button disabled >Siguiente</button>
            </div>
    )
}
return <></>
}

export default UploadPicture;

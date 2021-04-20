import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import "./Welcome.scss"

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
                preview: URL.createObjectURL(file)
            })
        )
    };
    const validPicture = () => {
        if (userPicture && userPicture.preview) {
            return 1;
        }
    }

    const PreviewImg = () => {
        if (validPicture()) {
            return (
                <img width='200' src={userPicture.preview} alt='algo' />
            )
        }
        return <></>
    }

    const UploadImg = () => {
        if (!userPicture) {
            return (
                <>
                    <label
                        for="inputPic"
                        className="inputPic"
                    >Sube tu logo</label>
                    <input
                        id="inputPic"
                        className="hidden"
                        type='file'
                        accept='image/*, .pdf'
                        onChange={onChangeHandler}
                    />
                </>
            )
        } else {
            return (
                <>
                    <label
                        for="inputPic"
                        className="inputPic marginBottom"
                    >Cambiar</label>
                    <input
                        id="inputPic"
                        className="hidden"
                        type='file'
                        accept='image/*, .pdf'
                        onChange={onChangeHandler}
                    />
                </>
            )
        }
    }

    if (page === 'UploadPicture') {
        return (
            <div className="wrapper flex marginBottom">
                <h2>Sube el logo de tu empresa</h2>
                <div className="marginBottom">
                    <PreviewImg />
                </div>
                <UploadImg />
                <button className="btn gold fixed bottomLeft" onClick={() => setpage('InputData')} >Atrás</button>
                <button className="btn gold fixed bottomRight" disabled={validPicture() ? 0 : 1} >Siguiente</button>
            </div>
        )
    }
    return <></>
}

export default UploadPicture;

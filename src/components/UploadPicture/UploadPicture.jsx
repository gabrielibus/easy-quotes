import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';

function UploadPicture() {
    const { page, setpage, userPicture, setuserPicture } = useContext(GlobalContext);
    // const onClickHandler = () => {
    //     const data = new FormData()
    //     data.append('file', userPicture)
    //     // put data on backend
    // }

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
                <img className="previeWrapper" src={userPicture.preview} alt='algo' />
            )
        }
        return <></>
    }

    const UploadImg = () => {

        return (
            <>
                <label
                    for="inputPic"
                    className="inputPic marginBottom"
                >{!userPicture ? "Sube tu logo" : "Cambiar"}</label>
                <input
                    id="inputPic"
                    className="hidden"
                    type='file'
                    accept='image/*'
                    onChange={onChangeHandler}
                />
            </>
        )
    }


    if (page === 'UploadPicture') {
        return (
            <div className="wrapper flex marginBottom paddingH">
                <div className="fullHeight flex">
                    <h2 className='textCenter marginBottom'>Sube el logo de tu empresa</h2>
                    <div className="marginBottom">
                        <PreviewImg />
                    </div>
                    <UploadImg />
                </div>
                <div className="flex row justifyBetween fullWidth marginTop btnsBottom">
                    <button className="btn gold fixed bottomLeft" onClick={() => setpage('InputData')} >Atrás</button>
                    <button className="btn gold fixed bottomRight" disabled={validPicture() ? 0 : 1} onClick={() => setpage('Summary')} >Siguiente</button>
                </div>
            </div>
        )
    }
    return <></>
}

export default UploadPicture;

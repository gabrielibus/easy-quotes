import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

function Summary() {
    const { page, setpage, userData, userPicture } = useContext(GlobalContext);

    const PreviewImg = () => {
        if (userPicture && userPicture.preview) {
            return (
                <img className="previeWrapperSmall" src={userPicture.preview} alt='algo' />
            )
        }
        return <></>
    }

    if (page === "Summary") {

        return (
            <div className="wrapper flex marginBottom paddingH">
                <div className="">
                    <h2 className="marginBottom">Resumen</h2>
                    <div className="flex row marginBottom alignItemsStart  fullWidth">
                        <div className="flex circleShape fontSmall">1</div>
                        <div className="fullWidth">
                            <div className="flex">
                                <h3 className="fullWidth marginLeft">Logo te tu empresa</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex marginBottom algo">
                        <PreviewImg />
                    </div>
                    <div className="flex row marginBottom alignItemsStart  fullWidth">
                        <div className="flex circleShape fontSmall">2</div>
                        <div className="fullWidth">
                            <div className="flex">
                                <h3 className="fullWidth marginLeft marginBottom">Datos de tu empresa</h3>
                            </div>
                            <div className="paddingLeft marginLeft">
                                <div className="fontSmall">Nombre: {userData.name}</div>
                                <div className="flex row justifyLeft">
                                    <span className="marginZero fontSmall">NIT: {`${userData.nit},`} </span>
                                    <span className="marginZero paddingLeft fontSmall">{`Teléfono: ${userData.phone}`}</span>
                                </div>
                                <div className="fontSmall">Dirección: {userData.address}</div>
                                <div className="fontSmall">Correo: {userData.email}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex row justifyBetween fullWidth marginTop">
                        <button className="btn gold fixed bottomLeft marginTop" onClick={() => setpage('UploadPicture')}>Atrás</button>
                        <button disabled className="btn gold fixed bottomRight marginTop" onClick={() => setpage('Fisnish')}>Finalizar</button>
                    </div>
                </div>
            </div>

        )
    }
    return <></>
}

export default Summary

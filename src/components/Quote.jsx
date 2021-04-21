import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import "./Quote.scss";

function Quote() {
    const { page, setpage, userPicture } = useContext(GlobalContext);
    const PreviewImg = () => {
        // const validPicture = () => {
        //     if (userPicture && userPicture.preview) {
        //         return 1;
        //     }
        // }
        if (userPicture && userPicture.preview) {
            return (
                <img width='200' src={userPicture.preview} alt='algo' />
            )
        }
        return <></>
    }
    if (page === 'Quote') {
        return (
            <div className="wrapper flex marginBottom">
                {/* <h2>Cotización número: 982</h2> */}
                {/* <PreviewImg /> */}
                <div className="">
                    <div className="flex row">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_2X_742921-MCO42126881207_062020-F.webp" className="circle"></img>
                        <div>
                            Planta de poder
                            12v -120 v.
                            20-25 amp
                            $ 489200
                        </div>
                    </div>
                    <div className="palito" ></div>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_781813-MCO43338894820_092020-V.jpg" className="circle circle2"></img>
                    <div className="palito palito2" ></div>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_824825-MCO31544258140_072019-V.jpg" className="circle circle3"></img>
                    <div className="palito palito3" ></div>
                </div>
                <button className="btn gold fixed bottomLeft" onClick={() => setpage('UploadPicture')} >Atrás</button>
                <button className="btn gold fixed bottomRight" disabled={true} onClick={() => setpage('Quote')} >Siguiente</button>
            </div>
        )
    }
    return <></>
}

export default Quote;

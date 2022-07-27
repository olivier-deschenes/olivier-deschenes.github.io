import * as React from 'react';
import './home.css';
import Img from './meeting.svg'
import {Link} from "react-router-dom";

export function Home() {
  return (
    <div className={'home flex justify-center pt-5rem sm:pt-20rem items-start'}>
      <div className={'flex space-x-10 flex-col-reverse sm:flex-row'}>
        <div className={'flex flex-col p-5 sm:p-0'}>
          <div>
            <h1 className={'home-title'}>
              Le Transfert<br />de Connaissance
            </h1>
          </div>
          <div>
            Par Olivier Deschênes, Noemie Dallaire-Nicholas, Olivier Mailhot <br />et Jean-Sébastion Paquette
          </div>
          <div className={'home-links flex mt-5 justify-center space-x-5'}>
            <div className={'bg-blue-500'}><Link to={'/informations'} >Informations</Link></div>
            <div className={'bg-udes-100 text-white'}><Link to={'/questionnaire'}>Questionnaire</Link></div>
          </div>
        </div>
        <div>
          <img className={'home-img'} src={Img} alt=""/>
        </div>
      </div>
    </div>
  );
};

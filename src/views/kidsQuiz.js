import React from 'react';
import data from '../data/data.json';
import { Quiz } from '../components/Quiz';
import { KidsRouters } from '../routers/kidsRouters';

export const kidsQuiz = () =>{
  const onOk = () =>{
    alert("Respuesta Correcta")
  }
  const onError = () =>{
    alert("Respuesta Incorrecta")
    
  }
  return(
    <div>
          <KidsRouters />
    Pagina de Trivias para los Niños   
      <Quiz onOk={onOk} onError={onError} questions={data.questions}/>

    </div>
  )
}

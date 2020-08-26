import React from 'react';
import { GameJump } from '../components/GameJump.jsx'
import { Puzzle } from '../components/Puzzle.jsx'

export const kidsGame = () =>{
  return(
    <div>
    Pagina de Juegos para los Niños  
    <GameJump/> 
    <Puzzle/>      
    </div>
  )
}
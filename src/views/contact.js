import React from 'react';
import '../css/contact.css';
import icono1 from "../Img/Icono_Demo_1.png";

export const ContactPage = () =>{
  return(
    <div className ='view-container'>
           <div class='title2'>
      <h3>¡Gamifícate ahora!</h3> 
     
 
      <div className class='info-contact'>
<p>Nos movemos por una tecnología con sentido, que conecte y desarrolle a las personas y empresas en alcanzar su máximo potencial a nivel global.</p>
</div>
      <div className ='information'>
      <img src={icono1} className='icono1' alt="icono" width='70px'/> 
  <div className='text2'><h4>Contáctanos</h4></div>
   <p className='contact-text'><span class="material-icons">room</span>Santiago, chile</p>
   <p className='contact-text'><span class="material-icons">mail_outline</span>contacto@hootiehoo.cl</p>
   <p className='contact-text'><span class="material-icons">mail_outline</span>ventas@hootiehoo.cl</p>
  </div>
    </div>
    </div>
  )
}
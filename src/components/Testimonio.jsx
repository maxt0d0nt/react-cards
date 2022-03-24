import React from 'react';
import '../stylesheet/Testimonio.css'

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../img/${props.imagen}.jpg`)} alt='Foto Usuario' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre} </strong></p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa} </strong></p>
                <p className='texto-testimonio'> "{props.Testimonio}" </p>
            </div>
        </div>
    );
}

export default Testimonio;



import React from 'react'

export const Saludar = ({name, apellido, edad, userInfo, adiosFn}) => {

    return (
        <div>
            {name && <h3>Name: {name}</h3>}
            {apellido && <h3>Apellido: {apellido}</h3>}
            {edad && <h3>Edad: {edad}</h3>}
            <button onClick={adiosFn}>Click</button>
            <h2>Hola! {userInfo.name} {userInfo.lastName} edad:{userInfo.edad}</h2>
        </div>
    )
}



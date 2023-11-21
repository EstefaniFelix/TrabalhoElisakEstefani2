import React, { useState } from 'react'
function Conver() {
    const [quantReal, setquantReal] = useState('')
    const [valordolar, setvalordolar] = useState('')

    const [conver, setconver] = useState(null);

    const conversao = () => {
        const resultado = quantReal /valordolar
        
        setconver(resultado)
    }
    return (
        <div className='Media'>
            <input type='number' value={nota1} onChange={(e) => setquantReal(e.target.value)} placeholder='Digite a quantidade de reais' /> 
            <input type='number' value={nota2} onChange={(e) => setvalordolar(e.target.value)} placeholder='Digite o valor do Dolar' />
            <button onClick={conver}> Calcular media</button>
            {conver !== null && <p> Resultado: {conver} </p>}
        </div>
    )
}
export default Conver
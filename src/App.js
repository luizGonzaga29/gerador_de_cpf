import { useState } from 'react';
import './App.css';

function App() {

  const [numero, setNumero] = useState('');

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  const gerarCpf = () => {
    while (true) {
      let cpf = [];
      let x = 0;
           
      for (let i = 0; i < 11; i++) {
        x = getRandomIntInclusive(0,9);
        cpf.push(x);
      }
            
      if (validarCpf(cpf)) {
        cpf = cpf.toString().replaceAll(',','');
        setNumero(cpf);
        break;
      }
    }
  }

  const validarCpf = cpf => {

    var peso = 10;
    var d1 = 0;
    var d2 = 0;

    for (let i = 0; i < 9; i++) {
      d1 += cpf[i] * peso;
      peso--;
    }
    
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;

    peso = 11;
    for (let i = 0; i < 10; i++) {
      d2 += cpf[i] * peso;
      peso--;
    }
   
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;

    if (d1 === cpf[9] && d2 === cpf[10]) return true;
    return false;

  }

  return (
    <div className="App">
        <h1>teste</h1>
        <h1 >Gerador de cpf</h1>
        
        
        <input readOnly type="text" name="numero" id="numero" value={numero}/>
        
        <button onClick={gerarCpf} id='btn' type='button'>Gerar cpf</button>
      
      
    </div>
  );
}

export default App;

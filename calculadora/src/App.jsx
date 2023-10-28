import React, {useState} from "react";
import * as S from "./Style"

function App() {
  
  const [primeiroValor, setPrimeiroValor] = useState()
  const [segundoValor, setSegundoValor] = useState()
  const [ resultado, setResultado] = useState()
 

   const capturandoPrimeiroValor = (e) => {
        setPrimeiroValor(Number(e.target.value))
    }

    const capturandoSegundoValor = (e) => {
      setSegundoValor(Number(e.target.value))
    }

    const Soma = () => {
        setResultado(primeiroValor + segundoValor)
        console.log(resultado)
    }

    const Subtracao = ()=> {
      setResultado(primeiroValor - segundoValor)
    }

    const Multiplicacao = () => {
      setResultado(primeiroValor * segundoValor)
    }

    const Divisao = () => {
      setResultado(primeiroValor / segundoValor)
    }

  return (
    <S.Main>
      <S.GlobalStyle/>
      <S.H1>Calculadora React</S.H1>
      <S.Input placeholder="Insira um número" onChange={capturandoPrimeiroValor}/>
      <S.Input placeholder="Insira um número" onChange={capturandoSegundoValor} />
      <section>
      <S.Btn onClick={Soma}>+</S.Btn>
      <S.Btn onClick={Subtracao}>-</S.Btn>
      <S.Btn onClick={Multiplicacao}>x</S.Btn>
      <S.Btn onClick={Divisao}>/</S.Btn>
      </section>
      <S.Resultado>{resultado}</S.Resultado>
    </S.Main>
  )
}
export default App
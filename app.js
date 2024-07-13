
    let btn = document.getElementById('btn')
    let div = document.getElementById('res')
    let div2 = document.getElementById('senhaExibir')
    let senhaP = document.getElementById('senhaExibirP')
    let inputRange = document.getElementById('inputSenha')
    let checkerboxNum = document.getElementById('Numeros')
    let checkerboxMaiu = document.getElementById('letrasMaiu')
    let checkerboxSimb = document.getElementById('Simbolos')
    let senha = ''
    
    function gerarSenha() {
      // let quantidadeDIG = Math.random()                                   
      // quantidadeDIG = quantidadeDIG * 9 + 1 // para não gerar 0
      // quantidadeDIG = Math.round(quantidadeDIG)                               (GERA A QUANTIDADE DE DIGITOS ALEATORIAMENTE.)
      // console.log(`A quantidade de letras da senha é: ${quantidadeDIG}`)

      let quantidadeDIG = document.getElementById('inputSenha').value
      senhaP.innerHTML = quantidadeDIG
      let caracteresPo = `abcdefghijklmnopqrstuvwxyz`
      let caracteresMai = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
      let caracteresSimb = `!@#$%^&*()_+-=[]{}|;:'",.<>?/~`
      let caracteresnums = `0123456789`


      //Caso marcado --
      if (checkerboxNum.checked) {
        caracteresPo += caracteresnums //adiciona números
      }
      if (checkerboxMaiu.checked) {
        caracteresPo += caracteresMai //adiciona letras maiúsculas
      }
      if (checkerboxSimb.checked) {
        caracteresPo += caracteresSimb //adiciona símbolos
      }
      console.log(caracteresPo)

      senha = ''
      console.log(caracteresPo)

      for (let i = 0; i < quantidadeDIG; i++) {
        let caracteresALE = Math.random()
        caracteresALE = caracteresALE * (caracteresPo.length - 1)
        caracteresALE = Math.round(caracteresALE)
        console.log(caracteresALE)

        console.log(caracteresPo[caracteresALE])
        senha += `${caracteresPo[caracteresALE]}`

      }

      div.innerText = senha
    }


    function copyPassword() {
      navigator.clipboard.writeText(senha)
    }


    gerarSenha()
    btn.addEventListener('click', gerarSenha)
    inputRange.addEventListener('input', gerarSenha)
    checkerboxSimb.addEventListener('change', gerarSenha)
    checkerboxNum.addEventListener('change', gerarSenha)
    checkerboxMaiu.addEventListener('change', gerarSenha)

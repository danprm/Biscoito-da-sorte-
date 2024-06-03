//  qunaod você clicar nessa imgaem inteiro ele vai trocar a class 





const gerador = [
  "O sucesso está ao seu alcance, persista!",
  "Grandes desafios trazem grandes recompensas.",
  "Acredite em si mesmo e conquiste o impossível.",
  "A vida é feita de escolhas, faça as melhores.",
  "Sua determinação será recompensada em breve.",
  "O aprendizado é a chave para o crescimento.",
  "Ame hoje como se não houvesse amanhã.",
  "A sorte favorece quem se prepara.",
  "Acredite no seu potencial e voe alto.",
  "A vida é uma aventura, aproveite cada momento."
]

const myControls = {
    screen1: document.querySelector('.screen1'),
    screen2: document.querySelector('.screen2'),
    imgInteiro: document.querySelector('#inteiro'),
    btnBroken: document.querySelector('.screen2 button'),
    frase: document.querySelector('.frase'),
}


const sorte = () => {
    const randoMath = gerador[Math.floor(Math.random() * gerador.length)]

    myControls.frase.innerText = `${randoMath}`
}

const toggleHide = () => {
    myControls.screen1.classList.toggle('hide')
    myControls.screen2.classList.toggle('hide')
    
    sorte()
}

myControls.imgInteiro.addEventListener('click', toggleHide) 

myControls.btnBroken.addEventListener('click', () =>{
    toggleHide()
  
})
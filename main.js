// document.querySelector('button').addEventListener('click', rollDice)

async function rollDice(){
  const url = 'https://api.adviceslip.com/advice';
  const harshTag = "#" 
  
  const data = await fetch (url)
  const response = await data.json()
  // const transforming 
  document.querySelector('h1').innerText = response.slip.advice
  document.querySelector('span').innerText = harshTag + response.slip.id
  document.querySelector('.dice').style.transform = "rotate(360deg)"
}

setInterval(async() => {
  await rollDice()
}, 3500)
document.querySelector('button').addEventListener('click', rollDice)

async function rollDice(){
  const url = 'https://api.adviceslip.com/advice';
  const harshTag = "#" 
  document.querySelector('.dice').style.transform = "(360deg)"
  const data = await fetch (url)
  const response = await data.json()
  document.querySelector('h1').innerText = response.slip.advice
  document.querySelector('span').innerText = harshTag + response.slip.id

  // fetch(url)
  //     .then(res => res.json()) // parse response as JSON
  //     .then(data => {
  //       console.log(data.slip.advice)
  //       document.querySelector('h1').innerText = data.slip.advice
  //       document.querySelector('span').innerText = harshTag + data.slip.id
  //     })
  //     .catch(err => {
  //         console.log(`error ${err}`)
  //     }); 
}

setInterval(async() => {
  await rollDice()
}, 2000)
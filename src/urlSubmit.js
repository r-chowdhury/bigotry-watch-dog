import slurs from "./constants"
const cheerio = require('cheerio')

export default function handleURLSubmit(e) {
  const slurs = process.env.REACT_APP_SLURS
  const slurs_array = slurs.split("-")
  fetch(`https://cors-anywhere.herokuapp.com/${e.target[0].value}`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body)
      // debugger
      const x = $('.thread').text()
      const allWords = x.split(' ')
      const slursInPage = allWords.filter(word => slurs.includes(word.substring(0, 2))|| slurs.includes(word.substring(0, 2)) || slurs.includes(word))
    })
}
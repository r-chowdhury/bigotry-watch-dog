const cheerio = require('cheerio')

export default function handleURLSubmit(e) {
  return fetch(`https://cors-anywhere.herokuapp.com/${e.target[0].value}`)
  .then(response => response.text())
  .then(body => {
    const slurs = process.env.REACT_APP_SLURS
    const slurs_array = slurs.split("-")
    const $ = cheerio.load(body)
    let x = $('.thread').text()
    const allWords = x.split(' ')
    const slursInPage = allWords.filter(word => slurs_array.includes(word.substring(0, 2)) || slurs_array.includes(word))
    return x
  })
}
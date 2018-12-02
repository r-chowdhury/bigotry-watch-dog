// const searchWords = (url) => {
//     const cheerio = require('cheerio')
//     fetch(`${url}`)
//         .then(response => response.text())
//         .then(body => {
//             const $ = cheerio.load(body)
//             const x = $('.thread').text()
//             const allWords = x.split(' ')
//             const slurs = allWords.filter(word => word === "nigger" || word === "faggots" || word === "chink" || word === "gook" || word === "cunt" || word === "kikes" || word === "1488" || word === "Sieg Hiel" || word === "fags" || word === "fag" || word === "niggers")
//             console.log(slurs.length)
//         })
// }

// searchWords(url)

// export default searchWord;
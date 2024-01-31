module.exports = {
    // home: (req, res) => {
    //     fetch('https://rickandmortyapi.com/api/character')
    //         .then(data => data.json())
    //         .then(data => {
    //             // res.json(data.results)
    //             res.render('home.ejs', { characters: data.results })
    //         })
    // },
    home: async (req, res) => {
        let response = await fetch('https://rickandmortyapi.com/api/character', {
            method: 'GET'
        })
        let data = await response.json()

        res.render('home.ejs', { characters: data.results })
    }
}
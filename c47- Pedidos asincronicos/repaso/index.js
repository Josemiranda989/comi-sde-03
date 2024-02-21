window.onload = async () => {
    let container = document.querySelector('#root')
    // console.log(container);

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    const data = await response.json()

    console.log(data.abilities[0].ability.name);

    // name h2
    const nameh2 = document.createElement('h2')
    nameh2.setAttribute('class', 'title')
    nameh2.innerHTML = data.name
    // abilities p
    const abilitesP = document.createElement('p')
    abilitesP.innerHTML = data.abilities[0].ability.name
    // sprites front-def.. img
    const sprite = document.createElement('img')
    sprite.setAttribute('src', data.sprites.front_default)
    sprite.setAttribute('alt', data.sprites.front_default)

    // moves p
    const movesP = document.createElement('p')
    movesP.innerHTML = data.moves[0].move.name

    container.innerHTML = `
        <nav class="navbar"> HOLA SOY EL NAV </nav>
    `
    container.appendChild(nameh2)
    container.appendChild(abilitesP)
    container.appendChild(sprite)
    container.appendChild(movesP)

}

/* window.onload = () => {
    let container = document.querySelector('#root')
    // console.log(container);

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(response => response.json())
        .then(data => {

            // name h2
            const nameh2 = document.createElement('h2')
            nameh2.setAttribute('class', 'title')
            nameh2.innerHTML = data.name
            // abilities p
            const abilitesP = document.createElement('p')
            abilitesP.innerHTML = data.abilities[0].ability.name
            // sprites front-def.. img
            const sprite = document.createElement('img')
            sprite.setAttribute('src', data.sprites.front_default)
            sprite.setAttribute('alt', data.sprites.front_default)

            // moves p
            const movesP = document.createElement('p')
            movesP.innerHTML = data.moves[0].move.name

            container.innerHTML = `
            <nav class="navbar"> NavBar</nav>
        `
            container.appendChild(nameh2)
            container.appendChild(abilitesP)
            container.appendChild(sprite)
            container.appendChild(movesP)
        })
} */
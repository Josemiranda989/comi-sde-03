window.onload = () => {
    let title = document.querySelector('h1')

    let productNameList = document.querySelectorAll('h3')

    for (const productName of productNameList) {
        productName.style.fontSize = '20px'

    }


    console.log(title.innerText)

    let response = confirm('Sos fanatico de los juegos?')
    if (response) {
        title.innerHTML += ' 👑'
        title.style.color = 'tomato'
        if (title.classList.contains('test')) {
            title.classList.remove('test')
        }
    }
    console.log(response);
} 
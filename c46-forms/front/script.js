window.addEventListener('load', () => {

    let form = document.querySelector('form.formulario')


    form.addEventListener('submit', function (event) {
        event.preventDefault()

        let errors = []
        // Evaluar si name tiene > 3 caracteres
        console.log(form.name.value);
        if (form.name.value.length > 3) {
            form.name.classList.add('success')

        } else {
            errors.push('Debes agregar un nombre con más de 3 caracteres')
            form.name.classList.add('error')
        }

        let ulErrors = document.querySelector("ul")
        ulErrors.innerHTML = ''
        ulErrors.classList.toggle('error__list')
        if (errors.length > 0) {
            ulErrors.classList.add('error__list')
            errors.forEach(error => {
                ulErrors.innerHTML += `<li>${error}</li>`

            })
        }
    })

    form.email.addEventListener('focus', function (e) {
        console.log("Estas en el campo email");
    })

    form.email.addEventListener('blur', function (e) {
        console.log("Te fuiste del campo email");
    })

    form.password.addEventListener('input', function (e) {
        console.log(`Live change -> ${e.target.value}`);
    })

    form.password.addEventListener('change', function (e) {
        console.log(`El input cambia cuandos salimos ${e.target.value}`);
    })


})



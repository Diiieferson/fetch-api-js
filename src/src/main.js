const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector(`#${campo}`)) {
      document.querySelector(`#${campo}`).value = result[campo]

    }
  }
}



cep.addEventListener("blur", (e) => {
  let search = cep.value.replace('-', '');
  const option = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, option)
    .then(response => {
      response.json().then(data => {
        showData(data);
      })

    })
    .catch(e => { `Deu erro ${e.message}` })


})
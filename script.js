const urlCliente = 'https://api-deslocamento.herokuapp.com/api/v1/Cliente';
const urlCondutor = 'https://api-deslocamento.herokuapp.com/api/v1/Condutor';
const urlVeiculo = 'https://api-deslocamento.herokuapp.com/api/v1/Veiculo';
const form = document.querySelector('form');


//Adicionando um evento no meu form de envio, esse evento é realizado quando eu clico no botão submit no HTML
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Passando os parâmetros da API, onde ele busca o valor conforme a minha label no HTML
    const data = {
        nome: form.elements.name.value,
        numeroDocumento: form.elements.numeroDocumento.value,
        tipoDocumento: form.elements.tipoDocumento.value,
        logradouro: form.elements.logradouro.value,
        numero: form.elements.numero.value,
        bairro: form.elements.bairro.value,
        cidade: form.elements.cidade.value,
        uf: form.elements.uf.value
    }

    const data2 = {
        nome: form.elements.nomeCondutor.value,
        numeroHabilitacao: form.elements.numeroHabilitacao.value,
        categoriaHabilitacao: form.elements.categoriaHabilitacao.value,
        vencimentoHabilitacao: form.elements.vencimentoHabilitacao.value
    }

    const data3 = {
        placa: form.elements.placa.value,
        marcaModelo: form.elements.marcaModelo.value,
        anoFabricacao: form.elements.anoFabricacao.value,
        kmAtual: form.elements.kmAtual.value
    }



    //Aqui, dou um fetch passando a constante de cada URL declarada em cima, utilizando o método POST, no JSON.stringify eu passo meus objetos convertendo eles para uma String em JSON
    fetch(urlCondutor, {
        method: 'POST',
        dataType: 'json',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data2)
    })
        .then(response => response.json())
        .then(data2 => {
            console.log(data2);
        })

    fetch(urlVeiculo, {
        method: 'POST',
        dataType: 'json',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data3)
    })
        .then(response => response.json())
        .then(data3 => {
            console.log(data3);
        })

    fetch(urlCliente, {
        method: 'POST',
        dataType: 'json',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
})



//Os fethcs abaixo, utilizo para fazer o GET de cada categoria da API
fetch(urlCliente)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
fetch(urlCondutor)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
fetch(urlVeiculo)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
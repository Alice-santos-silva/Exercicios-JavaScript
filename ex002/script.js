function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let img = document.getElementById('foto')
    if(Number(fano.value) == 0 || Number(fano.value) > ano){
        alert('verifique os dados e tente novamente.')
    }
    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value) //*
        let genero = ''
        if(fsex[0].checked){ //se o check está no 0 então é masculino
            genero = 'masculino'
            
        }
        else if(fsex[1].checked){
            genero = 'feminino'
        }
        res.innerHTML = `<p>Detectamos uma pessoa do gênero <strong>${genero}</strong> com <strong>${idade}</strong> anos de idade.</p>`

    }
}

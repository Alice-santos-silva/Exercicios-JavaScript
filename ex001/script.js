function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `<p> Agora são ${hora} horas e ${minuto} minuto(s).</p>`
    if(hora >= 0 && hora < 12){
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#D0A61C'
        //msg.innerHTML +=  'Bom Dia!'
    }
    else if(hora >=12 && hora < 18){
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#C0884F'
    }
    else {
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#835E89'
    }
}

// ##835E89 noite
// #C0884F tarde
// #D0A61C manha
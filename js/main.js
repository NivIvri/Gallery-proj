'use strict'


var projlist =
    [
        {
            id: "1",
            name: "Mine Sweeper",
            title: "Mine Sweeper Game",
            desc: "The board is divided into cells, with mines randomly distributed. To win, you need to open all the cells.",
            url: "https://nivivri.github.io/Final-Delivery/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: "2",
            name: "In-Picture",
            title: "In-Picture Game",
            desc: "The board is divided into cells, with mines randomly distributed. To win, you need to open all the cells.",
            url: "https://nivivri.github.io/Final-Delivery/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: "3",
            name: "Touch Nums",
            title: "Touch Nums",
            desc: "The board is divided into cells, with mines randomly distributed. To win, you need to open all the cells.",
            url: "https://nivivri.github.io/Final-Delivery/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: "4",
            name: "Chess",
            title: "Chess",
            desc: "The board is divided into cells, with mines randomly distributed. To win, you need to open all the cells.",
            url: "https://nivivri.github.io/Final-Delivery/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: "5",
            name: "Todos",
            title: "Todos",
            desc: "The board is divided into cells, with mines randomly distributed. To win, you need to open all the cells.",
            url: "https://nivivri.github.io/Final-Delivery/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: "6",
            name: "Books Shop",
            title: "Books Shop",
            desc: "The board is divided into cells, with mines randomly distributed. To win, you need to open all the cells.",
            url: "https://nivivri.github.io/Final-Delivery/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },

    ]


var strHTML = projlist.map(function (proj) {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    
     <a class="portfolio-link" data-toggle="modal"  href="#portfolioModal${proj.id}" onclick="renderModal(${proj.id})">>
     <div class="portfolio-hover">
     <div class="portfolio-hover-content">
     <i class="fa fa-plus fa-3x"></i>
     </div>
     </div>
     <img class="img-fluid" src="img/portfolio/05-thumbnail.jpg" >
     </a>
     <div class="portfolio-caption">
     <h4>${proj.name}</h4>
     <p class="text-muted">${proj.title}</p>
     </div>
    </div>
    `
}).join('')
document.querySelector('.row.table').innerHTML = strHTML

function renderModal(projId) {
    document.querySelector('.portfolio-modal').id = `portfolioModal${projId}`
    var currProj = getPorjById(projId)
    document.querySelector('.modal-body h2').innerText = currProj.name
    document.querySelector('p.item-intro').innerText = currProj.title
    document.querySelector('p.desc').innerText = currProj.desc
    var a = document.querySelector('p.url').innerHTML = ` <a href="${currProj.url}">link to the game</a>`
    document.querySelector('.img-model').innerHTML = `<img class="img-fluid d-block mx-auto" src="img/portfolio/0${currProj.id}-full.jpg" alt="">`
}



function getPorjById(projId) {
    var proj = projlist.find(function (currProj) {
        return (+currProj.id === +projId)
    })
    return proj
}


function openModal() {
    document.querySelector('.modal').style.display = 'block';
}


function onSubmit() {
    
    var elEmail = (document.querySelector('[name=email]').value)
    var elSubject = (document.querySelector('[name=subject]').value)
    var elMessage = (document.querySelector('[name=message]').value)
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${elEmail}&su=${elSubject}&body=${elMessage}`
}



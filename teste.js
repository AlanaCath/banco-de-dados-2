const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'admin', {
    host: 'localhost',
    dialect: "mysql"
});

const atividades = sequelize.define('Carrara', {
    comentarios: {
        type: Sequelize.STRING
    },
    likes: {
        type: Sequelize.TEXT
    },
    interaçoes: {
        type: Sequelize.TEXT
    },
    tempo: {
        type: Sequelize.TEXT
    },
    porta: {
        type: Sequelize.TEXT
    }
});/*
atividades.sync({
    force: true
}); */

atividades.create({
    comentarios: "Ero contento e guardavo",
    likes: "sentivo l'aria fresca sul viso",
    atividades: "Che bella la mattina!",
    tempo: "Poi ho ricordato la sera",
    porta: "e rende tutto rosso"
});

const series = sequelize.define('Carrara', {
    a: {
        type: Sequelize.STRING
    },
    b: {
        type: Sequelize.TEXT
    },
    c: {
        type: Sequelize.TEXT
    },
    d: {
        type: Sequelize.TEXT
    },
    e: {
        type: Sequelize.TEXT
    }
}); /*
series.sync({
    force: true
}); */

series.create({
    a: "Ero contento e guardavo il cielo questa mattina",
    b: "sentivo l'aria fresca sul viso, quando il Sole è ancora soave e ho detto",
    c: "Che bella la mattina! Sarà il colore della luce",
    d: "Poi ho ricordato la sera, quando dopo",
    e: "e rende tutto rosso: il cielo diventa rosso"
});

const usuarios = sequelize.define('Carrara', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.TEXT
    }
}); /*
usuarios.sync({
    force: true
})*/

usuarios.create({
    nome: "Ero contento e guardavo",
    email: "sentivo l'aria fresca sul viso"
   
});






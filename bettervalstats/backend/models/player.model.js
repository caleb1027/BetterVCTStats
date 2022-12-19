const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String, required: true,
    },
    team: {
        type: String, required: true,
    },
    rounds: {
        type: Number, required: true,
    },
    acs: {
        type: Number, required: true,
    },
    kpr: {
        type: Number, required: true,
    },
    apr: {
        type: Number, required: true,
    },
    kd: {
        type: Number, required: true,
    },
    kast: {
        type: Number, required: true,
    },
    adr: {
        type: Number, required: true,
    },
    hsp: {
        type: Number, required: true,
    },
    fkpr: {
        type: Number, required: true,
    },
    fdpr: {
        type: Number, required: true,
    },
    fkfd: {
        type: Number, required: true,
    },
    clutch: {
        type: Number, required: true,
    },
})


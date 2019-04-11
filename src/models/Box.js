//Usa Javascript para lidar com os dados vindos do mongodb(database)
const mongoose = require('mongoose');

const Box = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File"}]
    },
    {
        //Cria um campo chamado createdAt e outro chamado updatedAt
        timestamps: true
    }
);

module.exports = mongoose.model('Box', Box)

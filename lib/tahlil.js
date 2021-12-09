const { data: tahlil } = require('./doa-tahlil.json')

class Tahlil {
    static getAllDoa(req, res) {
        const data = tahlil.map(item => {
            const doa = { ...item }
            return doa
        })
        return res.status(200).send({
            code: 200,
            status: 'OK.',
            creator: 'I T S U K I',
            message: 'Berhasil Mengambil Semua Doa Tahlil.',
            data
        })
    }

    static getDoa(req, res) {
        const { doa } = req.params
        const data = tahlil[doa - 1]
        if (data) {
            return res.status(200).send({
                code: 200,
                status: 'OK.',
                creator: 'I T S U K I',
                message: 'Berhasil Mengambil Doa tahlil.',
                data
            })
        }
        return res.status(404).send({
            code: 404,
            status: 'Not Found.',
            creator: 'I T S U K I',
            message: `Doa Tahlil "${tahlil}" Tidak Ditemukan`,
            data: {}
        })
    }
}

module.exports = Tahlil
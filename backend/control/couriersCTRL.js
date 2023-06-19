import Courier from "../models/couriers.js";

export default class CourierCTRL {


    getCourier(req, res) {
        res.type('application/json');

        if (req.method === "GET") {
            var courier = new Courier();
            courier.consult('').then((couriersList) => {
                res.status(200).json(couriersList);
            })
                .catch((error) => {
                    res.status(500).json({
                        status: false,
                        message: error.message
                    })
                })
        }
        else {

        }
    }

    includeCourier(req, res) {
        res.type('application/json');

        if (req.method === 'POST' && req.is('application/json')) {
            var { code, name, disponibility, availability, vehicle, phone } = req.body;

            if ((name && disponibility && availability && vehicle && phone) != null) {
                var courier = new Courier(code, name, disponibility, availability, vehicle, phone);
                courier.insert().then(() => {
                    res.status(200).json({
                        status: true,
                        cod: courier.code,
                        message: `Entregador ${name} salvo com sucesso com ID: ${courier.code}`
                    })
                })
            } else {
                res.status(400).json({
                    status: false,
                    message: 'Informe todos os dados e em formato JSON!'
                })
            }

        } else {
            res.status(400).json({
                status: false,
                message: 'Método não permitido consulte a doc da API'
            })
        }
    }

    updateCourier(req, res) {
        res.type('application/json');

        if (req.method === 'PUT' && req.is('application/json')) {

            var { code, name, disponibility, availability, vehicle, phone } = req.body;

            if ((code, name, disponibility, availability, vehicle, phone) != null) {

                var courier = new Courier(code, name, disponibility, availability, vehicle, phone);
                courier.update().then(() => {
                    res.status(200).json({
                        status: true,
                        message: `Entregador ${name} atualizado com sucesso no ID: ${code}`
                    })
                }).catch((error) => {
                    res.status(500).json({
                        satus: false,
                        message: error.message
                    })
                })

            } else {
                res.status(400).json({
                    status: false,
                    message: 'Informe todos os dados e em formato JSON!'
                })
            }

        }
        else {
            res.status(400).json({
                status: false,
                message: 'Método não permitido consulte a doc da API'
            })
        }
    }

    deleteCourier(req, res) {
        res.type('application/json');

        if (req.method === 'DELETE' && req.is('application/json')) {

            var { code, name } = req.body;

            if (code) {
                var courier = new Courier(code);
                courier.delete().then(() => {
                    res.status(200).json({
                        status: true,
                        message: `Entregador ${name} ID: ${code} excluído com sucesso!`
                    })
                }).catch((error) => {
                    res.status(500).json({
                        status: false,
                        message: error.message
                    })
                })
            } else {
                res.status(400).json({
                    status: false,
                    message: 'Método não permitido consulte a doc da API'
                })
            }

        } else {
            res.status(400).json({
                status: false,
                message: 'Método não permitido consulte a doc da API'
            })
        }
    }

}

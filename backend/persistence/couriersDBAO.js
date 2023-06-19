import Courier from "../models/couriers.js";
import createConnectionBD from "./connectionBD.js";

export default class CourierDBAO {

    async insertBD(courier) {

        if (courier instanceof Courier) {

            let connect = await createConnectionBD();
            let sqlCode = 'INSERT INTO couriers (name, disponibility, availability, vehicle, phone) VALUES (?,?,?,?,?);';
            let values = [courier['name'], courier['disponibility'], courier.availability, courier['vehicle'], courier['phone']];
            let result = await connect.query(sqlCode, values);
            return result[0].insertId;

        }

    }

    async consultBD() {

        try {
            let connect = await createConnectionBD();
            let sqlCode = 'SELECT * FROM couriers';
            var list = [];
            const result = await connect.query(sqlCode);
            result[0].forEach(element => {
                let courier = new Courier(element['id'], element['name'], element['disponibility'], element['availability'], element['vehicle'], element['phone']);
                list.push(courier);
            });
            return list
        }
        catch (error) {
            console.log(error.message)
            return error.message;
        }

    }

    async updateBD(courier) {

        try {
            let connect = await createConnectionBD();
            let sqlCode = 'UPDATE couriers SET  name = ?, disponibility = ?, availability = ?, vehicle = ?, phone = ? WHERE id = ?;';
            let values = [courier.name, courier.disponibility, courier.availability , courier.vehicle, courier.phone, courier.code]
            connect.query(sqlCode, values)
        } catch (error) {
            console.log(error.message);
            return error.message;
        }

    }

    async deleteBD(id) {

        try {
            let connect = await createConnectionBD();
            let sqlCode = 'DELETE FROM couriers WHERE id = ?;';
            await connect.query(sqlCode, id);
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

}

import { Router } from "express";
import CourierCTRL from "../control/couriersCTRL.js";

const routes = Router();
const courierCTRL = new CourierCTRL();

routes.post('/', courierCTRL.includeCourier)
    .get('/', courierCTRL.getCourier)
    .put('/', courierCTRL.updateCourier)
    .delete('/', courierCTRL.deleteCourier);


export default routes;
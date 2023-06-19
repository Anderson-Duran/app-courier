import CourierDBAO from "../persistence/couriersDBAO.js";

export default class Courier {

    #code;
    #name;
    #disponibility;
    #vehicle;
    #phone;
    #availability;

    constructor(id, name, disponibility, availability, vehicle, phone) {
        this.#code = id;
        this.#name = name;
        this.#disponibility = disponibility;
        this.#vehicle = vehicle;
        this.#phone = phone;
        this.#availability = availability;
    }

    get code() {
        return this.#code;
    }

    set code(newCode) {
        this.#code = newCode;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get disponibility() {
        return this.#disponibility;
    }

    set disponibility(newDisponibility) {
        this.#disponibility = newDisponibility;
    }

    get availability() {
        return this.#availability;
    }

    set availability(newAvailability) {
        this.#availability = newAvailability;
    }

    get vehicle() {
        return this.#vehicle;
    }

    set vehicle(newVehicle) {
        this.#vehicle = newVehicle;
    }

    get phone() {
        return this.#phone;
    }

    set phone(newPhone) {
        this.#phone = newPhone;
    }

    toJSON() {
        return (
            {
                "code": this.#code,
                "name": this.#name,
                "disponibility": this.#disponibility,
                "vehicle": this.#vehicle,
                "phone": this.#phone,
                "availability": this.#availability
            }
        )
    }

    async insert() {
        const courierDBAO = new CourierDBAO();
        this.#code = await courierDBAO.insertBD(this);
    }

    async update() {
        const courierDBAO = new CourierDBAO();
        return await courierDBAO.updateBD(this);
    }

    async delete() {
        const courierDBAO = new CourierDBAO();
        return await courierDBAO.deleteBD(this.#code, this.#name);
    }
    async consult(term) {
        const courierDBAO = new CourierDBAO();
        return await courierDBAO.consultBD(term);
    }
}

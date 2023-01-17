class tollPlaza {
    static no = 0;
    constructor(number, type, fee, date) {
        this.no = ++tollPlaza.no;
        this.number = number;
        this.type = type;
        this.fee = fee;
        this.date = date;
    }
}

class tollData {

    vehicleFee = { "Car": 40, "Bike": 20, "Bus": 60, "Truck": 80 };

    tollPlazaDetail = [];

    pushData = (details) => this.tollPlazaDetail.push(details);

    getAllData = () => this.tollPlazaDetail;

}

const obj = new tollData();

obj.pushData(new tollPlaza("KA04M1235", "Car", 40, new Date(2022, 12, 12)));

console.log(obj.getAllData());
console.table(obj.tollPlazaDetail)
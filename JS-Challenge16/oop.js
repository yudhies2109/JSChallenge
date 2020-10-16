class Car {
    constructor(door, seat, year, warranty, color, fuel, meachine, Brandtyre) {
        this.door = door;
        this.seat = seat;
        this.year = year;
        this.waranty = waranty;
        this.color = color;
        this.fuel = fuel;
        this.meachine = meachine;
        this.Brandtyre = new Tyre(Brandtyre);
    }
    ComeForward() { }
    Brake() { }
    BackOff() { }
}

class Tyre(){

}

class CarFactory {

}
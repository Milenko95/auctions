export class Car {
    name: string;
    image: string;
    firstRegistration: string;
    mileage: number;
    fuelType: string;
    transmission: string;
    highestBid: number;
    remainingTime: any;
    amIHighestBidder: boolean;

    constructor(obj?: any) {
        this.name = obj && obj.label || null; 
        this.image = obj && obj.associatedVehicle.vehicleImages[0].url || null;
        this.firstRegistration = obj && obj.associatedVehicle.ez || null;
        this.mileage = obj && obj.associatedVehicle.mileageInKm || null;
        this.fuelType = obj && obj.associatedVehicle.fuelType || null;
        this.transmission = obj && obj.associatedVehicle.transmission || null;
        this.highestBid = obj && obj.currentHighestBidValue || null;
        this.remainingTime = obj && obj.remainingTimeInSeconds || null;
       this.amIHighestBidder = obj && obj.amIHighestBidder || false;
    }

}
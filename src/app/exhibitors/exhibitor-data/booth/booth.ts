
export class Booth {
    previousYearsExhibited: string[];
    specialRequests: string;
    hallPlacement: string;
    assignedBoothsDispalyed: string;
    assignedBooth: string;
    assignedStatus: string;
    paymentTerms: string;
    boothTypes: BoothType[];
    boothRate: BoothRate;
    boothNotes: string;
    payment: string;
    
    // returns the cost of all boths selected
    getTotalBoothCost(): number {
        let sum: number = 0;
        this.boothTypes.forEach(element => {
            sum += this.boothRate.getBoothRate(element);
        });
        return sum;
    }
}

class BoothRate {
    boothRates: number[] = [
        100,    // 10x10 booth
        150,    // 10x10 corner
        50,     // 8x10 booth
        75,     // 8x10 corner
        200,    // custome
    ]
    // returns the cost of the specific booth type
    getBoothRate(boothType: BoothType): number {
        return this.boothRates[boothType];
    }
}

enum BoothType {
    Booth10x10,
    Corner10x10,
    Booth8x10,
    Corner8x10,
    Custome,
}
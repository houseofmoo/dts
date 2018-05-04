export class Booth {
    boothType: BoothType;
    boothNumber: string;
}

export enum BoothType {
    Booth_10x10,
    Corner_10x10,
    Booth_8x10,
    Corner_8x10,
    Custom
}
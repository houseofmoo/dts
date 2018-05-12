export class BoothByYear {
  year: Date;
  booths: Booth[];
}

export class Booth {
  boothType: BoothType;
  boothNumber: string;
}

export enum BoothType {
  Booth_10x10 = 0,
  Corner_10x10 = 1,
  Booth_8x10 = 2,
  Corner_8x10 = 3,
  Custom = 4
}

export class BoothRates {
  rates: number[];
}

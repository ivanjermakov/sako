export enum File {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
  G = 7,
  H = 8,
}

export class Square {

  file: File
  row: number

  constructor(file: File, row: number) {
    this.file = file
    this.row = row
  }

}
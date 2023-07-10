import { CellValue, Section } from 'mitosis-excel-templater';

export type BalanceSheetDataType = {
  year: CellValue,
  genDate: Date,
  companyName: CellValue,
  website: CellValue,
  assets: Section<{
    tableTitle: CellValue,
    tableContent: Section<{
      prevYear: number,
      curYear: number,
      name: CellValue
    }>,
    totalTitle: CellValue
  }>,
  liabilities: Section<{
    tableTitle: CellValue,
    tableContent: Section<{
      prevYear: number,
      curYear: number,
      name: CellValue
    }>,
    totalTitle: CellValue
  }>
};
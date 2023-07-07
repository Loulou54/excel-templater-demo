import { CellValue } from 'exceljs';
import { Section } from 'mitosis-excel-templater';

export type EstimateDataType = {
  genDate?: Date,
  estimateNo?: CellValue,
  companyName?: CellValue,
  clientName?: CellValue,
  shippingCompanyName?: CellValue,
  street?: CellValue,
  clientCompanyName?: CellValue,
  shippingAddress?: CellValue,
  postCode?: CellValue,
  city?: CellValue,
  clientAddress?: CellValue,
  phone?: CellValue,
  clientPhone?: CellValue,
  email?: CellValue,
  clientEmail?: CellValue,
  website?: CellValue,
  detail?: Section<{
    qty?: number,
    price?: number,
    description?: CellValue
  }>,
  discount?: number,
  remarks?: CellValue,
  taxRatePercent?: number,
  shippingCosts?: number
};
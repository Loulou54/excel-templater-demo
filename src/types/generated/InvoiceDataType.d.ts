import { CellValue } from 'exceljs';
import { Section } from 'excel-templater';

export type InvoiceDataType = {
  companyName: CellValue,
  genDate: Date,
  companySlogan: CellValue,
  invoiceNo: CellValue,
  website: CellValue,
  customerId: CellValue,
  clientName: CellValue,
  clientCompanyName: CellValue,
  clientStreet: CellValue,
  clientPostCode: CellValue,
  clientCity: CellValue,
  clientEmail: CellValue,
  sales: Section<{
    salesPerson: CellValue,
    job: CellValue,
    paymentTerms: CellValue,
    dueDate: Date
  }>,
  detail: Section<{
    qty: CellValue,
    description: CellValue,
    price: CellValue
  }>,
  taxRatePercent: CellValue,
  street: CellValue,
  postCode: CellValue,
  city: CellValue,
  phone: CellValue,
  email: CellValue
};
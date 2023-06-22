const { ExcelTemplater } = require('excel-templater');

const balanceSheetTemplater = new ExcelTemplater('public/balance-sheet-template.xlsx');
balanceSheetTemplater.generateTemplateDataTypeFile('src/types/generated/BalanceSheetDataType');

const estimateTemplater = new ExcelTemplater('public/estimate-template.xlsx');
estimateTemplater.generateTemplateDataTypeFile('src/types/generated/EstimateDataType', true);

const invoiceTemplater = new ExcelTemplater('public/invoice-template.xlsx');
invoiceTemplater.generateTemplateDataTypeFile('src/types/generated/InvoiceDataType');
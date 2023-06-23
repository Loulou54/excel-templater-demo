import { ExampleTemplate } from "src/types/demo-types";
import { BalanceSheetDataType } from "src/types/generated/BalanceSheetDataType";
import { EstimateDataType } from "src/types/generated/EstimateDataType";
import { InvoiceDataType } from "src/types/generated/InvoiceDataType";

export const toJSON = (data: any) => (JSON.stringify(data, null, 4));

const genDate = new Date();

const balanceSheetData: BalanceSheetDataType = {
  genDate,
  year: genDate.getUTCFullYear() - 1, // the report is about last year
  companyName: 'Louis Workplace',
  website: 'louisworkplace.net',
  assets: [
    {
      tableTitle: 'Current assets:',
      tableContent: [
        {name: 'Cash', prevYear: 24561, curYear: 32628},
        {name: 'Investments', prevYear: 16240, curYear: 23650},
        {name: 'Inventories', prevYear: 12300, curYear: 11200},
        {name: 'Accounts receivable', prevYear: 3400, curYear: 4265},
        {name: 'Pre-paid expenses', prevYear: 300, curYear: 455},
        {name: 'Other', prevYear: 1250, curYear: 1130}
      ],
      totalTitle: 'Total current assets'
    },
    {
      tableTitle: 'Fixed assets:',
      tableContent: [
        {name: 'Property and equipment', prevYear: 155000, curYear: 174000},
        {name: 'Leasehold improvements', prevYear: 11200, curYear: 13200},
        {name: 'Equity and other investments', prevYear: 14500, curYear: 14500},
        {name: 'Less accumulated depreciation', prevYear: 3500, curYear: 4200}
      ],
      totalTitle: 'Total fixed assets'
    },
    {
      tableTitle: 'Other assets:',
      tableContent: [
        {name: 'Goodwill', prevYear: 2340, curYear: 2120}
      ],
      totalTitle: 'Total other assets'
    }
  ],
  liabilities: [
    {
      tableTitle: 'Current liabilities:',
      tableContent: [
        {name: 'Accounts payable', prevYear: 11200, curYear: 9650},
        {name: 'Accrued wages', prevYear: 12000, curYear: 23400},
        {name: 'Accrued compensation', prevYear: 6500, curYear: 8400},
        {name: 'Income taxes payable', prevYear: 8250, curYear: 9630},
        {name: 'Unearned revenue', prevYear: 0, curYear: 1450},
        {name: 'Other', prevYear: 1250, curYear: 1935}
      ],
      totalTitle: 'Total current liabilities'
    },
    {
      tableTitle: 'Long-term liabilities:',
      tableContent: [
        {name: 'Mortgage payable', prevYear: 115650, curYear: 93250}
      ],
      totalTitle: 'Total long-term liabilities'
    },
    {
      tableTitle: 'Owner\'s equity:',
      tableContent: [
        {name: 'Investment capital', prevYear: 32000, curYear: 32000},
        {name: 'Accumulated retained earnings', prevYear: 1200, curYear: 0}
      ],
      totalTitle: 'Total owner\'s equity'
    }
  ]
};

const estimateData: EstimateDataType = {
  genDate,
  estimateNo: 2023000145,
  companyName: 'Louis Workplace',
  street: '4 Rue des Clercs',
  postCode: '57000',
  city: 'Metz',
  phone: {
    text: '+33 3 87 55 88 36',
    hyperlink: 'tel:+33387558836'
  },
  email: {
    text: 'contact@louisworkplace.net',
    hyperlink: 'mailto:contact@louisworkplace.net'
  },
  website: {
    text: 'louisworkplace.net',
    hyperlink: 'https://louisworkplace.net'
  },
  clientName: 'Martin Dubois',
  clientCompanyName: 'La société du futur',
  clientAddress: '3 Rue de la Congrégation, 2931 Luxembourg',
  clientEmail: {
    text: 'contact@societe-du-futur.turfu',
    hyperlink: 'mailto:contact@societe-du-futur.turfu'
  },
  shippingAddress: '3 Rue de la Congrégation, 2931 Luxembourg',
  shippingCompanyName: 'Chronopost',
  detail: [
    {
      description: 'Excel Templater yearly license',
      qty: 20,
      price: 200
    },
    {
      description: 'RedUrl yearly license',
      qty: 20,
      price: 120
    },
    {
      description: 'IQL yearly license',
      qty: 20,
      price: 400
    },
    {
      description: 'Integration support daily rate',
      qty: 3,
      price: 400
    },
    {
      description: 'Excel Templater custom functionality',
      qty: 1,
      price: 1350
    }
  ],
  remarks: '- You are elligible to a discount for ordering several of our products!\n- Changes in the specification of the custom functionality could cause additional billing at the price of the support daily rate.',
  discount: 1200,
  taxRatePercent: .2,
  shippingCosts: 0
};

const invoiceData: InvoiceDataType = {
  genDate,
  invoiceNo: 2023000145,
  customerId: '000124',
  companyName: 'Louis Workplace',
  companySlogan: 'Where ingenuity comes from.',
  website: {
    text: 'louisworkplace.net',
    hyperlink: 'https://louisworkplace.net'
  },
  street: '4 Rue des Clercs',
  postCode: '57000',
  city: 'Metz',
  phone: {
    text: '+33 3 87 55 88 36',
    hyperlink: 'tel:+33387558836'
  },
  email: {
    text: 'contact@louisworkplace.net',
    hyperlink: 'mailto:contact@louisworkplace.net'
  },
  clientName: 'Martin Dubois',
  clientCompanyName: 'La société du futur',
  clientStreet: '3 Rue de la Congrégation',
  clientPostCode: '2931',
  clientCity: 'Luxembourg',
  clientEmail: {
    text: 'contact@societe-du-futur.turfu',
    hyperlink: 'mailto:contact@societe-du-futur.turfu'
  },
  sales: [
    {
      salesPerson: 'Louis Durand',
      job: 'Principal Engineer',
      paymentTerms: 'Due upon receipt',
      dueDate: new Date(genDate.getTime() + 7*24*60*60*1000)
    }
  ],
  detail: [
    {
      description: 'Excel Templater yearly license',
      qty: 20,
      price: 200
    },
    {
      description: 'RedUrl yearly license',
      qty: 20,
      price: 120
    },
    {
      description: 'IQL yearly license',
      qty: 20,
      price: 400
    },
    {
      description: 'Integration support daily rate',
      qty: 3,
      price: 400
    },
    {
      description: 'Excel Templater custom functionality',
      qty: 1,
      price: 1350
    }
  ],
  taxRatePercent: .2
};


export const exampleTemplates: ExampleTemplate[] = [
  {
    name: 'Balance sheet',
    templatePath: 'balance-sheet-template.xlsx',
    data: toJSON(balanceSheetData),
    generatedFileName: 'balance-sheet-generated.xlsx'
  },
  {
    name: 'Estimate',
    templatePath: 'estimate-template.xlsx',
    data: toJSON(estimateData),
    generatedFileName: 'estimate-generated.xlsx'
  },
  {
    name: 'Invoice',
    templatePath: 'invoice-template.xlsx',
    data: toJSON(invoiceData),
    generatedFileName: 'invoice-generated.xlsx'
  }
];

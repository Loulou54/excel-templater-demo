import { TemplateData } from "excel-templater";

export type ExampleTemplate = {
  name: string,
  templatePath?: string,
  templateBuffer?: ArrayBuffer,
  dataGetter: () => TemplateData,
  generatedFileName: string
};

import { Button, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExcelTemplater, TemplateData } from 'excel-templater';
import AceEditor from 'react-ace';
import ReactAce from "react-ace/lib/ace";
import { useRef, useState } from "react";

import 'brace/mode/json';
import 'brace/theme/chrome';

import { ExampleTemplate } from "src/types/demo-types";
import { exampleTemplates } from "src/templates/template-data";

export default function Demo() {
  const [templatesList, setTemplatesList] = useState<ExampleTemplate[]>(exampleTemplates);
  const [selectedTemplate, setSelectedTemplate] = useState<ExampleTemplate>();
  const [jsonError, setJsonError] = useState(false);
  const editor = useRef<ReactAce>(null);

  const onDataChange = (value: string) => {
    if(selectedTemplate) selectedTemplate.data = value;
  }

  const selectTemplate = (template: ExampleTemplate) => {
    editor.current?.editor.moveCursorTo(0, 0);
    editor.current?.editor.focus();
    editor.current?.editor.getSession().selection.clearSelection();
    setSelectedTemplate(template);
  };

  const uploadTemplate = async (file?: File) => {
    if(!file) return;
    const templateBuffer = await file.arrayBuffer();
    const [fileName, ...extensions] = file.name.split('.');
    const newTemplate: ExampleTemplate = {
      name: fileName,
      templateBuffer,
      data: '{}',
      generatedFileName: `${fileName}-generated.${extensions.join('.')}`
    };
    setTemplatesList(tl => ([
      ...tl,
      newTemplate
    ]));
    setSelectedTemplate(newTemplate);
  }

  const generateExcel = async () => {
    if(!selectedTemplate) return;
    const excelTemplater = selectedTemplate.templatePath && new ExcelTemplater(selectedTemplate.templatePath)
        || selectedTemplate.templateBuffer && new ExcelTemplater(selectedTemplate.templateBuffer);
    const templateData: TemplateData = JSON.parse(selectedTemplate.data);
    excelTemplater?.saveAsExcel(templateData, selectedTemplate.generatedFileName);
  };

  return <Container id='demo'>
    <h1>Try it out!</h1>
    <Grid container sx={{'h2': {textAlign: 'center'}, '.MuiListItemButton-root': {height: '44px'}}}>
      <Grid item container xs={12} md={3} display='flex' direction='column'>
        <h2>Excel Template</h2>
        <Grid container flexGrow={1} alignItems='center' justifyContent='center'>
          <List style={{width: '100%'}}>
            {templatesList.map(template => (
              <ListItem key={template.name} disablePadding>
                <ListItemButton
                  selected={template === selectedTemplate}
                  onClick={() => selectTemplate(template)}>
                    {template.name}
                </ListItemButton>
                {template.templatePath && <ListItemButton href={template.templatePath} style={{flexGrow: 0}}><FileDownloadIcon/></ListItemButton>}
              </ListItem>
            ))}
            <ListItem>
              <Button variant="contained" component="label" style={{filter: 'hue-rotate(300deg)'}}>
                Your Template
                <input type="file" hidden onChange={event => uploadTemplate(event.target.files?.[0])} />
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid item xs={12} md={1} textAlign='center' margin='auto' sx={{'h2': {display: {xs: 'none', md: 'block'}}}}>
        <h2>&#8205;</h2>
        <Typography style={{fontSize: '50px'}}>+</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <h2>Data</h2>
        <AceEditor
          ref={editor}
          mode='json'
          theme='chrome'
          value={selectedTemplate?.data || ''}
          onChange={onDataChange}
          onValidate={annotations => setJsonError(annotations.length > 0)}
          style={{height: '40vh', width: '100%'}} />
      </Grid>
      <Grid item xs={12} md={7} textAlign='center'>
        <img style={{height: '50px', width: '50px', margin: '20px 0'}} src='funnel.png' />
      </Grid>
      <Grid item xs={0} md={5} />
      <Grid item xs={12} md={7} textAlign='center'>
        <Button
          variant='contained'
          disabled={!selectedTemplate || jsonError}
          onClick={generateExcel}
          style={{filter: 'hue-rotate(300deg)'}}>
            Downnload generated file
        </Button>
      </Grid>
      <Grid item xs={0} md={5} />
    </Grid>
  </Container>
}

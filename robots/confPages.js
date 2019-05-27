

async function robot(content){

  var projectName = content.nameProject;
  var base = content.base;
  var pages = [];
  var extFile = 'ext.json';
  var widgetFile = 'widget.json';
  var lessFile = "widget.less";
  var scriptFile = "script.js";
  var templateFile = "display.template";
  var nsFile = "ns.headerLineTop.json";
  var languages = content.language;

  var eTranslations = [];
  var wTranslations = [];

  languages.map(language=>{
    eTranslations.push({
      "language": language, 
      "name": `${content.nameProject}`,
      "description": `${content.description}`})
    wTranslations.push({ 
      "language": language, 
      "name": `${content.nameProject}`})
  })

  var extJson = {
    "extensionID": content.extensionID,
    "developerID": "crisciano.botelho",
    "createdBy"  : "Compasso",
    "version"    : 1,
    "timeCreated": getDate(),
    "translations": eTranslations
  };
  var ext = JSON.stringify(extJson, null, 4);

  var widgetJson = {
    "availableToAllPages": true,
    "config": {},
    "global": false,
    "globalEnabled": true,
    "i18nresources": "headerLineTop",
    "imports": [],
    "javascript": "script",
    "jsEditable": true,
    "minWidth": 1,
    "source": 101,
    "version": 1,
    "translations" : wTranslations
  };
  var widget = JSON.stringify(widgetJson, null, 4);

  var nsJson = {
      "resources": {
          "newResource" : "new resource"
      }
  };
  var ns = JSON.stringify(nsJson, null, 4);

  var less = `
  .headerLineTop {
      background: #fff;
  }`;

  var script =`
  define(
    // Dependencies
    ['jquery', 'knockout'],

    // Module Implementation
    function($,ko) {
        // We recommend enabling strict checking mode
        'use strict';

        return {
            onLoad: function(widget) {
                console.log('Carregando widget base...');
            },
            beforeAppear: function(page) {
              // Code to run before showing the widget here.
            }
        }
    }
  );
  `;

  var template = `
  <div class="headerLineTop">
      <!-- Conteudo do widget -->    
  </div>
  `;

  // conf page ext.json
  pages.push({
    "extPath": `${base}\\${extFile}`, 
    "extFile": `${extFile}`,
    "extContent": `${ext}` 
   })
  // conf page widget.json
  pages.push({ 
    "extPath": `${base}\\widget\\${projectName}\\${widgetFile}`, 
    "extFile": `${widgetFile}`,
    "extContent": `${widget}` 
   })
  // conf page widget.less
  pages.push({
    "extPath": `${base}\\widget\\${projectName}\\less\\${lessFile}`,
    "extFile": `${lessFile}`,
    "extContent": `${less}`
  })

  // conf page script.js
  pages.push({ 
    "extPath": `${base}\\widget\\${projectName}\\js\\${scriptFile}`,
    "extFile": `${scriptFile}`,
    "extContent": `${script}`
  })

  // conf page display.template
  pages.push({
    "extPath": `${base}\\widget\\${projectName}\\templates\\${templateFile}`,
    "extFile": `${templateFile}`,
    "extContent": `${template}`
  })

  await languages.map((item)=>{
    // return paste
    pages.push({
      "extPath": `${base}\\widget\\${projectName}\\locales\\${item}\\${nsFile}`,
      "extFile": `${nsFile}`,
      "extContent": `${ns}`
    })
	})

  content.pages = pages;

  function getDate(){
    var d = new Date();
    var year = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0'); 

    return `${year}-${month}-${day}`;
  }
  
}

module.exports = robot
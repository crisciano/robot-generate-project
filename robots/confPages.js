

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
  var language = content.language;

  var extJson = {
    "extensionID": `${content.extensionID}`,
    "developerID": "crisciano.botelho",
    "createdBy"  : "Compasso",
    "version"    : 1,
    "timeCreated": "2019-05-02",
    "translations": [
      {
        "language": "en",
        "name": `${content.nameProject}`,
        "description": `${content.description}`
      },
      {
        "language": "pt_BR",
        "name":  `${content.nameProject}`,
        "description": `${content.description}`
      }
    ]
  };
  var ext = JSON.stringify(extJson, null, 4);

  var widgetJson ={
    "availableToAllPages": true,
    "config": {},
    "global": false,
    "globalEnabled": true,
    "i18nresources": "headerLineTop",
    "imports": [],
    "javascript": "script.js",
    "jsEditable": true,
    "minWidth": 1,
    "source": 101,
    "version": 1,
    "translations" : [
      {
          "language": "en",
          "name": `${content.nameProject}`
      },
      {
          "language": "pt_BR",
          "name": `${content.nameProject}`
      }
    ]
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
    "extPath": `${base}\\${projectName}\\${widgetFile}`, 
    "extFile": `${widgetFile}`,
    "extContent": `${widget}` 
   })
  // conf page widget.less
  pages.push({
    "extPath": `${base}\\${projectName}\\less\\${lessFile}`,
    "extFile": `${lessFile}`,
    "extContent": `${less}`
  })

  // conf page script.js
  pages.push({ 
    "extPath": `${base}\\${projectName}\\js\\${scriptFile}`,
    "extFile": `${scriptFile}`,
    "extContent": `${script}`
  })

  // conf page display.template
  pages.push({
    "extPath": `${base}\\${projectName}\\templates\\${templateFile}`,
    "extFile": `${templateFile}`,
    "extContent": `${template}`
  })

  await language.map((item)=>{
    // return paste
    pages.push({
      "extPath": `${base}\\${projectName}\\locales\\${item}\\${nsFile}`,
      "extFile": `${nsFile}`,
      "extContent": `${ns}`
    })
	})

  content.pages = pages;
  
}

module.exports = robot
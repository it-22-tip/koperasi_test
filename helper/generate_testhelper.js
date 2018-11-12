import clickSidebarMenu from './clicksidebarmenu';

const getModel = async function () {
  let dataArray = [];
  let getterTemplate = function (model, statement) {
    return `case '${model}':\n\treturnValue = ${statement};\n\tbreak;\n`;
  }
  let form = await element(by.className('form'));
  var obj = {
    jsonTemplate: {},
    setterParams: [],
    getter: [],
    setter: [],
  };
  await form.all(by.css('[ng-model],[model]')).each(
    async function (elem, index) {
      let ngModelAttribute = await elem.getAttribute('ng-model');
      let modelAttribute = await elem.getAttribute('model');
      // let fileAttribute = await elem.element(by.css('[type="file"]'));
      // let checkBoxAttribute = await elem.element(by.css('[type="checkbox"]'));
      let par = (ngModelAttribute === null) ? modelAttribute.split('.')[1] : ngModelAttribute.split('.')[1];
      // console.log(par)
      if (par !== undefined) {
        obj.setterParams.push(par);
        obj.jsonTemplate[par] = '';
      };
      // start if else
      if (ngModelAttribute !== null) {
        let fileAttribute = await elem.element(by.css('[type="file"]'));
        // obj.param = ngModelAttribute.split('.')[1];
        if (fileAttribute !== null) { // file input
          var getterStatement = `null; // await element(by.model('${ngModelAttribute}')).getAttribute('value');`;
          obj.getter.push(getterTemplate(ngModelAttribute, getterStatement));
          obj.setter.push(`await element(by.model('${ngModelAttribute}')).sendKeys(${ngModelAttribute.split('.')[1]})`);
        } else { // textinput
          var getterStatement = `await element(by.model('${ngModelAttribute}')).getAttribute('value')`;
          obj.getter.push(getterTemplate(ngModelAttribute, getterStatement));
          obj.setter.push(`await element(by.model('${ngModelAttribute}')).sendKeys(${ngModelAttribute.split('.')[1]})`);
        }
      } else if (modelAttribute !== null) {
        let checkBoxAttribute = await elem.element(by.css('[type="checkbox"]'));
        // obj.param = modelAttribute.split('.')[1];
        if (checkBoxAttribute !== null) { // checkboxinput
          var getterStatement = `await element(by.model('${modelAttribute}')).getAttribute('value')`;
          obj.getter.push(getterTemplate(modelAttribute, getterStatement));
          obj.setter.push(`await dropdown('${modelAttribute}', ${modelAttribute.split('.')[1]})`);
        } else {
          var getterStatement = `await dropdownValue('${modelAttribute}')`
          obj.getter.push(getterTemplate(modelAttribute, getterStatement));
          obj.setter.push(`// checkbox await dropdown('${modelAttribute}', ${modelAttribute.split('.')[1]})`);
        }
      }
      // dataArray.push(obj);
    }
  );
  dataArray.push(obj)
  return dataArray;
}

const generateJsonDummyTemplate = async function (name) {
  // var pagesPath = path.join(rootPath, 'temp', 'pages');
  await clickSidebarMenu(name);
  if (!await bisaClickTambah()) return;
  await clickTambah();

  // var filename = `${pagesPath}/${snakeCase(toLower(name))}_dummy.json`;
  var data = await getModel(data);
  console.log(data);
  // writeFileSync(`${filename}`, form);
}

export default generateJsonDummyTemplate;

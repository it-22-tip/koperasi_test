
const jsonTemplate = function () {
  var retVal = [];

  return JSON.stringify(retval);
}

const generateFormFiller = async function (name) {
  var pagesPath = path.join(rootPath, 'temp', 'pages');
  await clickSidebarMenu(name);
  if (!await bisaClickTambah()) return;
  await clickTambah();

  var filename = `${pagesPath}/${snakeCase(toLower(name))}_add.filler.js`;
  var form = await getModelList(name);
  writeFileSync(`${filename}`, form)
}

const generateFormValueGetter = async function (name) {
  var pagesPath = path.join(rootPath, 'temp', 'pages');
  await clickSidebarMenu(name);
  if (!await bisaClickTambah()) return;
  await clickTambah();

  var filename = `${pagesPath}/${snakeCase(toLower(name))}_add.getter.js`;
  var form = await getModelVal(name);
  writeFileSync(`${filename}`, form);
}


const getModelVal = async function (page) {
  const form = await element(by.className('form'));
  const processNgModel = function (str) {
    var x = str.split('.')
    return `case '${str}':
    \tret = await element(by.model('${str}')).getAttribute('value');
    \tbreak;\n`;
  }
  const processModel = function (str) {
    var x = str.split('.')
    return `case '${str}':
    \tret = await dropdownValue('${str}');
    \tbreak;\n`;
  }
  let params = []
  let body = []
  await form.all(by.css('[ng-model],[model]')).each(
    async function (elem, index) {
      var model = await elem.getAttribute('model');
      var ngModel = await elem.getAttribute('ng-model');
      var par = (model === null) ? ngModel : model;
      params.push(par.split('.')[1]);
      body.push((model === null) ? processNgModel(ngModel) : processModel(model));
    }
  );
  var bodyStr = reduce(
    body,
    function (result, value, key) {
      let v = `\t\t${value}`;
      return `${result}${v}`;
    },
    ''
  );
  var func = `async function (\n`
  func += `\tsearchModel` // `${paramsStr}`
  func += `\n) {\n`;
  func += `\tlet ret;\n`;
  func += `\tswitch (searchModel) {\n`;
  func += `${bodyStr}`;
  func += `\t}\n`;
  func += `\treturn ret;\n`;
  func += `}`;
  func = `export default ${func}`;
  return func;
}

const getModelList = async function (page) {
  const form = await element(by.className('form'));
  const processNgModel = function (str) {
    var x = str.split('.')
    return `await element(by.model('${str}')).sendKeys(${x[1]})`;
  }
  const processModel = function (str) {
    var x = str.split('.')
    return `await dropdown('${str}', ${x[1]})`;
  }
  let params = []
  let body = []
  await form.all(by.css('[ng-model],[model]')).each(
    async function (elem, index) {
      var model = await elem.getAttribute('model');
      var ngModel = await elem.getAttribute('ng-model');
      var par = (model === null) ? ngModel : model;
      params.push(par.split('.')[1]);
      body.push((model === null) ? processNgModel(ngModel) : processModel(model));
    }
  );
  var paramsStr = reduce(
    params,
    function (result, value, key) {
      let v = ((params.length-1) === key) ? `\t${value}` : `\t${value},\n`;
      return `${result}${v}`;
    },
    ''
  );
  var bodyStr = reduce(
    body,
    function (result, value, key) {
      let v = (key === 0) ? `\t${value};\n` : `\t${value};\n`;
      return `${result}${v}`;
    },
    ''
  );
  var func = `async function (\n`
  func += `${paramsStr}`
  func += `\n) {\n`
  func += `${bodyStr}`
  func += `}`;
  func = `export default ${func}`;
  return func;
}

import open_sidemenu from './open_sidemenu';
const list_sidemenuitems = async function () {
  await open_sidemenu();
  let list = [];
  let selector = '[ng-click="$location.path(menu_anak.menu_url)"]';
  const selectorFunction = async function (element, index) {
    var menuText = await element.getText();
    menuText = trim(toLower(menuText));
    list.push(menuText);
  }

  await element.all(by.css(selector))
    .each(selectorFunction);
  return list;
}

export default list_sidemenuitems;

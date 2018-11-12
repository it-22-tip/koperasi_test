import open_sidemenu from './open_sidemenu';
import { trim, toLower } from 'lodash';

const list_sidemenuitems = async function () {
  await open_sidemenu();
  let sidemenu_list = [];
  let selector = '[ng-click="$location.path(menu_anak.menu_url)"]';
  const selectorFunction = async function (element, index) {
    var menuText = await element.getText();
    menuText = trim(toLower(menuText));
    sidemenu_list.push(menuText);
  }

  await element.all(by.css(selector))
    .each(selectorFunction);
  return sidemenu_list;
}

export default list_sidemenuitems;

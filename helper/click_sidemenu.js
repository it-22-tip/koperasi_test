import { trim, toLower } from 'lodash';
import open_sidemenu from './open_sidemenu';
const click_sidemenu = async function (target) {
  await open_sidemenu();

  let selector = '[ng-click="$location.path(menu_anak.menu_url)"]';

  const selectorFunction = async function (element, index) {
    var element_text = await element.getText();
    element_text = trim(toLower(element_text));
    return element_text === target;
  }

  let menu = await element.all(by.css(selector))
    .filter(selectorFunction)
    .first();

  await browser.actions()
    .mouseMove(menu)
    .perform();

  await menu.click();

  await browser.actions()
    .mouseUp()
    .mouseMove(element(by.tagName('body')), {x: 300, y: 1})
    .perform();
}

export default click_sidemenu;

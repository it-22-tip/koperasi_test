import { trim, toLower } from 'lodash';
const clickSidebarMenu = async function (target) {
  await openSideBar();
  let selector = '[ng-click="$location.path(menu_anak.menu_url)"]';
  const selectorFunction = async function (element, index) {
    var menuText = await element.getText();
    menuText = trim(toLower(menuText));
    return menuText === target;
  }

  let menu = await element.all(by.css(selector))
    .filter(selectorFunction)
    .first();

  // await browser.wait(protractor.ExpectedConditions.visibilityOf(menu, 1000));
  await browser.actions()
    .mouseMove(menu)
    .perform();

  await menu.click();

  await browser.actions()
    .mouseUp()
    .mouseMove(element(by.tagName('body')), {x: 300, y: 1})
    .perform();
  // await browser.sleep(300);
  //await browser.wait(protractor.ExpectedConditions.invisibilityOf(menu, 1000));
    // await waitToBeNotDisplayed(menu);
}

export default clickSidebarMenu;

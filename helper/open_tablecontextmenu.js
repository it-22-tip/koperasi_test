const clickContextMenu = async function (action) {
  let mainElement = await element(by.className('main'));
  let tableElement = await mainElement.element(by.tagName('table'));
  let tbodyElement = await mainElement.element(by.tagName('tbody'));
  let listElement = await tbodyElement.all(by.css('[ng-repeat="data in list"]')).first();
  await browser.actions().mouseMove(listElement).perform();
  await browser.actions().click(protractor.Button.RIGHT).perform();
  let ctx = await element(by.className('context-menu'));
  await ctx.element(by.css(`[ng-click="$location.path(menuOpened + \'/${action}/\' + rightClickData.id)"]`)).click();
}

export default clickContextMenu;

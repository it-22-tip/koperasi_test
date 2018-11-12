const can_clicktambah = async function () {
  let selector = '[ng-click="$location.path(menuOpened + \'/add\')"]';
  let counter = await element.all(by.css(selector)).count();
  return counter > 0;
}
export default can_clicktambah;

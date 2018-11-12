const clickbackbutton = async function () {
  let selector = '[ng-click="$location.path($route.current.params.file)"]';
  let button = await element(by.css(selector));
  await button.click();
}
export default clickbackbutton;

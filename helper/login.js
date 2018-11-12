import gotopage from './gotopage.action'
export default async function () {
  await gotopage('masuk');
  element(by.partialButtonText('Masuk')).click();
}

import gotopage from './gotopage'
export default async function () {
  await gotopage('masuk');
  element(by.partialButtonText('Masuk')).click();
}

export default async function (page) {
  const { base_url } = browser.params;
  const url = `${base_url}/${page}`;
  // console.log(url);
  await browser.get(url);
}

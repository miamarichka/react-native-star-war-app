function extractLastNumberFromUrl(url: string) {
  const match = url.match(/(\d+)\/?$/);
  return match ? parseInt(match[1], 10) : null;
}

export default extractLastNumberFromUrl;

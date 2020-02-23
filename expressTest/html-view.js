const html = model => {
  return `
  <html><h1>${model}</h1></html>`;
};

const export2 = () => {
  return `
    <html>
    <h1>hello world this is from the html</h1>
    <p>hello world this is from the html</p>
    <p>hello world this is from the html</p>
    <p>This is so awesome</p>
    <p>hello world this is from the html</p>

    </html>`;
};

module.exports = { html, export2 };

const fs = require('fs')
const path = require('path')
const marked = require('marked')
const input = path.resolve(__dirname, '../README.md')
const output = path.resolve(__dirname, '../dist/index.html')
const handleError = (err) => {
  if (err) {
    console.log(err)
  }
}
const template = (body) => `
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css">
  <style>
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }
    @media (max-width: 767px) {
      .markdown-body {
        padding: 15px;
      }
    }
  </style>
  <article class="markdown-body">
  ${body}
  </article>
`
fs.readFile(input, 'utf8', (err, markdown) => {
  handleError(err)
  const body = marked(markdown.toString())
  fs.writeFile(output, template(body), handleError)
})

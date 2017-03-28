// import YAML from 'yamljs'

const slug = (text) =>
  (text||'').toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')

const ghUsers = (text) =>
  (text||'').toString().toLowerCase()
    .replace(/@/g, '')
    .replace(/,/g, ' ')
    .split(' ')
    .filter(v => v)


const qs = document.querySelector.bind(document)

const form = qs('#entry-form')
if(form) {

  const content = qs('#gh-content')
  const filename = qs('#gh-filename')
  const link = qs('#gh-link')

  const fields = ['name', 'guide', 'description', 'members']
  let values = {
    name: '',
    guide: '',
    description: '',
    members: ''
  };

  const elements = fields.map( f => form.querySelector(`[name=${f}]`))

  const generateFile = function (e) {
    fields.forEach(function (field, i) {
      values[field] = elements[i].value || ''
    });

    filename.innerText = `_hack/${slug(values.name)}.md`

    let ov =
`---
name: "${values.name}"
members:${ghUsers(values.members).map(name => `\n  - ${name}`).join('')}
guide: ${values.guide}
---
${values.description}
`
    ;
    content.innerText = ov;
    let qlink = `https://github.com/jsoxford/hack/new/master/_entries/new?filename=yourhack.md&value=${encodeURIComponent(ov)}`;

    link.href = qlink
  }


  form.addEventListener('submit', (e) => {
    e.preventDefault()
    generateFile()
  })

  elements.forEach(element => {
    element.addEventListener('change', generateFile, false)
    element.addEventListener('keyup', generateFile, false)
  })


}

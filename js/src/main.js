// import YAML from 'yamljs'
import arrayish from 'is-arrayish'

const YAMLValue = value => {
  if(arrayish(value)) {
    return value.map(v => `\n  - ${v}`).join('')
  }
  return `"${value}"`
}

const toYAML = items =>
  items
    .filter(item => item[1] && item[1].length)
    .map(([key, value]) => `${key}: ${YAMLValue(value)}`)
    .join('\n')

window.toYAML = toYAML

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



    filename.innerText = `(jsoxford/hack) _hacks/${slug(values.name) || 'your-hack'}.md`

    const frontMatter = toYAML([
      ['name', values.name],
      ['members', ghUsers(values.members)],
      ['guide', values.guide]
    ])
    const main = values.description

    let ov =
`---
${frontMatter}
---

${main}`


    content.innerText = ov;
    let qlink = `https://github.com/jsoxford/hack/new/master/_hacks/new?filename=${encodeURIComponent(slug(values.name) || 'your-hack')}.md&value=${encodeURIComponent(ov)}`;

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

  generateFile()


}

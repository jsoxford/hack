const qs = document.querySelector.bind(document)

const form = qs('#entry-form')
if(form) {

  const content = qs('#gh-content')
  const link = qs('#gh-link')

  const fields = ['name', 'guide', 'description']
  let values = {
    name: '',
    guide: '',
    description: ''
  };

  const elements = fields.map( f => form.querySelector(`[name=${f}]`))

  const generateFile = function (e) {
    fields.forEach(function (field, i) {
      values[field] = elements[i].value || ''
    });

    let ov =
`---
name: "${values.name}"
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

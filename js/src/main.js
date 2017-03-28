const qs = document.querySelector.bind(document)

const form = qs('#entry-form')
if(form) {

  const content = qs('#gh-content')
  const link = qs('#gh-link')


  form.addEventListener('submit', function (e) {
    e.preventDefault();
  });

  const fields = ['name', 'guide', 'description']
  let values = {
    name: '',
    guide: '',
    description: ''
  };

  qs('#submit').addEventListener('click', function (e) {
    let existing_button = document.querySelector('.btn-load');
    if (existing_button) {
      existing_button.parentNode.removeChild(existing_button);
    }
    fields.forEach(function (field) {
      values[field] = document.getElementById(field).value
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
  });

}

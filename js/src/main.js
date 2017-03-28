(function () {
  'use strict';

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
  });

  const fields = ['name', 'guide', 'description']
  let values = {
    name: '',
    guide: '',
    description: ''
  };

  document.getElementById('submit').addEventListener('click', function (e) {
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
    let output_element = document.getElementById('output');
    output_element.innerText = ov;
    content.innerText = ov;
    let qlink = `https://github.com/jsoxford/hack/new/master/_entries/new?filename=yourhack.md&value=${encodeURIComponent(ov)}`;
    let qtext = "Load this on Github";
    output_element.outerHTML += `<a class="btn btn-load" target="_blank"href="${qlink}">${qtext}</a>`;
  });


}())

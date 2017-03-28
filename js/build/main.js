(function () {
  'use strict';

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
  });

  var fields = ['name', 'guide', 'description'];
  var values = {
    name: '',
    guide: '',
    description: ''
  };

  document.getElementById('submit').addEventListener('click', function (e) {
    var existing_button = document.querySelector('.btn-load');
    if (existing_button) {
      existing_button.parentNode.removeChild(existing_button);
    }
    fields.forEach(function (field) {
      values[field] = document.getElementById(field).value;
    });

    var ov =
"---\nname: \"" + (values.name) + "\"\nguide: " + (values.guide) + "\n---\n" + (values.description) + "\n";
    var output_element = document.getElementById('output');
    output_element.innerText = ov;
    content.innerText = ov;
    var qlink = "https://github.com/jsoxford/hack/new/master/_entries/new?filename=yourhack.md&value=" + (encodeURIComponent(ov));
    var qtext = "Load this on Github";
    output_element.outerHTML += "<a class=\"btn btn-load\" target=\"_blank\"href=\"" + qlink + "\">" + qtext + "</a>";
  });


}());

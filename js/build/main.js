var qs = document.querySelector.bind(document);

var form = qs('#entry-form');
if(form) {

  var content = qs('#gh-content');
  var link = qs('#gh-link');

  var fields = ['name', 'guide', 'description'];
  var values = {
    name: '',
    guide: '',
    description: ''
  };

  var elements = fields.map( function (f) { return form.querySelector(("[name=" + f + "]")); });

  var generateFile = function (e) {
    fields.forEach(function (field, i) {
      values[field] = elements[i].value || '';
    });

    var ov =
"---\nname: \"" + (values.name) + "\"\nguide: " + (values.guide) + "\n---\n" + (values.description) + "\n";
    content.innerText = ov;
    var qlink = "https://github.com/jsoxford/hack/new/master/_entries/new?filename=yourhack.md&value=" + (encodeURIComponent(ov));

    link.href = qlink;
  };


  form.addEventListener('submit', function (e) {
    e.preventDefault();
    generateFile();
  });

  elements.forEach(function (element) {
    element.addEventListener('change', generateFile, false);
    element.addEventListener('keyup', generateFile, false);
  });


}

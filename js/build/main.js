// import YAML from 'yamljs'

var slug = function (text) { return (text||'').toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, ''); };

var ghUsers = function (text) { return (text||'').toString().toLowerCase()
    .replace(/@/g, '')
    .replace(/,/g, ' ')
    .split(' ')
    .filter(function (v) { return v; }); };


var qs = document.querySelector.bind(document);

var form = qs('#entry-form');
if(form) {

  var content = qs('#gh-content');
  var filename = qs('#gh-filename');
  var link = qs('#gh-link');

  var fields = ['name', 'guide', 'description', 'members'];
  var values = {
    name: '',
    guide: '',
    description: '',
    members: ''
  };

  var elements = fields.map( function (f) { return form.querySelector(("[name=" + f + "]")); });

  var generateFile = function (e) {
    fields.forEach(function (field, i) {
      values[field] = elements[i].value || '';
    });

    filename.innerText = "_hack/" + (slug(values.name)) + ".md";

    var ov =
"---\nname: \"" + (values.name) + "\"\nmembers:" + (ghUsers(values.members).map(function (name) { return ("\n  - " + name); }).join('')) + "\nguide: " + (values.guide) + "\n---\n" + (values.description) + "\n";
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

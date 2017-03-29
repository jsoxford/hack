var index = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

// import YAML from 'yamljs'
var YAMLValue = function (value) {
  if(index(value)) {
    return value.map(function (v) { return ("\n  - " + v); }).join('')
  }
  return ("\"" + value + "\"")
};

var toYAML = function (items) { return items
    .filter(function (item) { return item[1] && item[1].length; })
    .map(function (ref) {
      var key = ref[0];
      var value = ref[1];

      return (key + ": " + (YAMLValue(value)));
    })
    .join('\n'); };

window.toYAML = toYAML;

var slug = function (text) { return (text||'').toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, ''); };

var ghUsers = function (text) { return (text||'').toString()
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



    filename.innerText = "(jsoxford/hack) _hacks/" + (slug(values.name) || 'your-hack') + ".md";

    var frontMatter = toYAML([
      ['name', values.name],
      ['members', ghUsers(values.members)],
      ['guide', values.guide]
    ]);
    var main = values.description;

    var ov =
"---\n" + frontMatter + "\n---\n\n" + main;


    content.innerText = ov;
    var qlink = "https://github.com/jsoxford/hack/new/master/_hacks/" + (encodeURIComponent(slug(values.name) || 'your-hack')) + ".md?filename=" + (encodeURIComponent(slug(values.name) || 'your-hack')) + ".md&value=" + (encodeURIComponent(ov));

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

  generateFile();


}

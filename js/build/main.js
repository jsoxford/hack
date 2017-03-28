var qs = document.querySelector.bind(document);

var form = qs('#entry-form');
if(form) {

  var content = qs('#gh-content');
  var link = qs('#gh-link');


  form.addEventListener('submit', function (e) {
    e.preventDefault();
  });

  var fields = ['name', 'guide', 'description'];
  var values = {
    name: '',
    guide: '',
    description: ''
  };

  qs('#submit').addEventListener('click', function (e) {
    var existing_button = document.querySelector('.btn-load');
    if (existing_button) {
      existing_button.parentNode.removeChild(existing_button);
    }
    fields.forEach(function (field) {
      values[field] = document.getElementById(field).value;
    });

    var ov =
"---\nname: \"" + (values.name) + "\"\nguide: " + (values.guide) + "\n---\n" + (values.description) + "\n";
    content.innerText = ov;
    var qlink = "https://github.com/jsoxford/hack/new/master/_entries/new?filename=yourhack.md&value=" + (encodeURIComponent(ov));

    link.href = qlink;
  });

}

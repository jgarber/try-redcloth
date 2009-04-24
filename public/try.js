document.observe("dom:loaded", function() {
  new Form.Element.Observer(
    'text_field',
    0.2,  // 200 milliseconds
    parse_redcloth
  );
  $('submit').hide();
});

function parse_redcloth(el, value) {
  new Ajax.Request('/', {
    parameters: { text: value },
    onSuccess: function(response) {
      $('result').update(response.responseText);
      $('html-result').update(response.responseText.escapeHTML());
    }
  });
  
}
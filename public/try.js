var TryRedClothObserver = Class.create({
  initialize: function(observable, resultElement, htmlResultElement) {
    this.observable = $(observable);
    this.resultElement = $(resultElement);
    this.htmlResultElement = $(htmlResultElement);
    this.initObserver();
  },
  initObserver: function() {
    new Form.Element.Observer(
      this.observable,
      0.2,  // 200 milliseconds
      this.parseRedcloth.bind(this)
    );
  },
  parseRedcloth: function(event) {
    var rcObserver = this;
    new Ajax.Request('/', {
      parameters: { text: rcObserver.observable.value },
      onSuccess: function(response) {
        rcObserver.resultElement.update(response.responseText);
        rcObserver.htmlResultElement.update(response.responseText.escapeHTML());
      }
    });
  }
});

document.observe("dom:loaded", function() {
  new TryRedClothObserver('text_field', 'result', 'html-result');
  $('submit').hide();
});

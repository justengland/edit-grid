$( "td a" ).on('focus', function() {
  var $currentLink = $(this);
  $currentLink.hide();
  var currentText = $currentLink.text();

  var $editElement = $currentLink.siblings().first();

  $editElement.show().focus();
});

$( "td input" ).on('focusout', function() {
  var $currentEdit = $(this);
  $currentEdit.hide();
  var $textElement = $currentEdit.parent().find('a');
  $textElement.show();
});

$( "td select" ).on('focusout', function() {
  var $currentEdit = $(this);
  $currentEdit.hide();
  var $textElement = $currentEdit.parent().find('a');
  $textElement.show();
});



// .triggerHandler( "focus" )
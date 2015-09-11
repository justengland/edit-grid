$( "td a" ).on('focus', function() {
  var $currentLink = $(this);
  $currentLink.hide();
  var currentText = $currentLink.text();

  var $editElement = $currentLink.siblings().first();

  $editElement.attr('value',currentText).show().focus().select();
});

$( "td input, td textarea, td select" ).on('focusout', function() {
  var $currentEdit = $(this);
  var currentText = $currentEdit.val();
  console.log('currentText::', currentText);
  $currentEdit.hide();
  var $linkElement = $currentEdit.parent().find('a');
  $linkElement.text(currentText).show();
});



// .triggerHandler( "focus" )
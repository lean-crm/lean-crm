Meteor.startup(function(){
  $('html').addClass('fluid top-full sticky-top sidebar sidebar-full sticky-sidebar');
});



Template.registerHelper('join', function(array) {
  return array.join(', ');
});

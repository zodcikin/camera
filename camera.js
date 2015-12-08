if(Meteor.isClient) {
  
  Template.takePhoto.events({
    'click .capture': function(){
    MeteorCamera.getPicture({width: 320}, function(error, data) {
      if (error)
        alert(error.reason);
      else
        Session.set('photo', data);
    });
  }
});

  Template.takePhoto.helpers({
    'photo': function(){
         return Session.get('photo');
     }
   });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
Template.hello.helpers({
  name: function () {
    if (Meteor.user()) {
      return Users.getDisplayName(Meteor.user());
    } else {
      return "You";
    }
  }
});


Template.hello.helpers({
        showTabs: function() {
            var r = Router.current().location.get().path;
            console.log(r);
            if ( r == '/' || r.indexOf("category") > -1) {
                return true;
            } else {
                return false;
            }
        }, 
    userCount: function() {
      var totalUsers = Session.get('userCount');
      console.log(totalUsers);
      return totalUsers;
    }
    });

Template.hello.rendered = function () {
    Meteor.call('getUserCount', function (err, result) {
      Session.set('userCount', result);
    });
  };
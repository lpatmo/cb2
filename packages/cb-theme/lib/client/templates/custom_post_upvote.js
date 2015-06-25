Meteor.startup(function () {

  Template.post_upvote.helpers({
    upvoted: function(){
      var user = Meteor.user();
      if(!user) return false;
      return _.include(this.upvoters, user._id);
    },
    oneBasedRank: function(){
      if(typeof this.rank !== 'undefined')
        return this.rank + 1;
    },
    notExpiredEvent: function () {  
      if (this.scheduledEnd) {
        var notExpired = (this.scheduledEnd > Date.now()) ? true : false;
      } else {
        var notExpired = true;
      }
      return notExpired;
    },
    domain: function(){
      var a = document.createElement('a');
      a.href = this.url;
      //return a.hostname;
      return a
    }
  });

  Template.post_upvote.events({
    'click .upvotlink': function(e, instance){
      var post = this;
      alert('clicked');

      Meteor.call('upvotePost', post, function(error, result){
        trackEvent("post upvoted", {'_id': post._id});
      });
    }
  });

});
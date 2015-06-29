// Custom Post Field

// Posts.addField({
//   fieldName: 'customPostField',
//   fieldSchema: {
//     type: String,
//     optional: true,
//     editableBy: ["member", "admin"]
//   }
// });

// Custom Comment Field

Posts.removeField('url');
Posts.removeField('title');
Posts.removeField('body');

Posts.addField({
  fieldName: "title",
  fieldSchema: {
    type: String,
    optional: false,
    editableBy: ["member", "admin"]
  }
});



//Add scheduledFor and scheduledEnd
Posts.addField({
  fieldName: "scheduledFor",
  fieldSchema: {
    type: Date,
    optional: true,
    label: "Hangout start time",
    editableBy: ["member", "admin"],
    autoform: {
      type: "bootstrap-datetimepicker",
      class: 'start-time'
    }
  }
});

Posts.addField({
  fieldName: "scheduledEnd",
  fieldSchema: {
    type: Date,
    optional: true,
    label: "Hangout end time",
    editableBy: ["member", "admin"],
    autoform: {
      type: "bootstrap-datetimepicker",
       afFormGroup: {
                'formgroup-class': 'end-time-wrapper'
            }
    }
  }
});

Posts.addField({
    fieldName: "body",
    fieldSchema: {
      type: String,
      optional: true,
      editableBy: ["member", "admin"],
      autoform: {
        rows: 5
      }
    }
});





Posts.addField({
  fieldName: 'url',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"],
    label: 'Select a Hangout Room',
    autoform: {
      options: [
        {label: "Show and Tell Hangout", value: "http://codebuddies.org/demo-hangout"},
        {label: "HTML/CSS Hangout", value: "http://codebuddies.org/htmlcss-hangout"},
        {label: "Python Hangout", value: "http://codebuddies.org/python-hangout"},
        {label: "Javascript Hangout", value: "http://codebuddies.org/javascript-hangout"},
        {label: "MeteorJS Hangout", value: "http://codebuddies.org/meteor-hangout"},
        {label: "Flask Hangout", value: "http://codebuddies.org/flask-hangout"},
        {label: "Django Hangout", value: "http://codebuddies.org/django-hangout"},
        {label: "Ruby on Rails Hangout", value: "http://codebuddies.org/rails-hangout"},
        {label: "Problem Solving Hangout", value: "http://codebuddies.org/problemsolving-hangout"},
        {label: "Git Hangout", value: "http://codebuddies.org/git-hangout"},
        {label: "Real Python Hangout", value: "http://codebuddies.org/realpython-hangout-2"},
        {label: "Learn X the Hard Way Hangout", value: "http://codebuddies.org/learnhardway-hangout-2"},
        {label: "The Odin Project Hangout", value: "http://codebuddies.org/odinproject-hangout"},
        {label: "Discover Meteor Hangout", value: "http://codebuddies.org/discovermeteor-hangout"}
      ]
    }
  }
});

// Comments.addField({
//   fieldName: 'customCommentField',
//   fieldSchema: {
//     type: String,
//     optional: true,
//     editableBy: ["member", "admin"]
//   }
// });

// Custom User Field

Users.addField({
  fieldName: 'customUserField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

// Custom Setting Field

Settings.addField({
  fieldName: "customSettingsField",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "customGroup"
    }
  }
});


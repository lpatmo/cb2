Package.describe({
  summary: 'CB custom package',
  version: '0.1.0',
  name: 'cb-theme'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n',
    'i18n/en.i18n.json',
    'lib/routes.js'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/template_modules.js',
    'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/hello.html',
    'lib/client/templates/hello.js',
    'lib/client/templates/custom_post_title.html',
    'lib/client/templates/custom_post_title.js',
    'lib/client/stylesheets/custom.scss',
    'lib/client/custom_templates.js',
    'lib/client/templates/about_link.html',
    'lib/client/templates/about.html',
    'lib/client/templates/custom_post_upvote.html',
    'lib/client/templates/custom_post_upvote.js',
    'lib/client/templates/custom_post_content.html'
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/templates/custom_emailPostItem.handlebars'
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});

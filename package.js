Package.describe({
    name: 'risul:bootstrap-x-editable',
    summary: "Bootstrap X-editable - In-place editing: http://vitalets.github.io/x-editable",
    version: "1.5.1_1",
    git: "https://github.com/risul/meteor-bootstrap-x-editable"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.0");
    api.use('jquery', 'client');
    
    api.use([
        "twbs:bootstrap@3.3.4"
    ], "client", { weak: true });
    
    api.addFiles([
        "lib/img/loading.gif",
        "lib/img/clear.png"
    ], "client");

    api.addFiles([
        "lib/js/bootstrap-editable.js",
        "lib/css/bootstrap-editable.css"
    ], "client");
    
    api.addFiles('lib/css/overrides.css', 'client');

});
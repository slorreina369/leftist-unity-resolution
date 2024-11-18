var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');

// questionsJson is a buffer
var html = buildHtml();

function buildHtml() {
    var template = fs.readFileSync(
        path.resolve(path.join(__dirname, '../views/layouts/main.handlebars')),
        'utf-8'
    );
    var renderTemplate = Handlebars.compile(template);
    var html = renderTemplate();
    // Write to build folder. Copy the built file and deploy
    fs.writeFile('./build/index.html', html, (err) => {
        if (err) console.log(err);
        console.log('File written succesfully');
    });
}

module.exports = function(options){
    // var bolder = '<strong>' + options.fn(this) + '</strong>';
    var button = `<a href="http://www.google.com"> ${options.fn(this) } </a>`;
    return button;
}
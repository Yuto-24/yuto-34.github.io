(function(window) {
    var document = window.document,
        css = document.createElement('style')
    rule = document.createTextNode('p{display:none}');
    css.media = 'screen';
    css.type = 'text/css';
    if (css.styleSheet) {
        css.styleSheet.cssText = rule.nodeValue;
    } else {
        css.appendChild(rule);
    };
    document.getElementsByTagName('head')[0].appendChild(css);
}(window));
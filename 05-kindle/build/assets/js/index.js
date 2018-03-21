// Set up before/after handlers
var beforePrint = function() {
    var details = document.querySelectorAll("details");
    [].forEach.call(details, function(div) {
        div.setAttribute('open', '');
      });
};
var afterPrint = function() {
    var details = document.querySelectorAll("details");
    [].forEach.call(details, function(div) {
        div.removeAttribute('open');
      });
};

// Webkit
if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
            beforePrint();
        } else {
            afterPrint();
        }
    });
}

// IE, Firefox
window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint;

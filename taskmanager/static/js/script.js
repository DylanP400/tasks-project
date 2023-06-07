document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
}); // sidenav initialization

document.addEventListener('DOMContentLoaded', function () {
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {
            done: "Select"
        }
    }); // datepicker initialization
});


document.addEventListener('DOMContentLoaded', function () {
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
}); // select initialization


document.addEventListener('DOMContentLoaded', function () {
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
}); // collapsible initialization
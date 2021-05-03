define(["jquery"], function ($) {
    $(document).ready(function () {
        window.addEventListener('click', () => {
            parent.postMessage("alive", "*");
        });
    });
});
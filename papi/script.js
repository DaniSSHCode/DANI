
$(document).ready(function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // is mobile..
        var sheet = document.createElement('style')
        sheet.innerHTML = `
        .text-content {margin-top: 0px; margin-left: 0%; margin-right: 0%; text-align: left; font-size: 18px;} 
        .card-image img {
            width: 100px;
            height: auto;
        };`
        
        document.body.appendChild(sheet);
    }
});



$(document).ready(function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // is mobile..
        var sheet = document.createElement('style')
        sheet.innerHTML = `
        .text-content {margin-top: 0px; margin-left: 5%; margin-right: 5%; text-align: left; font-size: 18px;} 
        .card-image img {
            width: auto;
            height: 40px;
        };
        body{
            background-image: url("assets/images/7.jpg");
            background-size: 100% 100%;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: bottom; 
        }
        
        `
        
        document.body.appendChild(sheet);
    }
});


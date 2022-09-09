function ImagetoPrint(source,name,pnum,cdate,compum,compadd,title,logo) {
    return "<html><link rel='stylesheet' type='text/css' href='/css/cus-dtls.css'><head><script>function step1(){\n" +
            "setTimeout('step2()', 10);}\n" +
            "function step2(){window.print();window.close()}\n" +
            "</scri" + "pt></head><body onload='step1()'>\n" +
            "<div class='card-container'>"+
                "<div class='card-container-hdr-logo'>"+
                    "<img class='card-logo' src='"+logo+"'/>"+
                "</div>"+  

                "<div class='card-container-hdr-dtls'>"+
                    "<p class='card-hdr card-title'>"+title+"</p>"+
                    "<p class='card-hdr card-compadd'>"+compadd+"</p>"+
                    "<p class='card-hdr card-compnum'>"+compum+"</p>"+
                "</div>"+ 

                "<div class='card-container-body-qr'>"+
                    "<img class='card-qr' src='"+source+"' />"+
                "</div>"+    

                "<div class='card-container-body-dtls'>"+
                    "<p class='card-body card-cust-name'>"+name+"</p>"+
                        "<hr class='tag-line'>"+
                        "<p class='tag-line-dtl'>Name</p>"+
                    "<p class='card-body card-cust-num'>"+pnum+"</p>"+
                        "<hr class='tag-line'>"+
                        "<p class='tag-line-dtl'>Phone Number</p>"+
                    "<p class='card-body card-cust-join'>"+cdate+"</p>"+
                        "<hr class='tag-line'>"+
                        "<p class='tag-line-dtl'>Date Joined</p>"+
                "</div>"+  
            "</div>"+
            "</body></html>";
}

function PrintImage(source) {
    
}

$(document).on('click', '#qr-print', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var data = document.getElementById( 'img-data' ).src
    var name = document.getElementById( 'dtl-name' ).textContent
    var pnum = document.getElementById( 'dtl-pnum' ).textContent
    var cdate = document.getElementById( 'dtl-cdate' ).textContent
    var logo = document.getElementById( 'comp-logo' ).src
    var compum = document.getElementById('comp-num').textContent
    var compadd = document.getElementById('comp-add').textContent
    var title = document.getElementById('comp-title').textContent
    Pagelink = "about:blank";
    var pwa = window.open(Pagelink, "_new");
    pwa.document.open();
    pwa.document.write(ImagetoPrint(data,name,pnum,cdate,compum,compadd,title,logo));
    pwa.document.close();
});
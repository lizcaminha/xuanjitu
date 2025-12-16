    var iframe = document.getElementById('Iframe1');
    resizeIFrameToFitContent( iFrame );

    function resizeIFrameToFitContent( iFrame ) {

        iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
        iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    }
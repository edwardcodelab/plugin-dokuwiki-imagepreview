var element = document.getElementById('wiki__text');  

 
// add a new toolbar button, but first check if there is a toolbar
if (typeof window.toolbar !== 'undefined') {
    window.toolbar[window.toolbar.length] = {
        type: "imgpreview", // we have a new type that links to the function
        title: "Image Preview",
        icon: "../../plugins/imagepreview/imgpreview.png",
        key:"q"
    };    
}




function addBtnActionImgpreview($btn, props, edid) {
    // initialize stuff if required
    // ...
 
    $btn.click(function() {
      handler1();

        return false;
    });
 
    return 'click';
}





function handler1(){
 if(document.getElementById('yourpreviewId')==null){
         jQuery(document.createElement('div'))
               .dialog({
                    autoOpen: false,
                    draggable: true,
                    resizable: false
               })
               .html(
                    '<img id="previewimg" width=100%  onclick="divhide()">'
                    )
               .parent()
               .attr('id','yourpreviewId')
               .attr('onclick','divhide()')
               .css({
                    'position':    'absolute',
                    'top':         '0px',
                    'left':        '70px',
                
                    'height':'100%'
                   })
               .hide()
               .appendTo('.summary');

 }

            var seltext = window.getSelection().toString();    
            var pattern = /(\{\{)(.*?)\.(gif|jpg|jpeg|tiff|png)(.*?)(\}\})(.*?)/;
            var containimg = pattern.test(seltext);
            if (containimg==true){
                match= seltext.match(pattern);
                seltext = DOKU_BASE+"lib/exe/fetch.php?media="+match[2]+"."+match[3] ; 
                document.getElementById("previewimg").src = seltext;  
                jQuery("#yourpreviewId").toggle();    
            
            }

   
}
        
function divhide(){
    jQuery("#yourpreviewId").toggle();

}            
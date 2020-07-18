window.addEventListener('load', function () {
    $(".show-more p").on("click", function() {
        var $this = $(this); 
        var $content = $this.parent().prev("div.content");
        var linkText = $this.text();    
        
        if(linkText === "[more]"){
            linkText = "[less]";
            $content.removeClass("hide-content").addClass("show-content")
        } else {
            linkText = "[more]";
            $content.removeClass("show-content").addClass("hide-content")
        };

        $this.text(linkText);
    });
})
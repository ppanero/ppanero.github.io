window.addEventListener('load', function () {
    $('.show-more-exp').click(function () {
        $('#exp-list .d-none').slice(0, 2).removeClass("d-none");
    });

    $('#show-more-job').click(function () {
        var content = $(this).parent().parent();
        var dots = content.find("#dots")[0];
        var moreText = content.find("#more-text")[0];
        var moreBtn = content.find("#show-more-job")[0];
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          moreBtn.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          moreBtn.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
    });
})
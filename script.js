//logoの表示
$(window).on('load',function(){
    $("#splash_buttom").click(function() {
        $("#splash").delay(500).fadeOut('slow');
        $("#splash_logo").delay(500).fadeOut('slow');
  });
});


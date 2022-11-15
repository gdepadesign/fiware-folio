$(document).ready(function () {
  $(".step section").each(function (e) {
    if (e != 0) $(this).hide();
  });

  $("#next").click(function () {
    if ($(".step section:visible").next().length != 0)
      $(".step section:visible").next().show().prev().hide();
    else {
      $(".step section:visible").hide();
      $(".step section:first").show();
    }
    return false;
  });

  $("#prev").click(function () {
    if ($(".step section:visible").prev().length != 0)
      $(".step section:visible").prev().show().next().hide();
    else {
      $(".step section:visible").hide();
      $(".step section:last").show();
    }
    return false;
  });
});
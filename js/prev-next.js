$(document).ready(function () {
  $(".content-container section").each(function (e) {
    if (e != 0) $(this).hide();
  });

  $("#next").click(function () {
    if ($(".content-container section:visible").next().length != 0)
      $(".content-container section:visible").next().show().prev().hide();
    else {
      $(".content-container section:visible").hide();
      $(".content-container section:first").show();
    }
    return false;
  });

  $("#prev").click(function () {
    if ($(".content-container section:visible").prev().length != 0)
      $(".content-container section:visible").prev().show().next().hide();
    else {
      $(".content-container section:visible").hide();
      $(".content-container section:last").show();
    }
    return false;
  });
});

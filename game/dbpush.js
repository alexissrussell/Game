
$("#submitName").click( function(){
  $.post( $("#nameDiv").attr("action"), $("#nameDiv :input").serializeArray(), function(info){ $("currentLeader").html(info); });
  clearInput();
});

$("#nameDiv").submit( function(){
  return false;
});

function clearInput(){
  $("#nameDiv :input").each( function(){
    $(this).val('');
  });
}

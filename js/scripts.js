$(document).ready(function() {
  $(".btn").click(function(){
  var input1 = $("#question1").val();
  var input2 = $("#question2").val();
  // var inputNob = $("#nob").val();
  // var inputNob = $("#nob").val();

    if(input1 === "Female" && input2 === "Go on a drive" || input2 === "Go out to dinner" || input2 === "Watch movies"){
    $("#chris").show();
    $("#angelina").hide();
    };

    if(input1 === "Female" && input2 === "Watch movies"){
    $("#chris").show();
    $("#angelina").hide();
    };

    if(input1 === "Male" && input2 === "Go out to dinner" || input2 === "Go on a drive" || input2 === "Watch movies"){
    $("#chris").hide();
    $("#angelina").show();
    };
  });
});

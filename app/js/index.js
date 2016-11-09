var click = [
  function(){
    var val = $('#input_text').val();
    if ( val !== '' ) {
      var url = "admin.html?q=" + val;
      window.location.href= url ;
      return false;
    }
  },
  function(){
    var val = $('#input_text').val();
    if ( val !== '' ) {
      var url = "team.html?q=" + val;
      window.location.href= url ;
      return false;
    }
  },
  function(){
    var val = $('#input_text').val();
    if ( val !== '' ) {
      var url = "member.html?q=" + val;
      window.location.href= url ;
      return false;
    }
  }
];


var onReady = function(){

  $("#btn_admin").click(click[0]);

  $("#btn_leader").click(click[1]);

  $("#btn_member").click(click[2]);

}

$(document).ready(onReady);

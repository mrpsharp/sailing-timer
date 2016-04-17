$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "fleet.csv",
        dataType: "text",
        success: function(data) {init(data);}
     });
});

function init(data){
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var competitors = [];

  for (var i=1; i<allTextLines.length; i++) {
      var data = allTextLines[i].split(',');
      if (data.length == headers.length) {
          var tarr = [];
          for (var j=0; j<headers.length; j++) {
              tarr.push(headers[j]+":"+data[j]);
          }
          lines.push(tarr);
      }
  }
  var option = "";
  for (var i=0; i < lines.length; i++) {
    option += '<option value="'+ competitors[i]['SailNo'] + '">' + competitors[i]['HelmName'] + '</option>';
  }
  $('#race-officer').append(option);
}

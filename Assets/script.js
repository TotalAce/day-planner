var timeSlot = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"];
var timeContainer = $("#timeClock");

for (var i=0; i<timeSlot.length; i++){
    var row = $("<div class='row' id="+timeSlot[i] +"'row'>")
    var timeDiv = $("<div></div>").text(timeSlot[i]);
    var toDOText = $("<textarea></textarea>").attr("id", timeSlot[i] + "-text");
    var saveBTN = $("<button></button>")
    row.append(timeDiv, toDOText, saveBTN)

    timeContainer.append(row);
    
    
}
console.log(timeContainer);


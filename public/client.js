function updateData(geo,year,month){
  document.getElementById("content").innerHTML = "";
  const BASE_URL = "https://calendarific.com/api/v2/holidays"; 
  const url_ft = BASE_URL + "?api_key=89f08256c47acaebcb88192c3814f03bcbe87a6e&country=" + geo + "&year="+ year + "%27";
 
  fetch(url_ft)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
   console.log(month); 
   for (var i = 0; i < data.response.holidays.length; i++) {
     
 if(month == 0){
      console.log("when month is 0");
      if(data.response.holidays[i].description == null){
        
        document.getElementById("content").innerHTML += "<h1>" + data.response.holidays[i].name + "</h1>" + "<br>" + "<h2>" + data.response.holidays[i].date.iso + "</h2>" + "<br><br>";
        continue;
      }else{
        document.getElementById("content").innerHTML += "<h1>" + data.response.holidays[i].name + "</h1>" + "<br>" + "<h2>" + data.response.holidays[i].date.iso + "</h2>" + "<br>" + data.response.holidays[i].description + "<br><br>";
        continue;
      } 
    
  }else if(month == data.response.holidays[i].date.datetime.month){
    console.log("each month");
      if(data.response.holidays[i].description == null){
        document.getElementById("content").innerHTML += "<h1>" + data.response.holidays[i].name + "</h1>" + "<br>" + "<h2>" + data.response.holidays[i].date.iso + "</h2>" + "<br><br>";
        continue;
      }else{
        document.getElementById("content").innerHTML += "<h1>" + data.response.holidays[i].name + "</h1>" + "<br>" + "<h2>" + data.response.holidays[i].date.iso + "</h2>" + "<br>" + data.response.holidays[i].description + "<br><br>";
        continue;
      }
   }
  
  }//for
  })
  .catch(function(error){
     document.getElementById("content").innerHTML += "Error with Fun Translations API";
  });   
}//updateData

function changeCountry(month){
  // get geo from selected value
const select = document.getElementById("selectCity");  
const selected = select.options[select.selectedIndex];
const geo = selected.value;
  //get year from selected value
const selectYear = document.getElementById("selectYear");  
const selectedYear = selectYear.options[selectYear.selectedIndex];
const year = selectedYear.value;
  // call updateData and pass it geo
  updateData(geo,year,month);
  
}
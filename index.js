function calculate() {
  
    var weight = document.getElementById("weight").value;
  
    var water = weight * 0.045;
    
 Math.round(water);
    
    var text=water.toFixed(2) +  "Litros é o ideal diário para você!";
   
    document.getElementById("text_area").innerText=text
  }
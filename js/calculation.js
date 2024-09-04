// triangle area calculation
let i=0;
document.getElementById('triangle-calculate-button').addEventListener('click',function(){
  
   let triangle_base_string=document.getElementById("triangle_base").value;
   let triangle_height_string=document.getElementById("triangle_height").value;
   if(triangle_base_string==="" || triangle_height_string===""){
    alert("Input field can not be empty");
   }
   else if( isNaN(parseFloat(triangle_base_string)) ||  isNaN(parseFloat(triangle_height_string))){
    alert("Please input number")
   }
   else if(parseFloat(triangle_base_string)<0 || parseFloat(triangle_height_string)<0){
    alert("Please enter positive value")
   }
   else{
    document.getElementById("triangle_base").value='';
    document.getElementById("triangle_height").value='';
    let triangle_area=(0.5*parseFloat(triangle_base_string)*parseFloat(triangle_height_string)).toFixed(2);
    let tr1=document.createElement('tr');
   let td1=document.createElement('td')
   td1.innerText=++i +'.'+'Triangle';
   tr1.appendChild(td1)
   let td2=document.createElement('td');
   td2.innerHTML=triangle_area+"cm<sup>2</sup>"
   tr1.appendChild(td2)
   let td3=document.createElement('td');
   td3.innerHTML=td3.innerHTML+"<button>convert to m<sup>2</sup></button>";
   tr1.appendChild(td3);
   let table1=document.getElementById('calculation-table');
   table1.appendChild(tr1);

   }
})
//Rectangle area calculation

document.getElementById('rectangle_calculation_button').addEventListener('click',function(){
    let rectangle_width_string=document.getElementById("rectangle_width").value;
    let rectangle_length_string=document.getElementById("rectangle_length").value;
    if(rectangle_width_string==="" || rectangle_length_string===""){
     alert("Input field can not be empty");
    }
    else if( isNaN(parseFloat(rectangle_width_string)) ||  isNaN(parseFloat(rectangle_length_string))){
     alert("Please input number")
    }
    else if(parseFloat(rectangle_width_string)<0 || parseFloat(rectangle_length_string)<0){
     alert("Please enter positive value")
    }
    else{
        document.getElementById("rectangle_width").value='';
        document.getElementById("rectangle_length").value='';
        let rectangle_area=(parseFloat(rectangle_width_string)*parseFloat(rectangle_length_string)).toFixed(2);
    let tr1=document.createElement('tr');
   let td1=document.createElement('td')
   td1.innerText=++i +'.'+'Rectangle';
   tr1.appendChild(td1)
   let td2=document.createElement('td');
   td2.innerHTML=rectangle_area+"cm<sup>2</sup>"
   tr1.appendChild(td2)
   let td3=document.createElement('td');
   td3.innerHTML=td3.innerHTML+"<button>convert to m<sup>2</sup></button>";
   tr1.appendChild(td3);
   let table1=document.getElementById('calculation-table');
   table1.appendChild(tr1);
    }
})
// parallelogram area calculation
document.getElementById('parallelogram_calculation_button').addEventListener("click",function(){
    let parallelogram_base=10;
    let parallelogram_height=12;
    let parallelogram_area=(parseFloat(parallelogram_base)*parseFloat(parallelogram_height)).toFixed(2);
    let tr1=document.createElement('tr');
   let td1=document.createElement('td')
   td1.innerText=++i +'.'+'Parallelogram';
   tr1.appendChild(td1)
   let td2=document.createElement('td');
   td2.innerHTML=parallelogram_area+"cm<sup>2</sup>"
   tr1.appendChild(td2)
   let td3=document.createElement('td');
   td3.innerHTML=td3.innerHTML+"<button>convert to m<sup>2</sup></button>";
   tr1.appendChild(td3);
   let table1=document.getElementById('calculation-table');
   table1.appendChild(tr1);
})

// Rhombus area calculation
document.getElementById('rhombus_calculation_button').addEventListener('click',function(){
    let rhombus_diameter1=16;
    let rhombus_diameter2=8;
    let rhombus_area=(0.5*parseFloat(rhombus_diameter1)*parseFloat(rhombus_diameter2)).toFixed(2);
    let tr1=document.createElement('tr');
    let td1=document.createElement('td')
    td1.innerText=++i +'.'+'Rhombus';
    tr1.appendChild(td1)
    let td2=document.createElement('td');
    td2.innerHTML=rhombus_area+"cm<sup>2</sup>"
    tr1.appendChild(td2)
    let td3=document.createElement('td');
    td3.innerHTML=td3.innerHTML+"<button>convert to m<sup>2</sup></button>";
    tr1.appendChild(td3);
    let table1=document.getElementById('calculation-table');
    table1.appendChild(tr1);
})
//Pentagon area calculation
document.getElementById('pentagon_calculation_button').addEventListener('click',function(){
    let pentagon_perimeter=6;
    let pentagon_apothem=10;
    let pentagon_area=(0.5*parseFloat(pentagon_perimeter)*parseFloat(pentagon_apothem)).toFixed(2);
    let tr1=document.createElement('tr');
    let td1=document.createElement('td')
    td1.innerText=++i +'.'+'Pentagon';
    tr1.appendChild(td1)
    let td2=document.createElement('td');
    td2.innerHTML=pentagon_area+"cm<sup>2</sup>"
    tr1.appendChild(td2)
    let td3=document.createElement('td');
    td3.innerHTML=td3.innerHTML+"<button>convert to m<sup>2</sup></button>";
    tr1.appendChild(td3);
    let table1=document.getElementById('calculation-table');
    table1.appendChild(tr1);
})
//Ellipse area calculation
document.getElementById('ellipse_calculation_button').addEventListener('click',function(){
    let pi=3.14;
    let ellipse_axis1=10;
    let ellipse_axis2=4;
    let ellipse_area=(pi*parseFloat(ellipse_axis1)*parseFloat(ellipse_axis2)).toFixed(2);
    let tr1=document.createElement('tr');
    let td1=document.createElement('td')
    td1.innerText=++i +'.'+'Ellipse';
    tr1.appendChild(td1)
    let td2=document.createElement('td');
    td2.innerHTML=ellipse_area+"cm<sup>2</sup>"
    tr1.appendChild(td2)
    let td3=document.createElement('td');
    td3.innerHTML=td3.innerHTML+"<button>convert to m<sup>2</sup></button>";
    tr1.appendChild(td3);
    let table1=document.getElementById('calculation-table');
    table1.appendChild(tr1);

})
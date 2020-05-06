//Digital clock displays current time. Background color changes every second.


var colorsArr = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', 
                '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', 
                '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', 
                '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', 
                '#1E88E5', '#1976D2', '#1565C0', '#0D47A1']
i = 1;


    
var showTime = () => {
    var d = new Date();
    var second = d.getSeconds();  
    var minutes = d.getMinutes();
    var hour = d.getHours();

    var hour = d.getHours();
        if (hour === 0) {
            hour = 12
        } else if (hour  > 12) {
            hour = hour  - 12
        } else if (hour  <10) {
            hour = "0" + hour 
            } else {
                hour = hour
            };

    var minutes = d.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes
       } else {
           console.log(minutes);
           minutes = minutes
       };

    var second = d.getSeconds();    
        if (second< 10) {
        second= "0" + second
        } else {
        second = second
        };
    
    function changeColors() {
        i+= 1;
        if (i == colorsArr.length) {
        i = 0;
        };
        document.body.style.backgroundColor = colorsArr[i];
        };
    
    document.getElementById("MyClockDisplay").textContent = 
    hour + ":" + minutes + ":" + second;

    setTimeout(showTime, 1000); 
    changeColors(); 

    }; 

showTime();



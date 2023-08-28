function updateDateTime() {
    let currentDate = new Date();
    let daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let wordDay = daysOfWeek[currentDate.getDay()];
  
    let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    let formattedDate = year + '/' + month + '/' + day;
    let formattedTime = hours + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds) + ' ' + ampm;
  
    let dateString = formattedDate;
    let timeString = formattedTime;
  
    document.getElementById('timeDisplay').innerHTML = timeString;
    document.getElementById('dateDisplay').innerHTML = dateString;
    document.getElementById('dayOfWeek').innerHTML = wordDay;
  }
  
  function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
  }
  
  setInterval(updateDateTime, 1000);
  
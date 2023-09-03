function bookRoom() {
   const roomType = document.getElementById("room-type").value;
   const checkInDate = document.getElementById("check-in-date").value;
   const checkOutDate = document.getElementById("check-out-date").value;

   if (roomType === "" || checkInDate === "" || checkOutDate === "") {
      document.getElementById("message").innerHTML = "Please fill in all fields.";
   } else {
      document.getElementById("message").innerHTML = `You have booked a ${roomType} room from ${checkInDate} to ${checkOutDate}.`;
   }
}
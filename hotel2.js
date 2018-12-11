var hotel = {
    name: "CarDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101","102","103","104","105","106"],
    roomNumbersBooked: [],
    roomType: "Queen",
    
 //   numberOfRoomsAvailable: function() {
        //length of the number of rooms available, returned as an integer(1, 5, etc)
 //       return this.roomNumbersAvailable.length;
 //   },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        //availabnle rooms + booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
      
    },
    
    bookRoom: function() {
        
        var roomSelected = document.getElementById("selectARoom").value;
        // only book a room if one or more is available
        if (this.roomNumbersAvailable.length > 0) {
        this.roomNumbersBooked = this.roomNumbersBooked
          .concat(this.roomNumbersAvailable
          .splice(this.roomNumbersAvailable
          .indexOf(roomSelected), 1 ))
          .sort();
     renderPage();
        }
    },
        
    returnRoom: function() {
        var roomBooked = document.getElementById("roomBooked").value;
        if (this.roomNumbersBooked.length > 0) {
            this.roomNumbersAvailable = this.roomNumbersAvailable
            .concat(this.roomNumbersBooked
            .splice(this.roomNumbersBooked
            .indexOf(roomBooked), 1))
            .sort();
       renderPage();
            
        }
        
    }
 
};
    

    
function renderPage() {
    
    document.getElementById("name").innerText = hotel.name;
    
    // rooms listed 
    var roomsListed = "<option>Select a Room to Book</option>";
    
    
    for (var i=0; i< hotel.roomNumbersAvailable.length; i++){
    roomsListed += "<option value=" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
    }
    
    document.getElementById("selectARoom").innerHTML = roomsListed;
    
    // rooms booked
    
    var roomsBooked = "<option>Select a Room to Return</option>";

  
    for (var i=0; i< hotel.roomNumbersBooked.length; i++){
    roomsBooked += "<option value=" + hotel.roomNumbersBooked[i] + ">" + hotel.roomNumbersBooked[i] + "</option>";
  }
    
    document.getElementById("roomBooked").innerHTML = roomsBooked;
    
} 
renderPage();

let bar ={
    name:"Irish Pub Pod",
    capacity: 75,
    numberOfGuestsSeatingRightNow:0,
    checkAvailability: function (partySize) {
        if(this.numberOfGuestsSeatingRightNow<this.capacity && this.numberOfGuestsSeatingRightNow+partySize<=this.capacity){
            // this.numberOfGuestsSeatingRightNow+=partySize;
            console.log("Seats Available")
        } else {
            console.log("No tables available");
        }
    },
    seatParty:function (partySize) {
        this.numberOfGuestsSeatingRightNow += partySize;
    },
    removeParty:function (partySize) {{
        this.numberOfGuestsSeatingRightNow -=partySize;
    }
        
    }
}

bar.seatParty(72);
bar.checkAvailability(4);
bar.removeParty(5);
bar.checkAvailability(4);
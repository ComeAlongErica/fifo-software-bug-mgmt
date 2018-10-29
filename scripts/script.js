"use strict";
$(document).ready(() => {

    let bugArray = [];

    //builds objects for array
    class Bugs {
        // creates objecy with info
        constructor(title, description, time) {
            this.title = title;
            this.description = description;
            this.time = time;
        }
        // adds to end of array
        add(info) {
            bugArray.push(info)
            bugsClass.display()
            console.log(bugArray);
        }
        // removes from beginning of array
        shift() {
            bugArray.shift();
            bugsClass.display()
            console.log(bugArray);
        }
        //displays new bug card
        display() {
            //sets up main card to view
            $(".bug-container").html("")
            $(".bug-container").append(`
            <h2>${bugArray[0].title} at ${bugArray[0].time}</h2>
            <p class="description">${bugArray[0].description}</p>
            <section class="checkmark-box">
                <input class="checkbox" type="checkbox" value="completed"> 
                <label class="completed-text">I have completed this.<label>
            </section>
            `);
        }
    };

    // when submit button is clicked
    $(document).on("click", "button", (event) => {
        let currentdate = new Date();
        let time = "submitted " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        let title = $(".title").val();
        let description = $(".description").val();

        bugsClass.add(new Bugs(title, description, time));
    });

    // when checkmark is clicked
    $(document).on("click", ".checkbox", (event) => {
        bugsClass.shift();
    });

    const bugsClass = new Bugs();
    bugsClass.display();

});


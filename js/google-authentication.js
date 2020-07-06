import {event} from "./functions.js";

// var flag=1;

event('.modal--google-authentication input', 'keyup', function (e) {


    if (e.keyCode < 48 || e.keyCode > 57) {

    } else {
        if (this.nextElementSibling && e.keyCode != 8) {
            this.nextElementSibling.focus();
        }

        // if (this.value.length > 0) {
        //     this.value = this.value.slice(0, 0);
        // }
    }


});

event('.modal--google-authentication input', 'keypress', function (e) {


    // if (e.keyCode < 48 || e.keyCode > 57) {
    //
    // } else {
    //     if (this.nextElementSibling && e.keyCode != 8) {
    //         this.nextElementSibling.focus();
    //     }
    //
    if (this.value.length > 0) {
        this.value = this.value.slice(0, 0);
    }


});


event('.modal--google-authentication input', 'keyup', function (e) {


    if (this.previousElementSibling && e.keyCode == 8) {
        // if (this.value.length == 0 && true) {
        this.previousElementSibling.focus();
        // flag = 1;
        // console.log('xxx');
        // }else{
        //     console.log('yyy');
        //     flag = 0;
        // }

    }


    if (e.keyCode < 48 || e.keyCode > 57) {

    } else {
        // this.nextElementSibling.focus();
    }


});


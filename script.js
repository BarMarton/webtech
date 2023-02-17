$(document).ready(function () {

    //FORM
    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    //var error_area = false;
    var error_date = false;
    function check_fname() {
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#form_fname").val();
        if(pattern.test(fname) && fname !== ''){
            $("#fname_error_message").hide();
            $("#form_fname").css("border-bottom","2px solid #34F458")
        } else {
            $("#fname_error_message").html("Invalid")
            $("#fname_error_message").show();
            $("#form_fname").css("border-bottom","2px solid #F90A0A")
            error_fname = true;
        }
    }

    $("#form_fname").focusout(function() {
        check_fname();
    });

    function check_sname() {
        var pattern = /^[a-zA-Z]*$/;
        var sname = $("#form_sname").val();
        if(pattern.test(sname) && sname !== ''){
            $("#sname_error_message").hide();
            $("#form_sname").css("border-bottom","2px solid #34F458")
        } else {
            $("#sname_error_message").html("Invalid")
            $("#sname_error_message").show();
            $("#form_sname").css("border-bottom","2px solid #F90A0A")
            error_sname = true;
        }
    }

    $("#form_sname").focusout(function() {
        check_sname();
    });

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var sname = $("#form_email").val();
        if(pattern.test(sname) && sname !== ''){
            $("#email_error_message").hide();
            $("#form_email").css("border-bottom","2px solid #34F458")
        } else {
            $("#email_error_message").html("Invalid")
            $("#email_error_message").show();
            $("#form_email").css("border-bottom","2px solid #F90A0A")
            error_email = true;
        }
    }
    $("#form_email").focusout(function() {
        check_email();
    })

    function check_date() {
        var date = $("#form_date").val();
        let current = new Date();
        if (date !== ''){
            $("#date_error_message").hide();
            $("#form_date").css("border-bottom","2px solid #34F458")
        } else {
            $("#date_error_message").html("Invalid")
            $("#date_error_message").show();
            $("#form_date").css("border-bottom","2px solid #F90A0A")
            error_email = true;
        }
    }
    $("#form_date").focusout(function() {
        check_date();
    })

    $("#quote_form").submit(function() {
        error_sname = false;
        error_fname = false;
        error_email = false;
        error_date = false;
        check_fname();
        check_sname();
        check_email();
        check_date();

        if (!error_email && !error_fname && !error_sname) {
            alert("Success!");
            return true;
        } else {
            alert("Please fill out the form correctly!");
            return false;
        }
    })
    //GALLERY
    var gallery = document.querySelector('#gallery');
    var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
    var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
    var resizeAll = function () {
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        gallery.querySelectorAll('.gallery-item').forEach(function (item) {
            var el = item;
            el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
        });
    };
    gallery.querySelectorAll('img').forEach(function (item) {
        item.classList.add('byebye');
        if (item.complete) {
            console.log(item.src);
        }
        else {
            item.addEventListener('load', function () {
                var altura = getVal(gallery, 'grid-auto-rows');
                var gap = getVal(gallery, 'grid-row-gap');
                var gitem = item.parentElement.parentElement;
                gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
                item.classList.remove('byebye');
            });
        }
    });
    window.addEventListener('resize', resizeAll);
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        item.addEventListener('click', function () {
            item.classList.toggle('full');
        });
    });
});


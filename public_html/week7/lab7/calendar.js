
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function () {

    let d = new Date();
    let mth = d.getMonth() + 1;
    let yr = d.getFullYear();

    $('#month').val(mth);
    $('#year').val(yr);
    showCalendar(mth, yr);

    $("#yes").click(function () {
        $(".day").css("background-color", 'green');
    });

    $("#no").click(function () {
        $(".day").css("background-color", 'red');
    });


    $('#month,#year').change(function (e) {
        showCalendar($('#month').val(), $('#year').val());
    });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
}


function showCalendar(mth, yr) {

    let firstDayOfMonth = `${mth}/1/${yr}`;
    let d = new Date(firstDayOfMonth);
    let numberOfDaysInMonth = daysInMonth(d);
    let firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    let str = '<ul>';
    str += `<li>Number of days in the month: ${numberOfDaysInMonth} </li>`;
    str += `<li>First day of the week: ${firstDayOfWeek} (${daysOfTheWeek[firstDayOfWeek]})</li>`;
    str += '</ul>';


    str += '<div class="row">';

    for (let i = 1; i <= numberOfDaysInMonth; i++) {

        if (i > firstDayOfWeek) {
            str += `<div class="day">${i - firstDayOfWeek}</div>`;
        } else {
            str += `<div class="day"></div>`;
        }


        if (i % 7 === 0) {
            str += '</div><div class="row">';
        }

    }
    str += '</div>';
    

    $('#results').html(str);

        $(".day").click(checkDay);

    function checkDay() {
        let dayColor = $(this).css("background-color");
        console.log(dayColor);

        if (dayColor === "rgb(0, 128, 0)") {

            $(this).css("background-color", 'red');

        } else if (dayColor === "rgb(255, 0, 0)")
        {

            $(this).css("background-color", 'rgba(0,0,0,0)');
        }
        else{
            $(this).css("background-color", 'green');
        }
    }

}



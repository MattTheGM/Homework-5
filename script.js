$(document).ready(function () {
  var input = localStorage.getItem("Value");
  
    $('#plannerItem').append(input)
    var currentDay = moment().format('LL');
    $('#currentDay').html(`Today's date is ${currentDay}`);
    function hourBlocks() {
        var currentHour = moment().hour('hh:a')
        var startWork = moment('8:00 am', 'hh:a')
        var workHours = 9;

        //console.log(currentHour);
        for (var i = 0; i < workHours; i++) {
            var workHour = startWork.add(1, 'hour');
            if (input === null) {
                $('#timeblocks').append(`<div class='row time-block'>
                <div class='col-md-1 hour description' id='${startWork}'> ${startWork}
                </div>
                <div class='col-md-10 divider'>
                    <textarea cols='100%' id='plannerItem' placeholder="Write your chore, then hit save!" value="${input}"></textarea>
                </div>
                <div id="save" class='col-md-1 saveBtn btn btn-primary'>
                    SAVE
                </div>
            `)
            } else {
                $('#timeblocks').append(`<div class='row time-block'>
                <div class='col-md-1 hour description' id='${startWork}'> ${startWork}
                </div>
                <div class='col-md-10 divider'>
                    <textarea cols='100%' id='plannerItem' value="${input}" placeholder="Write your chore, then hit save!">${input}</textarea>
                </div>
                <div id="save" class='col-md-1 saveBtn btn btn-primary'>
                    SAVE
                </div>
            `)
            }

            $(document).on('click', '#save', function (input) {
                localStorage.setItem("Value", input)
            })

            if ((currentHour).isBefore(workHour)) {
                $('#timeblocks').addClass('past');
            }

            else if ((currentHour).isAfter(workHour)) {
                $('#timeblocks').addClass('future');
            } else {
                $('#timeblocks').addClass('present');
            }

            input = localStorage.getItem("value");


            $(document).on('click', '#save', function (input) {
                input = $('#plannerItem').val()
                localStorage.setItem("Value", input)
            })

        }
    }
    hourBlocks();
});
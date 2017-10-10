$(document).ready(readyNow);

function readyNow() { //function to start jQuery
    $('.submitButton').on('click', submitData);
    //submit button event

    function submitData() { //submit function
        var firstName = $('.firstName').val();
        var lastName = $('.lastName').val();
        var idNumber = $('.idNumber').val();
        var jobTitle = $('.jobTitle').val();
        var salary = parseInt($('.salary').val());
        var tableRow = $('<tr class="dataRow">' +
            "<td><button class='deleteButton button'>Delete</button></td>" +
            '<td>' + firstName + ' ' + lastName + '</td>' +
            '<td>' + idNumber + '</td>' +
            '<td>' + jobTitle + '</td>' +
            '<td>' + "$ " + salary + '</td></tr>');

        //stores the monthly salary to that row
        $(tableRow).data('salary', salary / 12);

        //.find narrows down to add the click handler to the specific button
        $(tableRow).find('button').on('click', deleteRow);

        //submitting data to DOM
        $('.table').append(tableRow);

        clearData();
        totalSalary();
    }

    function totalSalary() {
        var t = 0;
        var rows = $('tr.dataRow'); //creates array of rows as rows are added
        for (var i = 0; i < rows.length; i++) {
            t += $(rows[i]).data('salary');
        }
        $('span.salaryTotal').text(t.toFixed(2));
    }

    function clearData() { //clears form inputs
        $('.input').val('');
    }

    function deleteRow(e) { //deletes row and updates salary total
        console.log('delete button clicked');
        $(e.target.parentElement.parentElement).remove();
        totalSalary();
    }
}

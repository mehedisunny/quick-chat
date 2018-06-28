$(document).ready(function () {

  // login form submission
  $('#loginForm').on('submit', function (event) {
    event.preventDefault();

    var loginForm = $('#loginForm');

    var email = loginForm.find('#email').val();
    var password = loginForm.find('#password').val();

    if (email === "" || password === "") {
      $('.log-error').text('Please fill up all the fields');
      $('.log-error').show(500, function () {
        setTimeout(function () {
          $('.log-error').hide(500);
        }, 3000);
      });
    } else {
      $('.log-error').hide();
      $.ajax({
        url: '/login',
        type: "POST",
        dataType: 'json',
        data: {
          "email": email,
          "password": password
        },
        success: function (data) {

        },
        error: function (xhr) {
          
        }
      });
    }
  });
});
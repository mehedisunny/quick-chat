$(document).ready(function () {


  setInterval(function () {
    $.ajax({
      url: '/comments',
      type: "GET",
      dataType: 'json',
      contentType: "application/json",
      success: function (data) {
        console.log(data)
        var text = "";
        for (var i = 0; i < data.chatBody.length; i++) {
         text += "<div class=\"alert alert-secondary\" role=\"alert\">"+data.chatBody[i].chat_body+"</div>";
        }
        $('#chat-text').html(text);
      },
      error: function (xhr) {
        console.log(xhr)
      }
    });
  }, 2000);

  // login form submission
  $('#loginForm').on('submit', function (event) {
    event.preventDefault();

    var loginForm = $('#loginForm');

    var email = loginForm.find('#email').val();
    var password = loginForm.find('#password').val();

    var data = {
      email: email,
      password: password
    }

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
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
          if (data.status === 200) {
            window.location = '/';
          } else {
            $('.log-error').text('Invalid credential given');
            $('.log-error').show(500, function () {
              setTimeout(function () {
                $('.log-error').hide(500);
              }, 3000);
            });
          }
        },
        error: function (xhr) {
          console.log(xhr)
        }
      });
    }
  });


  // sign up form submission
  $('#signupForm').on('submit', function (event) {
    event.preventDefault();

    var signupForm = $('#signupForm');

    var email = signupForm.find('#email').val();
    var phone = signupForm.find('#phone').val();
    var password = signupForm.find('#password').val();

    var data = {
      email: email,
      phone: phone,
      password: password
    }

    if (email === "" || phone === "" || password === "") {
      $('.log-error').text('Please fill up all the fields');
      $('.log-error').show(500, function () {
        setTimeout(function () {
          $('.log-error').hide(500);
        }, 3000);
      });
    } else {
      $('.log-error').hide();
      $.ajax({
        url: '/sign-up',
        type: "POST",
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (suc) {
          if (suc.status === 200) {
            window.location = '/login';
          } else {
            $('.log-error').text('Failed to create account');
            $('.log-error').show(500, function () {
              setTimeout(function () {
                $('.log-error').hide(500);
              }, 3000);
            });
          }
        },
        error: function (xhr) {
          console.log(xhr)
        }
      });
    }
  });

  // chat form submission
  $('#chatForm').on('submit', function (event) {
    event.preventDefault();

    var chatForm = $('#chatForm');

    var chatBody = chatForm.find('#chatBody').val();

    var data = {
      chatBody: chatBody,
    }

    if (chatBody === "") {
      $('.log-error').text('Enter your text and hit enter');
      $('.log-error').show(500, function () {
        setTimeout(function () {
          $('.log-error').hide(500);
        }, 1000);
      });
    } else {
      $('.log-error').hide();
      $.ajax({
        url: '/postComment',
        type: "POST",
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (suc) {
          if (suc.status === 200) {

          } else {
            $('.log-error').text('Failed to post comment');
            $('.log-error').show(500, function () {
              setTimeout(function () {
                $('.log-error').hide(500);
              }, 3000);
            });
          }
        },
        error: function (xhr) {
          console.log(xhr)
        }
      });
      $('#chatBody').val('');
    }
  });
});
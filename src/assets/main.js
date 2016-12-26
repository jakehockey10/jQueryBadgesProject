$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/jakehockey10.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      for (var course of response.courses.completed) {
        $('#badges').append('<div class="course">' + course + '</div>');
      }
    }
  });

});

$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/jakehockey10.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      for (var course of response.courses.completed) {
        $('#badges').append('<div class="course"><h3>' + course.title + '</h3><img src="' + course.badge + '"><a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
      }
    }
  });

});

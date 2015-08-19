var people = [{
  firstName: 'Greg',
  lastName: 'Abes'
}];

people[0].secret = 'Won the Nobel Prize for Hospitality.';

$('#menuToggle').on('click', function() {
  $('nav ul').slideToggle({    //could also do .toggle(400)
      duration: 400
    });
});

$('a[data-remote=true]').on('click', function(ev) {
  ev.preventDefault();
  $.ajax({
    url: $(this).attr('href'),
    method: 'get',
    dataType: 'jsonp'
  });
});

function loadResults(data) {
  //this is a success callback?  or something... but it will receive data, server tells it to run this function.
  //other way to do this would be .success(function) after the ajax call
  if (data.firstName) {
    people.push(data);
  }
  else if (data.people){
    people = people.concat(data.people);

  }
  listPeople();
}

function listPeople() {
  $('#people').slideUp().empty();

  $.each(people, function(index, person) {
    var item = $('#template').clone().attr('id','');

    var newContent = item.html()
        .replace('{{person.firstName}}', person.firstName)
        .replace('{{person.lastName}}', person.lastName)
        .replace('{{person.secret}}', person.secret);

    item.html(newContent);
    item.removeClass('hidden');
    $('#people').append(item);
    $('#people').slideDown();

  });

}

listPeople();

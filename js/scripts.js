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

function loadResults() {
  console.log('worked');
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

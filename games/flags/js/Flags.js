var Flags = (function () {

  var init = function () {
    loadData();
  };

  var loadData = function () {
    $.ajax({
      url: "countries.json",
      dataType: "json",
      success: function (data) {
        console.log(data);
        var divsToAppend = "";
        $.each(data, function (index, item) {
          divsToAppend =
            '<div class="col-sm-3">' +
              '<div class="card mb-5" style="width: 20rem;">' +
                '<img class="card-img-top img-fluid" src="./svg/' + index + '.svg" alt="flag">' +
                '<div class="card-block">' +
                  '<h4 class="card-title">' + item + '</h4>' +
                  '<a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/w/index.php?search=' + item + '&title=Special%3ASearch&go=Go" class="btn btn-primary">Wikipedia</a>' +
                '</div>' +
              '</div>' +
            '</div>';

          $('#js-flag-list').append(divsToAppend);
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log('ERROR', textStatus, errorThrown);
      }
    });
  };

  return {
    init: init
  };

})();
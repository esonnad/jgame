console.log("Hello")
$("[data-page]").hide();
$("[data-page='home']").show();

function goToPage(link) {
  $("[data-page]").hide();
  $("[data-page=" + link + "]").show();
}

$("a").click(function(event) {
  event.preventDefault();
  var href = $(this).attr('href');
  goToPage(href);

})

//hide all the dibs with data-page, except the right one


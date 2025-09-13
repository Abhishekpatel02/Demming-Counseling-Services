$(".sort-select").on('change', function(){
var selected = $(this).find(":selected").attr("data-target");
$(".box").hide();
$(".box" + "." + selected).fadeIn();
if (selected == "all"){
		$(".box").fadeIn();
	}
});

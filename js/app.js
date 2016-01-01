$(document).ready(function(){
    setBindings();
});

function setBindings() {
    $("li a").click(function(e){
      var sectionID = e.currentTarget.id + "Section"

        $("html body").animate({
              scrollTop: $("#" + sectionID).offset().top
        }, 2000, 'easeOutExpo')
        return false;
        $(this).collapse('hide');
    })

}

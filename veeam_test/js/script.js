$(function () {
    //TABS CONTROL
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter('#tab_1').show();
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter("a[href$='#tab_1']").click();
    //END TABS CONTROL

    //POPUP CONTROL
    $('.youTubeVideo').click(function(){
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var centerDiv = $('.popup');
        var left = winWidth / 2 - ((parseInt(centerDiv.css("width"))) / 2);
        var top = winHeight / 2 - ((parseInt(centerDiv.css("height"))) / 2);
        centerDiv.css({'left': left,'top': top});
        $('.popup, .overlaybg').show();
        $("html,body").animate({scrollTop: 0}, 800);
        var linkSrc = $(this).parents('.videoImg').find('a').attr('rel');
        $('.popup .video-container').find('iframe').attr('src', linkSrc);
    });
    
    $('.close, .overlaybg').click(function(){
        $('.popup .video-container').find('iframe').attr('src', '');                          
        $('.popup, .overlaybg').hide();
    });
    //END POPUP CONTROL

    //SELECT OPTION (FOR USA COUNTRY)
    $('#country').change(function () {
        var countryName = $("#country option:selected").val();
        if(countryName === "USA") {
            var USAstates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"];
            $.each(USAstates, function(index,value) {
                $('#state').append($("<option>",{
                    value: value,
                    text: value
                }));
            });
        } else {
            $('#state')
                .find('option')
                .remove()
                .end()
                .append('<option selected="selected">Select state</option>')
            ;
        }
    });
     $('#country2').change(function () {
        var countryName = $("#country2 option:selected").val();
        if(countryName === "USA") {
            var USAstates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"];
            $.each(USAstates, function(index,value) {
                $('#state2').append($("<option>",{
                    value: value,
                    text: value
                }));
            });
        } else {
            $('#state2')
                .find('option')
                .remove()
                .end()
                .append('<option selected="selected">Select state</option>')
            ;
        }
    });
    //END SELECT OPTION (FOR USA COUNTRY)
});
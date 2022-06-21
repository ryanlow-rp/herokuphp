$(document).ready(function () {
    if (htmlBody !== "") {
        var _body = $('.article-content');
        if (_body.length === 1) {
            $('.article-content').append(htmlBody);
        }
        else {
            if ($('#main').length === 1)
                $('#main').append(htmlBody);
            else {
                if ($('#course_container').length === 1)
                    $('#course_container').append(htmlBody);
                else
                    $("#DeltaPlaceHolderMain").append(htmlBody);
            }
        }
    }
});
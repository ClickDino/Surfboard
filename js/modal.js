const validateFields = (form, fieldsArray) => {
    
}
$('.form').submit((e) => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const street = form.find("[name='street']");
    const home = form.find("[name='home']");
    const part = form.find("[name='part']");
    const appartment = form.find("[name='appartment']");
    const floor = form.find("[name='floor']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    [name, phone, street, home, part, appartment, floor, comment, to].forEach((field) => {
        field.removeClass("input-error");
        if (field.val().trim( == "") {
            field.addClass("input-error");
        })
    });

    

    const errorFields = form.find(".input-error");
    
    if(errorFields.length == 0) {
        $.ajax({
            url:"https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name:name.val(),
                phone:phone.val(),
                street:street.val(),
                home:home.val(),
                part:part.val(),
                appartment:appartment.val(),
                floor:floor.val(),
                comment:comment.val(),
                to:to.val(),
            }
        });
    }


    // $.fancybox.open({
    //     src: "#modal",
    //     type: "inline"
    // })
});

$('.app-submit-btn').click(e => {
    e.preventDefault();

    $.fancybox.close();
})
$(document).ready(function() {

    $('#btn_simpan').click(function() {
        var d = new Date();
        var n = d.getTime();

        // mendeklarasikan database firebase sekaligus childnya
        var database = firebase.database().ref().child('todo');

        database.push({
            id_list: n,
            judul: $('#todolist').val(),
            description: $('#description').val()
        });

        $("#form_list").trigger('reset');
        $('#message').html($('#berhasil_message').html());
    });

    // var json = [];
    // var db = firebase.database().ref().child('todo');
    // db.on('value', function(data) {
    //     json.push(data.val());
    //     console.log(json);
    //     // for (var i = 0; i < json.length; ++i) {
    //     //     $('#get_list').append('<div class=\"col-md-3 list\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-md-8\">'+json[i].judul+'</div><div class=\"col-md-4\"><button type=\"button\" class=\"close close_todo\" data-id=\"'+json[i].id_list+'\"><span>&times;</span></button></div></div></div><div class=\"panel-body\">'+json[i].description+'</div></div></div>');
    //     // }
    // });

    var db = firebase.database().ref().child('todo');
    db.on('value', function(data) {
        $('#get_list').empty();
        data.forEach(function(data) {
            // console.log(data.val());
            $('#get_list').append('<div class=\"col-md-3 list\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-md-8\">'+data.val().judul+'</div><div class=\"col-md-4\"><button type=\"button\" class=\"close close_todo\" data-id=\"'+data.val().id_list+'\"><span>&times;</span></button></div></div></div><div class=\"panel-body\">'+data.val().description+'</div></div></div>');
        });
    });

});

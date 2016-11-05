$(document).ready(function() {

    /*
    | Simpan Data
    */
    $('#btn_simpan').click(function() {

        // mendeklarasikan database firebase sekaligus childnya
        var database = firebase.database().ref().child('todo');

        database.push({
            judul: $('#todolist').val(),
            description: $('#description').val()
        });

        $("#form_list").trigger('reset');
        $('#message').html($('#berhasil_message').html());
    });

    /*
    | Tampil Data
    */
    var db = firebase.database().ref().child('todo');
    db.on('value', function(data) {
        $('#get_list').empty();
        data.forEach(function(data) {
            $('#get_list').append(
                '<div class=\"col-md-3 list\">' +
                    '<div class=\"panel panel-default\">' +
                        '<div class=\"panel-heading\">' +
                            '<div class=\"row\">' +
                                '<div class=\"col-md-8\">'+data.val().judul+'</div>' +
                                '<div class=\"col-md-4\">' +
                                    '<button type=\"button\" class=\"close close_todo\" data-key=\"'+data.key+'\"><span>&times;</span></button></div>' +
                            '</div>' +
                        '</div>' +
                        '<div class=\"panel-body\">'+data.val().description+'</div>' +
                    '</div>' +
                '</div>'
            );
        });
    });

    $(document).on('click', '.close_todo', function() {
        var key = $(this).data('key');
        if (confirm("Yakin mau dihapus?")) {
            db.child(key).remove();
            $('#message').html($('#hapus_message').html());
        }
        return false;
    });

});

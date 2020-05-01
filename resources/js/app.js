require('./jquery');
require('jquery-mask-plugin');

$(function () {
    $('.show-form-create').on('click', function () {
        $('#form-create').show();
    });

    $('.cancel').on('click', function () {
        $('#form-create').hide();
    });

    $('.create').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/contacts',
            data: $(this).serialize(),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (e) {
                let layout = "<tr>" +
                    "<th scope='row'>" + ++$('tbody tr').length + "</th>" +
                    "<td>" + e.surname + "</td>" +
                    "<td>" + e.name + "</td>" +
                    "<td>" + e.middle_name + "</td>" +
                    "<td>" + e.phone + "</td>" +
                    "<td data-id=" + e.id + ">" +
                    "<button class='btn btn-danger btn-sm mb-1 delete' type='button'>Удалить</button>\n" +
                    "<button class='btn btn-info btn-sm mb-1' type='button'>Изменить</button>\n" +
                    "</td>" +
                    "</tr>";
                $('tbody').html($('tbody').html() + layout);

                $('#form-create').hide();

                $('.form-control-create').each(function () {
                    $(this).val('');
                });
            },
        })
    });

    let dataOld = '';

    $('.table')
        .on('click', '.delete', function () {
            if (confirm('Вы уверены что хотите удалить контакт')) {
                $.ajax({
                    type: 'delete',
                    url: '/contacts/' + $(this).parent().data('id'),
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function (e) {
                        contactListLayout(e);
                    },
                });
            }
        })
        .on('click', '.edit', function () {
            let id = $(this).parents().data('id');
            let data = $('tr[data-contact=' + id + '] td[data-name]');

            data.each(function () {
                $(this).html('<input class="form-control" type="text" required="required" name="' + $(this).data('name') + '" value="' + $(this).text() + '">');
            });

            dataOld = $('tr[data-contact=' + id + '] td[data-name] input').serializeArray();

            $(this).addClass('save').removeClass('edit').text('Сохранить');

        })
        .on('click', '.save', function (e) {
            e.preventDefault();
            let id = $(this).parents().data('id');
            let data = $('tr[data-contact=' + id + '] td[data-name] input').serializeArray();
            if (confirm('Сохранить измеения?')) {
                $.ajax({
                    type: 'put',
                    url: '/contacts/' + $(this).parent().data('id'),
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    data: data,
                    success: function (e) {
                        $.each(data,function (key, item) {
                            $('tr[data-contact=' + id + '] td[data-name='+ item.name +']').html('').text(item.value);
                        });
                    },
                })
            } else {
                $.each(dataOld,function (key, item) {
                    $('tr[data-contact=' + id + '] td[data-name='+ item.name +']').html('').text(item.value);
                });
            }
            $(this).addClass('edit').removeClass('save').text('Изменить');
        });

    $('.search-from').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/search',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: $(this).serialize(),
            success: function (e) {
                contactListLayout(e);
            },
        })
    });

    $("input[name=phone]").mask("+7(999)999-99-99", {placeholder: "+7(___)___-__-__"});

    function contactListLayout(e) {
        let layout = '';
        e.forEach((element, index) => {
            layout += "<tr>" +
                "<th scope='row'>" + ++index + "</th>" +
                "<td data-name='surname'>" + element.surname + "</td>" +
                "<td data-name='name'>" + element.name + "</td>" +
                "<td data-name='middle_name'>" + element.middle_name + "</td>" +
                "<td data-name='phone'>" + element.phone + "</td>" +
                "<td data-id='" + element.id + "'>" +
                "<button class='btn btn-danger btn-sm mb-1 mr-1 delete' type='button'>Удалить</button>" +
                "<button class='btn btn-info btn-sm mb-1 edit' type='button'>Изменить</button>" +
                "</td>" +
                "</tr>";
        });
        $('tbody').html(layout);
    }
});

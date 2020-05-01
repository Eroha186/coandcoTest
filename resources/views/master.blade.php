<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Контактная книга</title>

        <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}">
    </head>
    <body>
        <div class="container pt-4">
            @include('blocks.search')

            @include('blocks.table')
        </div>
        <script src="{{ asset("js/app.js") }}"></script>
    </body>
</html>

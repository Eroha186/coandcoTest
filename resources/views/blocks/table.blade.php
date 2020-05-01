<table class="table table-striped">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Фамилия</th>
        <th scope="col">Имя</th>
        <th scope="col">Отчество</th>
        <th scope="col">Телефон</th>
        <th scope="col"></th>
    </tr>
    <tr id="form-create" style="display: none">
        <td></td>
        <form class="create">
            <td>
                <input class="form-control form-control-create" type="text" required="required" name="name" placeholder="Иванов">
            </td>
            <td>
                <input class="form-control form-control-create" type="text" required="required" name="surname" placeholder="Иван">
            </td>
            <td>
                <input class="form-control form-control-create" type="text" required="required" name="middle_name" placeholder="Иванович">
            </td>
            <td>
                <input class="form-control form-control-create" type="text" required="required" name="phone">
            </td>
            <td>
                <button class="btn btn-outline-primary btn-sm">Создать</button>
                <button class="btn btn-outline-secondary btn-sm cancel" type="button">Отменить</button>
            </td>
        </form>
    </tr>
    </thead>
    <tbody>
    @foreach($contacts as $contact)
        <tr data-contact="{{ $contact->id }}">
            <th scope="row">{{ $loop->iteration }}</th>
            <td data-name="surname">{{ $contact->surname }}</td>
            <td data-name="name">{{ $contact->name }}</td>
            <td data-name="middle_name">{{ $contact->middle_name }}</td>
            <td data-name="phone">{{ $contact->phone }}</td>
            <td data-id="{{ $contact->id }}">
                <button class="btn btn-danger btn-sm mb-1 mr-1 delete" type="button">Удалить</button>
                <button class="btn btn-info btn-sm mb-1 edit" type="button">Изменить</button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>


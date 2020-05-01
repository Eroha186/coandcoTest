@extends('master')

@php
    $title = 'Контакная книга'
@endphp

@section('content')
    <div class="container pt-4">
        @include('blocks.search')

        @include('blocks.table')
    </div>
@endsection

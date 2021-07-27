<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Jober</title>
    <!-- Styles -->
</head>

<body>
    <!-- React root DOM -->
    <div id="App">
    </div>
    <!-- React JS -->
    <script src="{{ asset('js/index.js') }}" defer></script>
</body>
</html>

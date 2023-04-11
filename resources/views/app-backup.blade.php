<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite([
            'resources/js/app.js', 
            "resources/js/Pages/{$page['component']}.vue",
        ])
        @inertiaHead

        <!-- <script src="http://localhost:8098"></script> -->
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
    <!-- <script>
        [
            'public/assets/js/layout.js',
            'public/assets/css/bootstrap.min.css',
            'public/assets/css/icons.min.css',
            'public/assets/css/app.min.css',
            'public/assets/css/custom.min.css',
            'public/assets/libs/bootstrap/js/bootstrap.bundle.min.js',
            'public/assets/libs/simplebar/simplebar.min.js',
            'public/assets/libs/node-waves/waves.min.js',
            'public/assets/libs/feather-icons/feather.min.js',
            'public/assets/js/pages/plugins/lord-icon-2.1.0.js',
            'public/assets/js/plugins.js',
            'public/assets/js/app.js'
        ]
    </script> -->
</html>

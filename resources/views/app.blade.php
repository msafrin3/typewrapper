<!doctype html>
<html lang="en" data-layout="horizontal" data-topbar="light" data-sidebar="dark" data-layout-position="fixed" data-layout-width="boxed" data-layout-mode="dark" data-body-image="img-1" data-preloader="disable">

    <head>

        <meta charset="utf-8" />
        <title inertia>{{ config('app.name') }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta property="og:title" content="Welcome To TypeRapper" />
        <meta property="og:type" content="game" />
        <meta property="og:description" content="Get your typing speed and compete with your friends now." />
        <meta property="og:image" content="https://typerapper.msafrin.net/storage/result/64e72bad9dc31.png" />
        <link href="https://typerapper.msafrin.net/storage/result/64e72bad9dc31.png" rel="image_src"/>
        <link rel="icon" href="{{ url('') }}/images/64ec21ce10b2d.png" />
        <meta property="og:image:width" content="400"/>
        <meta property="og:image:height" content="350"/>

        <meta content="Get your typing speed and compete with your friends now." name="description" />
        <meta content="https://typerapper.msafrin.net/storage/result/64e72bad9dc31.png" name="image" />
        <meta content="Safrin" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{ url('') }}/assets/images/favicon.ico">

        <!-- Layout config Js -->
        <script src="{{ url('') }}/assets/js/layout.js"></script>
        <!-- Bootstrap Css -->
        <link href="{{ url('') }}/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="{{ url('') }}/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <!-- App Css-->
        <link href="{{ url('') }}/assets/css/app.min.css" rel="stylesheet" type="text/css" />
        <!-- custom Css-->
        <link href="{{ url('') }}/assets/css/custom.min.css" rel="stylesheet" type="text/css" />
        <!-- Select2 -->
        <!-- <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" /> -->
        <!-- <link rel="stylesheet" type="text/css" href="{{ url('') }}/plugins/leaflet-1.9.4/leaflet.css" /> -->

        @routes
        @vite([
            'resources/js/app.js', 
            "resources/js/Pages/{$page['component']}.vue",
        ])
        @inertiaHead

    </head>

    <style>
        .pac-container {
            z-index: 10000 !important;
        }
    </style>

    <body>
        @inertia

        <!-- JAVASCRIPT -->
        <script src="{{ asset('plugins/jQuery/jquery-3.6.4.min.js') }}"></script>

        <script src="{{ url('') }}/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="{{ url('') }}/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="{{ url('') }}/assets/libs/node-waves/waves.min.js"></script>
        <script src="{{ url('') }}/assets/libs/feather-icons/feather.min.js"></script>
        <script src="{{ url('') }}/assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
        <!-- <script src="{{ url('') }}/assets/js/plugins.js"></script> -->

        <script src="" id="appScript"></script>
        <!-- <script src="{{ url('') }}/assets/js/app.js"></script> -->

        <!-- password-addon init -->
        <script src="{{ url('') }}/assets/js/pages/password-addon.init.js"></script>
        <!-- Select2 -->
        <!-- <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script> -->

        <!-- <script src="{{ url('') }}/plugins/leaflet-1.9.4/leaflet.js"></script> -->
    </body>

</html>
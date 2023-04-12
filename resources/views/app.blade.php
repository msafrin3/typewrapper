<!doctype html>
<html lang="en" data-layout="vertical" data-layout-mode="light" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable">

    <head>

        <meta charset="utf-8" />
        <title>Starter | Velzon - Admin & Dashboard Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesbrand" name="author" />
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

        @routes
        @vite([
            'resources/js/app.js', 
            "resources/js/Pages/{$page['component']}.vue",
        ])
        @inertiaHead

    </head>

    <body>
        @inertia

        <!-- JAVASCRIPT -->
        <script src="{{ asset('plugins/jQuery/jquery-3.6.4.min.js') }}"></script>

        <script src="{{ url('') }}/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="{{ url('') }}/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="{{ url('') }}/assets/libs/node-waves/waves.min.js"></script>
        <script src="{{ url('') }}/assets/libs/feather-icons/feather.min.js"></script>
        <script src="{{ url('') }}/assets/js/pages/plugins/lord-icon-2.1.0.js"></script>

        <!-- App js -->
        <script src="{{ url('') }}/assets/js/app.js"></script>

        <!-- password-addon init -->
        <script src="{{ url('') }}/assets/js/pages/password-addon.init.js"></script>
    </body>

</html>
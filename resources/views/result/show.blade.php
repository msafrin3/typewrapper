<!doctype html>
<html lang="en" data-layout="horizontal" data-topbar="light" data-sidebar="dark" data-layout-position="fixed" data-layout-width="boxed" data-layout-mode="dark" data-body-image="img-1" data-preloader="disable">

    <head>

        <meta charset="utf-8" />
        <title>Wow I can type {{ $result->correct }} WPM. How about you?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta name="og:title" content="Wow I can type {{ $result->correct }} WPM. How about you?" />
        <meta name="og:description" content="Get your typing speed and compete with your friends now." />
        <meta name="og:image" content="{{ url('') }}/images/64ec21ce10b2d.png" />

        <meta name="twitter:card" content="summary" data-react-helmet="true" />
        <meta name="twitter:url" content="{{ url('') }}/result/{{ $result->result_id }}" data-react-helmet="true" />
        <meta name="twitter:site" content="@msafrin3" data-react-helmet="true" />
        <meta name="twitter:title" content="Wow I can type {{ $result->correct }} WPM. How about you?" data-react-helmet="true" />
        <meta name="twitter:description" content="Get your typing speed and compete with your friends now." data-react-helmet="true" />
        <meta name="twitter:image" content="{{ url('') }}/images/64ec21ce10b2d.png" data-react-helmet="true" />

        <meta content="Get your typing speed and compete with your friends now." name="description" />
        <meta content="Safrin" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{ url('') }}/images/64ec21ce10b2d.png">

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


    </head>

    <style>
        .pac-container {
            z-index: 10000 !important;
        }
    </style>

    <body>
        <div id="layout-wrapper">
            <div class="main-content">

                <div class="page-content">
                    <div class="container-fluid">

                        <div class="row justify-content-center">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title mb-0">Result</h3>
                                    </div>
                                    <div class="card-body">
                                        <h1 class="text-center">{{ $result->correct }} WPM</h1>
                                        <div class="text-center"><small>(words per minute)</small></div>
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th>Correct Words</th>
                                                    <td align="right" class="text-success">{{ $result->correct }}</td>
                                                </tr>
                                                <tr>
                                                    <th>Wrong Words</th>
                                                    <td align="right" class="text-danger">{{ $result->incorrect }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="d-grid gap-2 mt-4">
                                            <div>Share your result with others: </div>
                                            <a class="btn btn-secondary"><i class="ri-facebook-circle-fill align-bottom fs-15"></i> Facebook</a>
                                            <a class="btn btn-info"><i class="ri-twitter-fill align-bottom fs-15"></i> Twitter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- container-fluid -->
                </div>
            </div>
        </div>

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
<!DOCTYPE html>
<html>
    <head>
        <title>Title of the document</title>
        <!-- Bootstrap Css -->
        <!-- <link href="{{ url('') }}/assets/css/bootstrap.css" rel="stylesheet" type="text/css" /> -->
    </head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600;700&display=swap");
        * {
            font-family: "Saira";
        }
        body {
            width: 400px;
            height: 400px;
        }
        .card {
            border: 1px solid #e6e6e6;
            border-radius: 6px;
        }
        .card-header {
            border-top-right-radius: 6px;
            border-top-left-radius: 6px;
            background: #4360a3;
            color: white;
            padding: 1rem;
            font-size: 20px;
            font-weight: 700;
        }
        .card-body {
            padding: 10px;
            background: #f6f6f6;
        }
        .text-center {
            text-align: center;
        }
        .result-label {
            font-size: 47px;
            font-weight: 600;
            color: #276727;
            text-shadow: 1px 1px 1px #111613;
        }
        .mt-3 {
            margin-top: 3rem;
        }
        .table {
            width: 100%;
            border-spacing: unset;
        }
        .table th {
            text-align: left;
        }
        th, td {
            padding: 5px;
        }
        /* .table tr:nth-child(odd) {
            background-color: red;
        }
        .table tr:nth-child(even) {
            background-color: white;
        } */
        .text-success {
            color: green;
        }
        .text-danger {
            color: red;
        }
    </style>
    <body>
        <div class="card">
            <div class="card-header">Your Performance</div>
            <div class="card-body">
                <div class="text-center result-label">{{ $correct }} WPM</div>
                <div class="text-center"><small>(words per minute)</small></div>
                <table class="table table-borderless table-striped mt-3">
                    <tbody>
                        <tr>
                            <td>Correct Words</td>
                            <td align="right" class="text-success">{{ $correct }}</td>
                        </tr>
                        <tr>
                            <td>Wrong Words</td>
                            <td align="right" class="text-danger">{{ $incorrect }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <script src="{{ asset('plugins/jQuery/jquery-3.6.4.min.js') }}"></script>
        <script src="{{ url('') }}/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
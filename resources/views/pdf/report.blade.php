<?php
use Illuminate\Support\Carbon;
$date = new Carbon($report->report_date);
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Title of the document</title>
    </head>
    <style type="text/css">
        * {
                font-family: sans-serif;
        }
        .upper {
                text-transform: uppercase;
        }

        .sqrbox {
                border: 1px solid black;        
        }

        .grid {
                font-size: small;
        /* color: #000; */
        font-family: Arial !important;
        }

        .grid table {
                font-size: x-small;
            border-collapse: collapse;
        }

        .grid table, .grid td, .grid th {
                border: 1px solid black;  
        }

        .table-summary {
                width: 90%;
                border-spacing: 1;
                border-color: white;
        }

        .table-summary th {
                background: #2363a4;
                color: white;
        }
        .table-summary tr:nth-child(odd) {
                background: #dfe7ef;
        }
        .table-summary tr:nth-child(even) {
                background: #a5c5e6;
        }
        .table-summary td {
                text-align: center;
        }
        .table-summary th, .table-summary td {
                padding: 4px;
        }


        .table-detail th {
                background: #2363a4;
                color: white;
        }
        .table-detail th, .table-detail td {
                padding: 3px;
        }

        .bencana-title {
                font-size: 12px;
                font-weight: bold;
                color: #2925db;
                margin: 20px;
        }

        #svgContainer {
                border: 1px solid black;
                border-radius: 20px;
                margin-bottom: 10px;
                width: 95%;
        }
        .page-break {
            page-break-after: always !important;
        }
    </style>
    <style type="text/css">
        table { page-break-inside:auto }
        tr    { page-break-inside:avoid; page-break-after:auto }
    </style>
    <script src="{{ url('') }}/plugins/jQuery/jquery-3.6.4.min.js"></script>
    <body>
        <table style="width:100%">
            <tr>
                <td style="width:100px">
                    <img src="{{ url('') }}/images/report_ico/jatanegara.png" style="width:94px" alt=''>
                </td>
                <td style="text-align:center;border-top:2px solid black;border-bottom:2px solid black">
                    <b>LAPORAN TERKINI KEJADIAN BENCANA<br/>DI SELURUH NEGARA</b><br/>
                    <!-- <b id="txtHeaderDatetime">(pada jam 12:36 PM, 22 Jun 2023)</b> -->
                    <b id="txtHeaderDatetime">(pada jam {{ $date->format('h:i A, d') }} {{ Bulan($date->format('m')) }} {{ $date->format('Y') }})</b>
                </td>
            </tr>
        </table>

        <!-- <table style="width:100%">
            <tr>
                <td>
                    <!-- <object id="mysvg" data="{{ url('') }}/malaysia_only.svg"> </object> -->
                    <table class="table-summary">
                        <tr>
                            <th>Bil</th>
                            <th>Negeri</th>
                            <th>Daerah</th>
                            <th>PPS Aktif</th>
                            <th>Keluarga</th>
                            <th>Mangsa</th>
                            <th>Kematian</th>
                        </tr>
                        <?php $count_state = 0; ?>
                        @foreach($data->disasters_by_state as $state)
                        <?php $count_state++; ?>
                        <tr>
                            <td>{{ $count_state }}</td>
                            <td>{{ $state->state }}</td>
                            <td>{{ number_format($state->total_district) }}</td>
                            <td>{{ number_format($state->total_pps_buka) }}</td>
                            <td>{{ number_format($state->total_keluarga) }}</td>
                            <td>{{ number_format($state->total_mangsa) }}</td>
                            <td>{{ number_format($state->total_kematian) }}</td>
                        </tr>
                        @endforeach
                    </table>
                </td>
                <td valign="top">
                    <table>
                        <tr>
                            <td style="padding:10px;text-align:center;"><img src='/images/report_ico/map.svg' style="width:60px" alt=''></td>
                            <td style="text-align:center">
                                <div><b style="font-size:20px;color:rgb(43, 119, 218)">{{ count($data->summary) > 0 ? $data->summary[0]->total_state : 0 }}</b></div>
                                <div>Negeri</div><br/>
                                <div><b style="font-size:20px;color:rgb(43, 119, 218)">{{ count($data->summary) > 0 ? $data->summary[0]->total_district : 0 }}</b></div>
                                <div>Daerah</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px;text-align:center;"><img src='/images/report_ico/users.svg' style="width:60px" alt=''></td>
                            <td style="text-align:center">
                                <div><b style="font-size:20px;color:rgb(43, 119, 218)">{{ count($data->summary) > 0 ? $data->summary[0]->total_keluarga : 0 }}</b></div>
                                <div>Keluarga</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px;text-align:center;"><img src='/images/report_ico/person.svg' style="height:70px" alt=''></td>
                            <td style="text-align:center">
                                <div><b style="font-size:20px;color:rgb(43, 119, 218)">{{ count($data->summary) > 0 ? $data->summary[0]->total_mangsa : 0 }}</b></div>
                                <div>Mangsa</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px;text-align:center;"><img src='/images/report_ico/shelter.svg' style="width:60px" alt=''></td>
                            <td style="text-align:center">
                                <div><b style="font-size:20px;color:rgb(43, 119, 218)">{{ count($data->summary) > 0 ? $data->summary[0]->total_pps_buka : 0 }}</b></div>
                                <div>PPS Aktif</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px;text-align:center;"><img src='/images/report_ico/shelter.svg' style="width:60px" alt=''><br><div style="text-align:center;color:red;font-weight: bold;">CLOSED</div></td>
                            <td style="text-align:center">
                                <div><b style="font-size:20px;color:rgb(43, 119, 218)">{{ count($data->summary) > 0 ? $data->summary[0]->total_pps_tutup : 0 }}</b></div>
                                <div>PPS Ditutup</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:10px;text-align:center;"><img src='/images/report_ico/dead.svg' style="width:60px" alt=''></td>
                            <td style="text-align:center">
                                <div><b style="font-size:20px;color:rgb(43, 119, 218)">{{ count($data->summary) > 0 ? $data->summary[0]->total_kematian : 0 }}</b></div>
                                <div>Kematian</div>
                            </td>
                        </tr>
                </table>
                </td>
            </tr>
        </table>

        <div class="page-break"></div> -->
    </body>

    <script>
        // var disasters_by_state = JSON.parse('<?php echo json_encode($data->disasters_by_state); ?>');
        // $(document).ready(function() {
        //     setTimeout(function() {
        //         var t = document.querySelector("#mysvg");
        //         var htmldocument = t.contentDocument;

        //         disasters_by_state.forEach(function(value,index) {
        //             Object.assign(htmldocument.getElementById("state" + value.state_id).style, {"display": "block"});
        //             Object.assign(htmldocument.getElementById("land" + value.state_id).style, {
        //                 "fill": getSeverity(value.total_mangsa),
        //                 "stroke": "black"
        //             });
        //         });
        //     }, 500);
        // });

        function getSeverity(total_mangsa) {
            var fill = 'white';
            if(total_mangsa > 0 && total_mangsa <= 1000) {
                fill = 'yellow';
            } else if(total_mangsa > 1000 && total_mangsa <= 5000) {
                fill = 'orange';
            } else if(total_mangsa > 5000) {
                fill = 'red';
            }
            return fill;
        }
    </script>
</html>
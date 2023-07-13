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
    </style>
    <style type="text/css">
        table { page-break-inside:auto }
        tr    { page-break-inside:avoid; page-break-after:auto }
    </style>
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

    <table style="width:100%">
        <tr>
            <td>
                <object data="{{ url('') }}/malaysia_only.svg"> </object>
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
                    <tr>
                        <td>1</td>
                        <td>Pulau Pinang</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                    </tr>
                </table>
            </td>
            <td valign="top">
                <table>
                    <tr>
                        <td style="padding:10px;text-align:center;"><img src='/images/report_ico/map.svg' style="width:60px" alt=''></td>
                        <td style="text-align:center">
                            <div><b style="font-size:20px;color:rgb(43, 119, 218)">12</b></div>
                            <div>Negeri</div><br/>
                            <div><b style="font-size:20px;color:rgb(43, 119, 218)">12</b></div>
                            <div>Daerah</div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px;text-align:center;"><img src='/images/report_ico/users.svg' style="width:60px" alt=''></td>
                        <td style="text-align:center">
                            <div><b style="font-size:20px;color:rgb(43, 119, 218)">12</b></div>
                            <div>Keluarga</div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px;text-align:center;"><img src='/images/report_ico/person.svg' style="height:70px" alt=''></td>
                        <td style="text-align:center">
                            <div><b style="font-size:20px;color:rgb(43, 119, 218)">12</b></div>
                            <div>Mangsa</div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px;text-align:center;"><img src='/images/report_ico/shelter.svg' style="width:60px" alt=''></td>
                        <td style="text-align:center">
                            <div><b style="font-size:20px;color:rgb(43, 119, 218)">12</b></div>
                            <div>PPS Aktif</div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px;text-align:center;"><img src='/images/report_ico/shelter.svg' style="width:60px" alt=''><br><div style="text-align:center;color:red;font-weight: bold;">CLOSED</div></td>
                        <td style="text-align:center">
                            <div><b style="font-size:20px;color:rgb(43, 119, 218)">12</b></div>
                            <div>PPS Ditutup</div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px;text-align:center;"><img src='/images/report_ico/dead.svg' style="width:60px" alt=''></td>
                        <td style="text-align:center">
                            <div><b style="font-size:20px;color:rgb(43, 119, 218)">12</b></div>
                            <div>Kematian</div>
                        </td>
                    </tr>
            </table>
            </td>
        </tr>
    </table>
    </body>
</html>
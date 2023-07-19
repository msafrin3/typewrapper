<?php
use Illuminate\Support\Carbon;
$date = new Carbon($report->report_date);
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Title of the document</title>
    </head>
    <style>
        .page-break {
            page-break-after: always;
        }
        /* @media print {
            .page-bread {
                page-break-after: auto !important;
            }
        } */
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
        <div class="page-break"></div>
        <h1>Header 2</h1>
    </body>
</html>
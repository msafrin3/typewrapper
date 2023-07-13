<?php

use Illuminate\Support\Carbon;

function Bulan($num){
	switch($num){
		case 1:return "Januari";break;
		case 2:return "Februari";break;
		case 3:return "Mac";break;
		case 4:return "April";break;
		case 5:return "Mei";break;
		case 6:return "Jun";break;
		case 7:return "Julai";break;
		case 8:return "Ogos";break;
		case 9:return "September";break;
		case 10:return "Oktober";break;
		case 11:return "November";break;
		case 12:return "Disember";break;
	}
}
<?php

namespace App\Jobs;

use App\Models\Result;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class ScreenshotResult implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $result;

    /**
     * Create a new job instance.
     */
    public function __construct(Result $result)
    {
        $this->result = $result;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $url = route('type.screenshot', ['result_id' => $this->result->result_id]);
        $output_path = storage_path().'/app/public/result/'.$this->result->result_id.'.png';
        $path = env('WKHTML_IMG_BINARY');
        $command = "$path --width 400 --height 350 $url $output_path > debug.log 2>&1";

        shell_exec($command);

        try {
            $this->result->update(['screenshot' => '/storage/result/' . $this->result->result_id . '.png']);
        } catch(\Exception $e) {
            Log::error($e);
        }
    }
}

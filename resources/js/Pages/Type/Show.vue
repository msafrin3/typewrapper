<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import { onMounted } from 'vue';

const props = defineProps({
    result: Object
});

$("meta[name='image]").attr('content', route('type.index') + props.result.screenshot);
$("meta[property='og:title']").attr('content', 'Wow I can type ' + props.result.correct + ' WPM. How about you?');
$("meta[property='og:image']").attr('content', route('type.index') + props.result.screenshot);
// $("link[rel='icon']").attr('href', route('type.index') + props.result.screenshot);

</script>

<template>
    <Head :title="'Wow I can type ' + result.correct + ' WPM. How about you?'" />

    <MainLayout>
        <div class="row justify-content-center">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Result</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="text-center">{{ result.correct }} WPM</h1>
                        <div class="text-center"><small>(words per minute)</small></div>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>Correct Words</th>
                                    <td align="right" class="text-success">{{ result.correct }}</td>
                                </tr>
                                <tr>
                                    <th>Wrong Words</th>
                                    <td align="right" class="text-danger">{{ result.incorrect }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-grid gap-2 mt-4">
                            <div>Share your result with others: </div>
                            <Link class="btn btn-secondary"><i class="ri-facebook-circle-fill align-bottom fs-15"></i> Facebook</Link>
                            <Link class="btn btn-info"><i class="ri-twitter-fill align-bottom fs-15"></i> Twitter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
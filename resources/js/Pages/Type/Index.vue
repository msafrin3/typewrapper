<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import { onMounted, reactive, ref } from 'vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import Swal from 'sweetalert2';

const props = defineProps({
    result: Object
});

let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
let limit_text = 70;
let array_text = text.split(' ');
let display_text = ref('');
let count = 0;
let index_active = 1;
let correct = 0;
let incorrect = 0;
let input = reactive({
    value: null
});
let finished = ref(false);

let data = reactive({
    result_id: null,
    count: 0,
    correct: 0,
    incorrect: 0
});

let renderWord = (words) => {
    shuffle(words);
    words = words.splice(0, limit_text);
    words.forEach(function(value) {
        count++;
        display_text.value += '<div class="word me-2 px-2 py-1 mb-2 rounded-3 fs-18 word-'+count+'">'+ value +'</div>';
    });
}

let checking = (event) => {
    // start timer
    if(timerIsActive.value == 'inactive') {
        startTimer();
    }
    var word = $(".word-" + index_active).text();
    var text = input.value;
    if(text == null || text == '') {
        setActive(index_active);
    }
    if(word.match(text) == null) {
        setWrong(index_active);
    } else {
        setActive(index_active);
    }
    // if spacebare is pressed
    if(event.key === ' ') {
        text = text.trim();
        if(text === word) {
            setCorrect(index_active);
            data.correct++;
        } else {
            console.log('wrong');
            setWrong(index_active);
            data.incorrect++;
        }
        index_active++;
        input.value = '';

        if(index_active == limit_text + 1) {
            count = 0;
            index_active = 1;
            display_text = ref('');
            renderWord(array_text);
            $(".word").removeClass('text-danger text-success');
        }
        setActive(index_active);
        data.count++;
    }
}

let setActive = (index) => {
    $(".word").removeClass('bg-light');
    $(".word-" + index).removeClass('text-success text-danger');
    $(".word-" + index).addClass('bg-light');
}

let setCorrect = (index) => {
    $(".word-" + index).removeClass('text-danger');
    $(".word-" + index).addClass('text-success');
}

let setWrong = (index) => {
    $(".word-" + index).removeClass('text-success');
    $(".word-" + index).addClass('text-danger');
}

let reset = () => {
    $(".words-content").html('');
    display_text.value = '';
    data.count = 0;
    data.correct = 0;
    data.incorrect = 0;
    count = 0;
    index_active = 1;
    renderWord(array_text);
    input.value = '';
    $(".form-control").focus();
    resetTimer();
    finished.value = false;
}

const timer = ref(60);
const timerIsActive = ref('inactive');
let intervalId;

const startTimer = () => {
    timerIsActive.value = 'active';
    intervalId = setInterval(() => {
        timer.value--;
        if(timer.value == 0) {
            recordResult();
        }
    }, 1000);
}

const resetTimer = () => {
    timer.value = 60;
    timerIsActive.value = 'inactive';
    clearInterval(intervalId);
}

let recordResult = () => {
    resetTimer();
    timerIsActive.value = 'stop';
    $(".words-content").html('');
    saveResult();
}

let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let strPadLeft = (inputString, padLength, padCharacter) => {
    const paddingLength = Math.max(0, padLength - inputString.length);
    const padding = padCharacter.repeat(paddingLength);
    return padding + inputString;
}

let saveResult = () => {
    router.post(route('type.store'), data, {
        onSuccess: (response) => {
            finished.value = true;
            if(response.props.response.success) {
                Swal.fire('Congratulation!', 'Your score is ' + data.correct + ' WPM', 'success');
                data.result_id = response.props.response.success;
            }
        }
    });
}

onMounted(() => {
    renderWord(array_text);
    setTimeout(function() {
        setActive(index_active);
    }, 500);
    $(".form-control").focus();
});

</script>

<template>
    <Head title="Welcome" />

    <MainLayout>
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">Improve Your Typing Speed</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                            <li class="breadcrumb-item active">Starter</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>

        <div class="d-flex flex-wrap justify-content-center words-content" v-html="display_text"></div>

        <div class="d-flex gap-2">
            <input type="text" class="form-control fs-17" placeholder="Start typing..." v-model="input.value" @keyup="checking">
            <div class="d-flex align-items-center bg-light rounded-3 height-100 p-2 fs-17" v-if="timerIsActive == 'inactive' || timerIsActive == 'stop'">01:00</div>
            <div class="d-flex align-items-center bg-light rounded-3 height-100 p-2 fs-17" v-else>00:{{ timer.toString().padStart(2, '0') }}</div>
            <button type="button" class="btn btn-secondary" @click="reset"><i class="ri-refresh-line"></i></button>
        </div>

        <div class="row mt-4">
            <div class="col-md-4" v-if="finished">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title mb-0">Result: {{ data.result_id }}</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="text-center">{{ data.correct }} WPM</h1>
                        <div class="text-center"><small>(words per minute)</small></div>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>Correct Words</th>
                                    <td align="right" class="text-success">{{ data.correct }}</td>
                                </tr>
                                <tr>
                                    <th>Wrong Words</th>
                                    <td align="right" class="text-danger">{{ data.incorrect }}</td>
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

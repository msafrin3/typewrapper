<script setup>
import Choices from 'choices.js';
import { onMounted, defineEmits } from 'vue';

const props = defineProps({
    placeholder: String,
    type: String,
    removeItemButton: {
        type: Boolean,
        default: true
    },
    id: String
});

let choice;

onMounted(() => {
    choice = new Choices($("#" + props.id)[0], {
        removeItems: true,
        removeItemButton: props.removeItemButton,
        placeholderValue: props.placeholder
    });
});

const emit = defineEmits(['getValue']);

const getValueEvent = () => {
    emit('getValue', choice.getValue(true));
}

</script>

<template>
    <select :id="id" class="form-control" data-choices data-choices-removeItem v-bind:[type]="true" @change="getValueEvent">
        <slot />
    </select>
</template>
<script>
import { Link } from '@inertiajs/vue3';
import { getCurrentInstance, onMounted } from 'vue';

const app = getCurrentInstance();
export default {
    components: {
        Link
    },
    props: {
        links: Array
    },
    data() {
        return {
            currentProtocol: ''
        }
    },
    mounted() {
        this.currentProtocol = window.location.protocol;
    }
}
</script>

<template>
    <div>
        <div class="btn-group">
            <Component 
                v-for="link in links"
                :key="link.id"
                :is="link.url ? 'Link' : 'span'" 
                :href="link.url ? (currentProtocol == 'https:' ? link.url.replace('http:', 'https:') : link.url) : null" 
                v-html="link.label" 
                class="btn"
                :class="{ 'disabled': !link.url, 'btn-primary': link.active, 'btn-light': !link.active }"
            />
        </div>
    </div>
</template>
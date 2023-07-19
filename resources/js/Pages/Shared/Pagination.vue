<script>
    import { Link } from '@inertiajs/vue3';
    export default {
        components: {
            Link
        },
        props: {
            links: Array
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
                :href="link.url" 
                v-html="link.label" 
                class="btn"
                :class="{ 'disabled': !link.url, 'btn-primary': link.active, 'btn-light': !link.active }"
            />
        </div>
    </div>
</template>
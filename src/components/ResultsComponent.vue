<template>
    <div class="Results">
        <h3></h3>
    </div>

</template>


<script>
    import { AppState } from '../AppState'
    import { computed, reactive } from 'vue'

    export default {
        name: 'Results',
        setup() {
            const state = reactive({
                results: computed(() => AppState.results)
            })
            return {
                state
            }
        },
        components: {

        }
    }

</script>


<style>

</style>
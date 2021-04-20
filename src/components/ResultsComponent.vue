<template>
    <div class="Results">

    </div>

</template>


<script>
    import { AppState } from '../AppState'
    import { computed, reactive } from 'vue'
    import { picturesService } from '../services/PicturesService'

    export default {
        name: 'results',
        setup() {
            const state = reactive({
                results: computed(() => Appstate.results)
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
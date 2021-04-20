<template>
    <div class="component container-fluid">
        <div class="row">
            <div class="col">
                <h2>Choose Date</h2>
                <form @submit.prevent="search">
                    <label for="picture">Astronomy Picture of the Day!</label>
                    <input type="text" name="picture" id="picture" placeholder="yyyy-mm-dd" v-model="state.query">
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <Results />
            </div>
        </div>
    </div>

</template>



<script>
    import { reactive } from 'vue'
    import { picturesService } from "../services/PicturesService"
    import Results from "../components/ResultsComponent"

    export default {
        name: 'HomePage',
        setup() {
            const state = reactive({
                query: ''
            })
            return {
                state,
                async search() {
                    try {
                        await picturesService.getPicture(state.query)
                    } catch (error) {
                        console.error(error)
                    }
                }
            }
        },
        components: {
            Results
        }
    }

</script>



<style>

</style>
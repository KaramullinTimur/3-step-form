<template>
    <section class="section">
        <div class="container">
            <form class="section__form" @submit.prevent>
                <h1 class="section__title">Форма</h1>

                <Step1 v-if="step === 1" />
                <Step2 v-if="step === 2"/>
                <Step3 v-if="step === 3"/>

                
            </form>
        </div>
    </section>
</template>

<script>
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'

export default {
    name: 'App',
    data() {
        return {

        }
    },
    computed: {
        step() {
            return this.$store.state.step;
        }
    },
    methods: {
        
    },
    components: {
        Step1, Step2, Step3
    }
}
</script>

<style lang="scss">
    @import url('./assets/scss/base.scss');
    @import url('./assets/scss/fonts.scss');
    @import url('./assets/scss/variables.scss');
    @import url('./assets/scss/common.scss'); 

    .section {
        margin: 80px 0;
    }
    .section__form {
        padding: 20px 45px 40px;
        min-height: 420px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.123);
        display: flex;
        flex-direction: column;
    }
    .section__title {
        margin-bottom: 24px;
        text-align: center;
    }
</style>

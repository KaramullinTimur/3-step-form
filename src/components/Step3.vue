<template>
    <div class="step-3">
        <h2 class="step-3__title">Форма заполнена успешно</h2>
        <div class="step-3__item">
            Имя: {{ data.name }}
        </div>
        <div class="step-3__item">
            Email: {{ data.email }}
        </div>
        <div class="step-3__item">
            Телефон: {{ data.tel }}
        </div>
        <button 
            class="step-3__button button"
            @click="reset"
        >
            Начать заново
        </button>
    </div>
</template>

<script>
export default {
    computed: {
        data() {
            return this.$store.state.data;
        },
    },
    methods: {
        reset() { 
            this.$store.commit('reset');
        }
    }
}
</script>

<style lang="scss">
    .step-3 {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .step-3__title {
        font-size: 18px;
        margin-bottom: 24px;
        text-align: center;
    }
    .step-3__item {
        margin-bottom: 18px;
    }
    .step-3__button {
        display: block;
        margin: 0 auto;
        margin-top: auto;
    }
</style>
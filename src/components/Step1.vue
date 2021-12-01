<template>
    <div class="step-1">
        <div class="step-1__item">
            <label for="input-name" class="label">
                Введите имя
            </label>
            <input 
                type="text"
                class="input" id="input-name"
                placeholder="Введите имя"
                v-model="name"
                @input="saveName" @blur="saveName"
            >
            <div 
                class="message"
                v-if="nameInvalid"
            >
                *Имя должно быть не короче 2-ух символов
            </div>
        </div>

        <div class="step-1__item">
            <label for="input-email" class="label">
                Введите Email
            </label>
            <input 
                type="text"
                class="input" id="input-email"
                placeholder="some@some.some"
                v-model="email"
                @input="saveEmail" @blur="saveEmail"
            >
            <div 
                class="message"
                v-if="emailInvalid"
            >
                *Неверный формат почты
            </div>
        </div>

        <div class="buttons">
            <button 
                class="button"
                @click="previousStep"
            >
                Назад
            </button>

            <button 
                class="button"
                @click="nextStep"
            >
                Далее
            </button>
        </div>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            nameInvalid: false,
            emailInvalid: false,
        }
    },
    computed: {
        step() {
            return this.$store.state.step;
        }     
    },
    methods: {
        validateName() {
            if(this.name.trim().length > 2) { 
                this.nameInvalid = false;
            } else { 
                this.nameInvalid = true;
            }
        },
        validateEmail() {
            const reg = /\S+@\S+\.\S+/;
            if(reg.test(this.email)) {
                this.emailInvalid = false;
            } else { 
                this.emailInvalid = true;
            }
        },
        func() {
            alert('a')
        },
        saveName() {
            this.validateName();
            if(!this.nameInvalid) {
                this.$store.commit('saveName', this.name);
            }
        },
        saveEmail() {
            this.validateEmail();
            if(!this.emailInvalid) {
                this.$store.commit('saveEmail',this.email);
            }
        },
        nextStep() {
            this.validateName();
            this.validateEmail();
            if(!this.nameInvalid && !this.emailInvalid) {
                if(this.step < 3) this.$store.commit('nextStep');
            }
        },
        previousStep() {
            if(this.step > 1) this.$store.commit('previousStep');
        },
    },
    mounted() {
        this.name = this.$store.state.data.name;
        this.email = this.$store.state.data.email;
    }
}
</script>

<style lang="scss">
    .step-1 {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .step-1__item {
        margin-bottom: 36px;
    }
</style>
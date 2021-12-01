import { createStore } from 'vuex'

export default createStore({
    state: {
        step: 1,
        data: {
            name: '',
            email: '',
            tel: '',
        },
        nameInvalid: false,
        emailInvalid: false,
        telInvalid: false,
    },
    mutations: {
        nextStep(state) {
            state.step++;
        },
        previousStep(state) {
            state.step--;
        },
        saveName(state, name) {
            state.data.name = name;
        },
        saveEmail(state, email) {
            state.data.email = email;
        },
        saveTel(state, tel) {
            state.data.tel = tel;
        },
        validateName(state, value) {
            state.nameInvalid = value;
        },  
        validateEmail(state, value) {
            state.emailInvalid = value;
        }, 
        validateTel(state, value) {
            state.telInvalid = value;
        }, 
        reset(state) {
            state.step = 1;
            state.data.name = '';
            state.data.email = '';
            state.data.tel = '';
            state.nameInvalid = false;
            state.emailInvalid = false;
            state.telInvalid = false;
        }
    }
})

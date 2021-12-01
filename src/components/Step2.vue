<template>
    <div class="step-2">
        <div class="step-2__item">
            <label for="input-name" class="label">
                Введите номер телефона
            </label>
            <input 
                type="text"
                class="input" id="input-name"
                v-model="mask"
                @keydown="telMask"
                @blur="saveTel"
            >
            <div 
                class="message"
                v-if="telInvalid"
            >
                *Неверный формат телефонного номера
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
            mask: "+7(___) - ___ - __ - __",
            telInvalid: false,
        }
    },
    computed: {
        step() {
            return this.$store.state.step;
        } 
    },
    methods: {
        validateTel(value) {
            const reg = /^\+[0-9]\(\d{3}\) - \d{3} - \d{2} - \d{2}$/;
            if(reg.test(value)) {
                this.telInvalid = false;
            } else { 
                this.telInvalid = true;
            }
        },
        saveTel(e) {
            this.validateTel(e.target.value);
            if(!this.telInvalid) {
                this.$store.commit('saveTel', e.target.value);
            }
        },
        nextStep() {
            this.validateTel(this.mask);
            if(!this.telInvalid) {
                if(this.step < 3) this.$store.commit('nextStep');
            }
        },
        previousStep() {
            if(this.step > 1) this.$store.commit('previousStep');
        },
        telMask(event) {
            // Это моя старая функция времен изучения JS

            let flag = false;
            // Key code to a symbol
            let key = String.fromCharCode(event.keyCode); 
            
            // If the symbol is a number
            if(/\d/.test(key)) {
                let arr = event.target.value.split(""); 

                // Moves the cursor to accessible area
                if(event.target.selectionStart == 0) { 
                    event.target.setSelectionRange(1, 1);
                } 
                if(event.target.selectionStart == 2) { 
                    event.target.setSelectionRange(3, 3);
                } 
                if(event.target.selectionStart == 6 || event.target.selectionStart == 7 || event.target.selectionStart == 8 || event.target.selectionStart == 9) { 
                    event.target.setSelectionRange(10, 10);
                } 
                if(event.target.selectionStart == 13 || event.target.selectionStart == 14 || event.target.selectionStart == 15){ 
                    event.target.setSelectionRange(16, 16);
                } 
                if(event.target.selectionStart == 18 || event.target.selectionStart == 19 || event.target.selectionStart == 20){ 
                    event.target.setSelectionRange(21, 21);
                }
                
                // Write the number in accessible area of "___"
                if( event.target.selectionStart == 1 || event.target.selectionStart == 3 || event.target.selectionStart == 4 || event.target.selectionStart == 5 || 
                    event.target.selectionStart == 10 || event.target.selectionStart == 11 || event.target.selectionStart == 12 ||
                    event.target.selectionStart == 16 || event.target.selectionStart == 17 || event.target.selectionStart == 21 || event.target.selectionStart == 22) {
                    
                        let a = event.target.selectionStart;
                        arr[event.target.selectionStart] = "";
                        event.target.value = arr.join("");
                        event.target.setSelectionRange(a, a); 
                    } 

                // Limits the length of the input
                if(event.target.selectionStart == 23) {
                    event.preventDefault();
                }
            } 

            // If the symbol is a letter or SPACE
            else if(/[a-zA-Z]/.test(key) || event.keyCode == 32) {
                event.preventDefault();
            }

            // If the symbol is BACKSPACE
            else if(event.keyCode == 8) {
                let arr = event.target.value.split(""); 
                
                // Skip and don't delete some symbols (_- ()+)
                while(arr[event.target.selectionStart-1] == "_" ||
                    arr[event.target.selectionStart-1] == "-" ||
                    arr[event.target.selectionStart-1] == " " ||
                    arr[event.target.selectionStart-1] == "(" ||
                    arr[event.target.selectionStart-1] == ")" ||
                    arr[event.target.selectionStart-1] == "+") { 
                        
                        event.target.setSelectionRange(event.target.selectionStart-1, event.target.selectionStart-1); 
                        event.preventDefault();

                        flag = true; //This flag prevents immediate running of rhe next condition
                }

                // Delete a number from accessible area of "___"
                if(flag == false) {
                    if(event.target.selectionStart == 2 || event.target.selectionStart == 4 || event.target.selectionStart == 5 || event.target.selectionStart == 6 || 
                    event.target.selectionStart == 11 || event.target.selectionStart == 12 || event.target.selectionStart == 13 ||
                    event.target.selectionStart == 17 || event.target.selectionStart == 18 || event.target.selectionStart == 22 || event.target.selectionStart == 23) {
                    
                        event.preventDefault();
                        let a = event.target.selectionStart;
                        arr[a-1] = "_";
                        event.target.value = arr.join("");
                        event.target.setSelectionRange(a-1, a-1); 
                        
                    } 
                }
                flag = false; //This flag prevents immediate running of rhe previous condition
            }

            // If the symbol is DELETE
            else if(event.keyCode == 46) {
                let arr = event.target.value.split(""); 

                // Skip and don't delete some symbols (_- ()+)
                while(arr[event.target.selectionStart] == "_" ||
                    arr[event.target.selectionStart] == "-" ||
                    arr[event.target.selectionStart] == " " ||
                    arr[event.target.selectionStart] == "(" ||
                    arr[event.target.selectionStart] == ")" ||
                    arr[event.target.selectionStart] == "+") { 

                    event.preventDefault();
                    event.target.setSelectionRange(event.target.selectionStart+1, event.target.selectionStart+1);

                    flag = true; //This flag prevents immediate running of rhe next condition 
                } 
            

                // Delete a number from accessible area of "___"
                if(flag == false) {
                    if(event.target.selectionStart == 1 || event.target.selectionStart == 3 || event.target.selectionStart == 4 || event.target.selectionStart == 5 || 
                    event.target.selectionStart == 10 || event.target.selectionStart == 11 || event.target.selectionStart == 12 ||
                    event.target.selectionStart == 16 || event.target.selectionStart == 17 || event.target.selectionStart == 21 || event.target.selectionStart == 22) {
                        
                        event.preventDefault();
                        let a = event.target.selectionStart;
                        arr[a] = "_";
                        event.target.value = arr.join("");
                        event.target.setSelectionRange(a+1, a+1); 
                            
                    } 
                }
                flag = false;
            }
        }
    },
    mounted() {
        let currentTel = this.$store.state.data.tel
        if(currentTel) this.mask = currentTel;
    }
}
</script>

<style lang="scss">
    .step-2 {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .step-2__item {
        margin-bottom: 36px;
    }
</style>
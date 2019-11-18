
/* eslint-disable */

import KnightService from './../../service/knight-service'
import router from "./../../router"
import  moment from 'moment'

export default { 
    name: 'KnightDetail',  
    data() {        
        return{
            errors: {name: '', nickname: '', weapon: '', keyAttribute: '', equippedError: ''},
            message: '',
            weapons: [
                {name: 'ESPADA LONGA', mod: 3, attr: 'strength', equipped: false},
                {name: 'POLEAXE', mod: 3, attr: 'strength', equipped: false},
                {name: 'ARCO LONGO', mod: 3, attr: 'dexterity', equipped: false},
                {name: 'ADAGA', mod: 1, attr: 'dexterity', equipped: false}

            ],        
            knight:{name: '', nickname: '', birthday: '', weapons: [], keyAttribute: '', 
                    attributes: {
                        strength: 0, dexterity: 0, 
                        constitution: 0, intelligence: 0, 
                        wisdom: 0, charisma: 0
                    },
                    removed: false,
                    keyAttribute: ''
                }
         }    
     },
     async mounted(){                     
        var response = await KnightService.getknightForId(this.$route.params.id);                                  
        this.knight = response.data;
    },       
    methods:{
        formatDate(dateString){
            return moment(dateString).format( "DD-MM-YYYY");
        },            
        
        updateKnight(){           

            if(!this.knight.nickname){
                this.errors.nickname = "O apelido não pode ser vazio."
            }else{
                KnightService.update(this.knight);               
                this.message = "Cavaleiro atualizado com sucesso.";
                this.errors = {nickname: ''};
            }        
                           
        }
    }
  }



  
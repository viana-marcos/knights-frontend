
/* eslint-disable */

import KnightService from './../../service/knight-service' 

export default { 
    name: 'Knights',  
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
    methods:{
        onChange($event, weapon) {            
            this.knight.weapons.forEach((item)=> {item.equipped = false});
            weapon.equipped = true;           
        },
        isEquipped(){
            var weapon = this.knight.weapons.find(item => item.equipped);
            if(weapon != null || weapon != undefined)
               return true;               
            return false;
        },
        postKnight(){
            var hasErro = false
            if (!this.knight.name) {
                this.errors.name = 'O nome é obrigatório.';
                hasErro = true;
            }

            if(!this.knight.nickname){
                this.errors.nickname = 'Campo apelido obrigatório.';
                hasErro = true;
            }           

            if(this.knight.birthday === ''){
                this.errors.birthday = 'Data de nascimento obrigatório.';
                hasErro = true;
            }

            if(this.knight.weapons.length === 0){
                this.errors.weapon = 'Selecione pelo menos uma arma.';
                hasErro = true;
            }

            if(!this.knight.keyAttribute){
                this.errors.keyAttribute = 'Atributo chave obrigatório.';
                hasErro = true;
            }

            if(!this.knight.keyAttribute){
                this.errors.keyAttribute = 'Atributo chave obrigatório.';
                hasErro = true;
            }
            if(!this.isEquipped()){
                this.errors.equippedError = 'Selecione e equipe uma arma.';
                hasErro = true;
            }

            if(!hasErro){
                var data = KnightService.post(this.knight);              
                this.message = "Cavaleiro salvo com sucesso."
                //this.errors = {name: '', nickname: '', weapons: ''};
            }

            return;
                           
        }
    }
  }



  
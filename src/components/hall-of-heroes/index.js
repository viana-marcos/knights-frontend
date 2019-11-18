
/* eslint-disable */
import KnightService from './../../service/knight-service' 
export default {  
    name: 'Heroes',  
    data() {        
        return {
            heroestList: []           
          }    
    },
    methods:{
        calculateAge: (birthday)=>{ 
            return  KnightService.calculateAge(birthday);       
        },
        calculateExperience(birthday){
            return  KnightService.calculateExperience(birthday);  
        },        
        calculateAttack(hero){
            return  KnightService.calculateAttack(hero);  
        }
    },        
    async mounted(){
        var response = await KnightService.getHeroes();             
        this.heroestList = response.data;
    }

  }; 


  
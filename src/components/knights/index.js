
/* eslint-disable */
import KnightService from './../../service/knight-service'
import router from "./../../router" 
export default {  
    name: 'HallOfHeroes',      
    data() {        
        return {
            knightList: []           
          }    
    },
    methods:{
        remove: (id)=>{ 
            KnightService.remove(id).then(function (response) {
                router.push('/hall-of-heroes')
                return response;
            }).catch((e) => {
                console.error(e)
            });        
        },
        detail: (id)=>{            
            self.$router.push('/knight-detail/' + id);
        },
        calculateAge: (birthday)=>{ 
            return  KnightService.calculateAge(birthday);       
        },
        calculateExperience(birthday){
            return  KnightService.calculateExperience(birthday);  
        },        
        calculateAttack(knight){
            return  KnightService.calculateAttack(knight);  
        }
    },        
    async mounted(){
        self = this;
        var response = await KnightService.getknight();             
        this.knightList = response.data;
    }

  }; 


  
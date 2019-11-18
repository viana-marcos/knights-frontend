/* eslint-disable */
import { environment } from "./../environment"
import axios from "axios";

class knightService {

    constructor() { }

    post(knight) {
        return axios.post(environment.baseURl + 'knight/post', {
            data: knight
        }).then(function (response) {
            return response;
        }).catch((e) => {
            console.error(e)
        })
    }

    update(knight) {
        return axios.put(environment.baseURl + 'knight/update', {
            data: knight
        }).then(function (response) {
            return response;
        }).catch((e) => {
            console.error(e)
        })
    }

    async remove(id) {
        return axios.put(environment.baseURl + 'knight/delete', {
            data: id
        }).then(function (response) {
            return response;
        }).catch((e) => {
            console.error(e)
        })
    }

    async getknight() {
        return axios.get(environment.baseURl + 'knight')
            .then(function (response) {               
                return response;
            }).catch((e) => {
                console.error(e)
            })
    }

    async getknightForId(id) {
        return axios.get(environment.baseURl + 'knight/' + id)
            .then(function (response) {                          
                return response;
            }).catch((e) => {
                console.error(e)
            })
    }

    async getHeroes() {
        return axios.get(environment.baseURl + 'knight/heroes')
            .then(function (response) {               
                return response;
            }).catch((e) => {
                console.error(e)
            })
    }

    

    calculateAge(birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);        
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    calculateExperience(birthday) {
        var age = this.calculateAge(birthday);
        return Math.floor((age - 7) * Math.pow(22, 1.45));
    }

    calculateAttack(knight) {
        return 10 + this.getMod(knight) + this.getEquipedWeapon(knight).mod;
    }

    getMod(knight) {
        var value = knight.attributes[knight.keyAttribute];
        if (value <= 8)
            return -2;
        if (value > 8 || value <= 10)
            return -1;
        if (value > 10 || value <= 12)
            return 0;
        if (value > 12 || value <= 15)
            return 1;
        if (value > 15 || value <= 18)
            return 2;
        if (value > 18 || value <= 20)
            return 3;
           
        return -2;    
    }

    getEquipedWeapon(knight){
        return knight.weapons.find(item => item.equipped);
    }
}

export default new knightService();

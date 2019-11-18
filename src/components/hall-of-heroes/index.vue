/* eslint-disable */
<template>
    <div>
        <div class="card">
            <div class="card-header">
                Hall of Heroes
            </div>
            <div class="card-body">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Armas</th>
                            <th scope="col">Atributos</th>
                            <th scope="col">Ataque</th>
                            <th scope="col">Exp</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr v-for="(hero, index) in heroestList" v-bind:key="index">
                            <td>{{hero.name}}</td>
                            <td>{{calculateAge(hero.birthday)}}</td>
                            <td>{{hero.weapons.length}}</td>
                            <td>{{hero.keyAttribute}}</td>
                            <td>{{calculateAttack(hero)}}</td>
                            <td>{{calculateExperience(hero)}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
 </template>
<script src="./index.js"></script>
<style src="./index.css"></style>

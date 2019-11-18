/* eslint-disable */
<template>
    <div>
        <div class="card">
            <div class="card-header">
                Lista de cavaleiro
            </div>
            <div class="card-body">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Armas</th>
                            <th scope="col">Atributo</th>
                            <th scope="col">Ataque</th>
                            <th scope="col">Exp</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr v-for="(knight, index) in knightList" v-bind:key="index">
                            <td>{{knight.name}}</td>
                            <td>{{calculateAge(knight.birthday)}}</td>
                            <td>{{knight.weapons.length}}</td>
                            <td>{{knight.keyAttribute}}</td>
                            <td>{{calculateAttack(knight)}}</td>
                            <td>{{calculateExperience(knight)}}</td>
                            <td>
                               <button type="button" class="btn btn-danger" v-on:click="remove(knight._id)">Remover</button>
                               <button type="button" class="btn btn-primary" v-on:click="detail(knight._id)">update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
 </template>
<script src="./index.js"></script>
<style src="./index.css"></style>

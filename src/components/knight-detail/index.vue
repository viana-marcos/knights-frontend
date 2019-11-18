/* eslint-disabled */
<template>
    <div class="card">
        <div class="card-header">
            Detalhe
        </div>
        <div class="card-body">
            <div class="alert" v-bind:class="{ 'alert-success': message }" role="alert">
             {{message}}
            </div>
           <form>
             <div class="form-row">
                    <div class="col">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" class="form-control" disabled="true" v-bind:class="{ 'input-error': errors.name }" id="name" v-model="knight.name" aria-describedby="emailHelp" placeholder="Nome">
                            <small class="form-text error">{{errors.name}}</small>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="nickname">Apelido</label>
                            <input type="text"  v-model="knight.nickname" v-bind:class="{ 'input-error': errors.nickname }" class="form-control" id="nickname" placeholder="Apelido">
                            <small class="form-text error">{{errors.nickname}}</small>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <div class="form-group">
                            <label for="birthday">Data de aniversário: </label><span> {{formatDate(knight.birthday)}}</span>
                        </div>
                    </div>
                </div>

                Armas:
                <div class="form-row">
                   <div class="col" v-bind:class="{ 'input-error': errors.equippedError }">
                      <div class="input-group input-group-sm mb-2">
                         <label v-for="(weapon, index) in knight.weapons" v-bind:key="index">
                           <input type="radio" disabled="true" v-model="knight.weapons[index].equipped" @change="onChange($event, weapon)" name="equipped">{{weapon.name}}</label>
                         </div>
                    </div>
                </div>
                <small class="form-text error">{{errors.equippedError}}</small><br />
                Atributos:
                <div class="form-row">
                    <div class="col">
                       <div class="input-group input-group-sm mb-2">
                           <div class="input-group-prepend">
                                <span class="input-group-text">Força</span>
                            </div>
                            <input type="number" disabled="true" min="0" max="20" v-model="knight.attributes.strength" class="form-control">
                        </div>
                    </div>
                    <div class="col">
                       <div class="input-group input-group-sm mb-2">
                           <div class="input-group-prepend">
                                <span class="input-group-text">Destreza</span>
                            </div>
                            <input type="number" disabled="true" min="0" max="20" v-model="knight.attributes.dexterity" class="form-control">
                        </div>
                    </div>
                    <div class="col">
                       <div class="input-group input-group-sm mb-2">
                           <div class="input-group-prepend">
                                <span class="input-group-text">Constituição</span>
                            </div>
                            <input type="number" disabled="true" min="0" max="20" v-model="knight.attributes.constitution" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                       <div class="input-group input-group-sm mb-2">
                           <div class="input-group-prepend">
                                <span class="input-group-text">Inteligência</span>
                            </div>
                            <input type="number" disabled="true" min="0" max="20" v-model="knight.attributes.intelligence" class="form-control">
                        </div>
                    </div>
                     <div class="col">
                       <div class="input-group input-group-sm mb-2">
                           <div class="input-group-prepend">
                                <span class="input-group-text">Sabedoria</span>
                            </div>
                            <input type="number" disabled="true" min="0" max="20" v-model="knight.attributes.wisdom" class="form-control">
                        </div>
                    </div>
                     <div class="col">
                       <div class="input-group input-group-sm mb-2">
                           <div class="input-group-prepend">
                                <span class="input-group-text">Carisma</span>
                            </div>
                            <input type="number" disabled="true" min="0" max="20" v-model="knight.attributes.charisma" class="form-control">
                        </div>
                    </div>
                </div><br />
                Atributo chave: {{knight.keyAttribute}}
                <br />
                <button class="btn btn-primary" type="button" v-on:click="updateKnight">Atualizar Cavaleiro</button>
            </form>
        </div>
    </div>
 </template>
<script src="./index.js"></script>

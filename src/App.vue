<template>
  <div id="app" class="container" style="padding-top:70px">
     <div class="row justify-content-md-center">
     <div class="col-md-auto">
        <nav class="nav">
            <router-link class="nav-link active" to="/knights">Lista de Cavaleiros</router-link>
            <router-link class="nav-link" to="/post-knight">Novo Cavaleiro</router-link>
            <router-link class="nav-link" to="/hall-of-heroes">Hall of Heroes</router-link>
        </nav>
     </div>
     </div>
     <div class="row justify-content-md-center" style="padding-top:40px">
        <div class="col-md-auto">
           <router-view/>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

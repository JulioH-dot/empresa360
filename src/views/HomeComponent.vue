<template>
  <div>
      <nav class="navbar navbar-light bg-light menu-superior">
          <div class="container">
              <a class="navbar-brand" href="#">Empresa <span>360</span></a>
              <div class="navbar-nav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <router-link class="nav-link" to="/">Sair</router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

      <div class="d-flex">
          <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" :to="{name: 'dashboard'}" exact-active-class="active-exact">
                    <i class="bi bi-speedometer2"></i> Dashboard
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{name: 'vendasPadrao'}" exact-active-class="active-exact">
                    <i class="bi bi-cart"></i> Vendas
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{name: 'leads'}" exact-active-class="active-exact">
                    <i class="bi bi-caret-right"></i> Leads
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{name: 'contratos'}" exact-active-class="active-exact">
                    <i class="bi bi-caret-right"></i> Contratos
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{name: 'servicos'}" exact-active-class="active-exact">
                    <i class="bi bi-card-checklist"></i> Serviços
                </router-link>
          </div>

          <div class="w-100">
              <nav aria-label="breadcrumb" class="pt-1 ps-3">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page">Home</li>
                  </ol>
              </nav>

              <div class="container-fluid">
                  <router-view></router-view>
              </div>

          </div>
      </div>
      <div class="rodape">
        <h3>Empresa<span>360</span></h3>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  }
}
</script>



<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}

/*
.router-link-exact-active{
    color: #fff;
    background-color: #0d6efd;
    border-color:#0d6efd;
}*/

.active-exact{
    color: #fff;
    background-color: #0d6efd;
    border-color:#0d6efd; 
}
span{
    color:#0d6efd;
}

.rodape{
    position: fixed;
    left: 0;
    margin: 0;
    width: 100%;
    bottom: 0;
    background:#ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

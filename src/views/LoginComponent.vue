<template>
  <div>
      <nav class="navbar navbar-light bg-light menu-superior">
          <div class="container">
              <a class="navbar-brand" href="#">Empresa 360</a>
              <div class="navbar-nav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <router-link class="nav-link" to="/">Voltar</router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

      <div class="row mt-5">
          <div class="col-6 offset-3">
              <div class="card">
                  <p class="card-header">Entrar</p>
                  <div class="card-body">
                      <div class="mb-3">
                          <input type="email" class="form-control" placeholder="E-mail">
                      </div>
                      <div class="mb-3">
                          <input type="password" class="form-control" placeholder="Senha">
                      </div>
                      <button class="btn btn-primary" @click="navegarPara()">Login</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Login',
  components: {
   
  },
  methods:{
    navegarPara(){
      //console.log('objeto de roteamento: ', this.$router)
      

      //este método poderia ser o método de validação de login
      // coletando os dados do e-mail e senha 
      // realizar uma requisição http
      // receber o token de autenticação
      // por fim fazer o roteamento da rota home da aplicação 
      //usando o método push


      
      this.$router.push('/home') // vai para a rota pretendida gravando no histórico de navegação
      //this.$router.replace('/home') = vai para a rota mas alterando a url sem gravar no histórico de nagação do browser
      //this.$router.forward() = avança nas rotas de navegação existentes no histórico do browser
      // this.$router.back() = faz ao contrário do de cima ele retrocede porém usando o histórico de navegação do browser
      // this.$router.go() =  avança ou retrocede dependendo do parâmetro passado a ele se for um número inteiro negativo ele retrocede se for positivo ele avança, também utilizando o histórico de navegação do browser utilizado
    }
  }
}
</script>

<style>

</style>

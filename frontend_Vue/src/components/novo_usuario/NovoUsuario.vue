<template>
  <div class="container">

    <div>
      <h1>Novo usuário.</h1>
    </div>

    <form @submit.prevent="enviarFormulario()">

      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="usuario.nome">
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" class="form-control" v-model="usuario.email">
      </div>

      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha">
      </div>

      <button class="btn btn-primary" type="submit">Salvar</button>

    </form>

  </div>
</template>

<script>

import users from '../../connection/users'

export default {

  data: function() {
    return {
      usuario: {
        nome: '',
        senha: '',
        email: ''
      }
    }
  },
  methods: {
    enviarFormulario ()  {
        users.post('auth/register', this.usuario)
          .then(resposta => {
            console.log(resposta);
            this.$router.push({ name: 'login' })})
          .catch(erro => console.log(erro))
    }
  }

}
</script>

<template>
  <div class="container" @keypress="catchKey" tabindex="0">
    <Modal :title="modalTitle" :open="modalOpened" @close="closeModal">  
      <template slot="content">
        <blockquote>
          <p>Debido a nuevas políticas de seguridad, a partir de hoy, 22 de Enero del 2019, usted es reponsable de la seguridad de sus archivos. Para saber como reforzar y manejar la seguridad de su cuenta, lea la <a href="#">Documentación.</a></p>
          <caption>TI & Information Security</caption>
        </blockquote>
      </template>
      <template slot="actions">
        <button class="decline">Declinar</button>
        <button class="accept">Aceptar</button>
      </template>
    </Modal>
    <h1>Presiona O para abrir la modal</h1>
  </div>
</template>

<style>
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  .container {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    user-select: none;
  }
  blockquote {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }
  blockquote p {
    text-align: justify;
  }
  blockquote caption {
    color: #777;
    display: block;
    font-size: 15px;
    font-style: italic;
    margin-top: 20px;
    text-align: right;
  }
  a {
    color: #0099cc;
    text-decoration: none;
  }
  button {
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    font-family: 13px;
    padding: 10px 20px;
    text-transform: uppercase;
  }
  button.decline {
    border-color: #FFA538;
    color: #FFA538;
    margin-right: 10px;
  }
  button.accept {
    background-color: #007BD0;
    border-color: #007BD0;
    color: #fff;
  }
</style>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Modal from './modal.vue'

  @Component({
    components: {
      Modal
    }
  })
  export default class App extends Vue {
    modalTitle = 'Alerta de seguridad'
    modalOpened = false
    MODAL_TRIGGER = 111

    catchKey(e: KeyboardEvent) {
      if (e.keyCode === this.MODAL_TRIGGER) {
        this.modalOpened = true
      }
    }
    closeModal() {
      this.modalOpened = false
    }
  }
</script>


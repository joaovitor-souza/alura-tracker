<template>
  <div class="notificacoes">
    <article class="message" :class="contexto[notificacao.type]" v-for="notificacao in notificacoes" :key="notificacao.id">
      <div class="message-header">
        {{ notificacao.title }}
      </div>
      <div class="message-body">
        {{ notificacao.text }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { TipoNotificacao } from '@/Interfaces/INotificacao';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificacoesComponent',
  data() {
    return{
      contexto: {
        [TipoNotificacao.SUCESSO]: 'is-success',
        [TipoNotificacao.ATENCAO]: 'is-warning',
        [TipoNotificacao.FALHA]: 'is-danger'
      }
    }
  },
  setup() {
    const store = useStore()
    return {
      notificacoes: computed(() => store.state.notificacoes)
    }
  }
})
</script>

<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 2;
}
</style>
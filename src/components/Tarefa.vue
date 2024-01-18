<template>
  <Box>
    <div class="columns onclick" @click="tarefaClicada">
      <div class="column is-4">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'Nenhum projeto cadastrado ' }}
      </div>
      <div class="column">
        <Cronometro :tempo-em-segundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>
<script lang="ts">
import ITarefa from '@/Interfaces/ITarefa';
import Cronometro from './Cronometro.vue';
import { PropType, defineComponent } from 'vue';
import Box from './Box.vue';

export default defineComponent({
  name: 'TarefaComponent',
  emits: ['aoTarefaClicada'],
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  setup(props, { emit }) {

    const tarefaClicada = (): void => {
      emit('aoTarefaClicada', props.tarefa)
    }

    return {
      tarefaClicada
    }
  }
})
</script>
<style scoped>
.onclick {
  cursor: pointer;
}
</style>






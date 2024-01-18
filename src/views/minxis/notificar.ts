import { TipoNotificacao } from "@/Interfaces/INotificacao"
import { NOTIFICAR } from "@/store/tipo-mutacoes"
import { store } from '@/store'

export const notificarMinxis = {
  methods: {
    notificar(type: TipoNotificacao, title: string, text: string): void {
      store.commit(NOTIFICAR, {
        title,
        text,
        type
      })
    }
  }
}
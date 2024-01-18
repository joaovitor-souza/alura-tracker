import { TipoNotificacao } from "@/Interfaces/INotificacao"
import { NOTIFICAR } from "@/store/tipo-mutacoes"
import { store } from "@/store"

type Notificador = {
  notificar: (type: TipoNotificacao, title: string, text: string ) => void
}

export default (): Notificador => {
  const notificar = (type: TipoNotificacao, title: string, text: string) : void => {
    store.commit(NOTIFICAR, {
      title,
      text,
      type
    })
  } 

  return {
    notificar 
  }
}
export enum TipoNotificacao {
  SUCESSO,
  FALHA,
  ATENCAO
}

export interface INotificacao {
  title: string
  text: string
  type: TipoNotificacao
  id: number
}
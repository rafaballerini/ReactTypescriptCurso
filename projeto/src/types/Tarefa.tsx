export interface ITarefa {
    id: number,
    tempo: string,
    tarefa: string,
    selecionado?: boolean;
    completado?: boolean,
}
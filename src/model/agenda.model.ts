import { AbstractEntity } from "./abstract-entity.model"
import { Medico } from "./medico.model"
import { Paciente } from "./paciente.model"
import { Statusagendamento } from "./status-agendamento.model"

export class Agenda extends AbstractEntity {

    satatusAgendamento!: Statusagendamento
    dataDe!: Date
    dataAte!: Date
    encaixe!: boolean
    paciente!: Paciente
    medico!: Medico
    nome!: string
    custo!: number
}
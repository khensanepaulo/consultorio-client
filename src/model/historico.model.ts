import { AbstractEntity } from "./abstract-entity.model"
import { Agenda } from "./agenda.model"
import { Paciente } from "./paciente.model"
import { Secretaria } from "./secretaria.model"
import { Statusagendamento } from "./status-agendamento.model"

export class Historico extends AbstractEntity {
    observacao!: string
    data!: Date
    secretaria!: Secretaria
    paciente!: Paciente
    agenda!: Agenda
    statusagendamento!: Statusagendamento

}
import { Especialidade } from "./especialidade.model"
import { Pessoa } from "./pessoa.model"

export class Medico extends Pessoa {

    CRM!: string
    porcParticipacao!: number
    consultorio!: string
    valorConsulta!: number
    especialidade!: Especialidade
}
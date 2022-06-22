import { Convenio } from "./convenio.model"
import { Pessoa } from "./pessoa.model"
import { TipoAtendimento } from "./tipo-atendimento.model"

export class Paciente extends Pessoa {
    numeroCartaoConvenio!: string
    dataVencimento!: Date
    tipoAtendimento!: TipoAtendimento
    convenio!: Convenio

}
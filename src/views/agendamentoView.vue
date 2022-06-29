<template>

    <div>
        <div class=" is-12 " style="font-size:30px">
            Agendamento
        </div>
    </div>
    <div class="">
        <div class="field column is-4">
            <div class="control" style="display: flex;">
                <input class="input fas fa-info-circle" type="text" placeholder="pesquisa">
                <button class="button is-link" style="margin-left: 10px;">Buscar</button>
                <button class="button is-success" style="left: 120%;">
                    <router-link to="/agendamentoForm">Novo</router-link>
                </button>
            </div>
        </div>
    </div>

    <div class="field column is-10">
        <table class="table is-bordered is-fullwidth" style="margin-top:100px; text-align: center;">
            <thead>
                <tr>
                    <th><abbr title="Data de">Data de</abbr></th>
                    <th><abbr title="Data até">Data até</abbr></th>
                    <th><abbr title="Encaixe">Encaixe</abbr></th>
                    <th><abbr title="paciente">Paciente</abbr></th>
                    <th><abbr title="Medico">Medico</abbr></th>
                    <th><abbr title="Nome">Nome</abbr></th>
                    <th><abbr title="Custo">Custo</abbr></th>
                    <th><abbr title="Opcoes">Opcoes</abbr></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>01/02/2022</td>
                    <td>01/02/2022</td>
                    <td>Não</td>
                    <td>Arminda</td>
                    <td>Julio</td>
                    <td>Odo</td>
                    <td>150</td>
                    <td>
                        <button class="button is-warning is-small">
                            <router-link to="/agendamentoForm">editar</router-link>
                        </button>
                        <button class="button is-danger is-small" style="margin-left: 10px;">excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss">
@import "~bulma/bulma.sass";
</style>
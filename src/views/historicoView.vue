<template>

    <div>
        <div class=" is-12 " style="font-size:30px">
            Histórico
        </div>
    </div>
    <div class="">
        <div class="field column is-4">
            <div class="control" style="display: flex;">
                <input class="input fas fa-info-circle" type="text" placeholder="pesquisa">
                <button class="button is-link" style="margin-left: 10px;">Buscar</button>
                <button class="button is-success" style="left: 120%;">
                    <router-link to="/historicoForm">Novo</router-link>
                </button>
            </div>
        </div>
    </div>

    <div class="field column is-10">
        <table class="table is-bordered is-fullwidth" style="margin-top:100px; text-align: center;">
            <thead>
                <tr>
                    <th><abbr title="Id">Id</abbr></th>
                    <th><abbr title="Observação">Observação</abbr></th>
                    <th><abbr title="Data">Data</abbr></th>
                    <th><abbr title="Secretaria">Secretária</abbr></th>
                    <th><abbr title="Paciente">Paciente</abbr></th>
                    <th><abbr title="Agenda">Agenda</abbr></th>
                    <th><abbr title="StatusAgendamento">Status</abbr></th>
                    <th><abbr title="Agenda">Opções</abbr></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nada a acrescentar</td>
                    <td>03/04/2022</td>
                    <td>Maria</td>
                    <td>Marcos</td>
                    <td>aaa</td>
                    <td>Pendente</td>
                    <td>
                        <button class="button is-warning is-small">
                            <router-link to="/historicoForm">editar</router-link>
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
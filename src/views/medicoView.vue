<template>

    <div>
        <div class=" is-12 " style="font-size:30px">
            Médico
        </div>
    </div>
    <div class="">
        <div class="field column is-4">
            <div class="control" style="display: flex;">
                <input class="input fas fa-info-circle" type="text" placeholder="pesquisa">
                <button class="button is-link" style="margin-left: 10px;">Buscar</button>
                <button class="button is-success" style="left: 120%;">
                    <router-link to="/medicoForm">Novo</router-link>
                </button>
            </div>
        </div>
    </div>

    <div class="field column is-10">
        <table class="table is-bordered is-fullwidth" style="margin-top:100px; text-align: center;">
            <thead>
                <tr>
                    <th><abbr title="Id">Id</abbr></th>
                    <th><abbr title="Nome">Nome</abbr></th>
                    <th><abbr title="CRM">CRM</abbr></th>
                    <th><abbr title="PorcPart">%-Participação</abbr></th>
                    <th><abbr title="Consultório">Consultório</abbr></th>
                    <th><abbr title="ValorConsulta">ValorConsulta</abbr></th>
                    <th><abbr title="especialidade">Especialidade</abbr></th>
                    <th><abbr title="Opcoes">Opções</abbr></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Arminda</td>
                    <td>53634367</td>
                    <td>10%</td>
                    <td>3</td>
                    <td>150</td>
                    <td>Cardiologista</td>
                    <td>
                        <button class="button is-warning is-small">
                            <router-link to="/medicoForm">editar</router-link>
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
<template>

    <div>
        <div class=" is-12 " style="font-size:30px">
            Secretária
        </div>
    </div>
    <div class="">
        <div class="field column is-4">
            <div class="control" style="display: flex;">
                <input class="input fas fa-info-circle" type="text" placeholder="pesquisa">
                <button class="button is-link" style="margin-left: 10px;">Buscar</button>
                <button class="button is-success" style="left: 120%;">Novo</button>
            </div>
        </div>
    </div>

    <div class="field column is-10">
        <table class="table is-bordered is-fullwidth" style="margin-top:100px; text-align: center;">
            <thead>
                <tr>
                    <th><abbr title="Position">Id</abbr></th>
                    <th><abbr title="Nome">Nome</abbr></th>
                    <th><abbr title="Salário">Salário</abbr></th>
                    <th><abbr title="dataContratacao">dataContratacao</abbr></th>
                    <th><abbr title="Opcoes">Opções</abbr></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Amanda</td>
                    <td>1500</td>
                    <td>05/03/2020</td>
                    <td>
                        <button class="button is-warning is-small">editar</button>
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
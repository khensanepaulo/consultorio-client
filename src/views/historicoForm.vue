<template>

    <div>
        <div class=" is-12 " style="font-size:30px">
            Histórico
        </div>
    </div>
    <div class="">
        <div class="field column is-4">
            <div class="control" style="display: flex;">
                <button class="button is-warning" style="left: 250%;">
                    <router-link to="/historico">Voltar</router-link>
                </button>
            </div>
        </div>
    </div>

    <div class="field column is-10">

        <div class="control column is-5">
            <label class="label">Observação</label>
            <input class="input" type="text" placeholder="Observação">
        </div>

        <div class="control column is-5">
            <label class="label">Data</label>
            <input class="input" type="date">
        </div>

        <div class="control column is-5">
            <label class="label">Secretária</label>
            <input class="input" type="text" placeholder="Secretária">
        </div>

        <div class="control column is-5">
            <label class="label">Paciente</label>
            <input class="input" type="text" placeholder="Paciente">
        </div>

        <div class="control column is-5">
            <label class="label">Agenda</label>
            <input class="input" type="text" placeholder="Agenda">
        </div>

        <div class="control column is-5">
            <label class="label">Status</label>
            <input class="input" type="text" placeholder="Status">
        </div>
        <button class="button is-link" style="margin-left: 10px;">Salvar</button>
    </div>

</template>
<style lang="scss">
@import "~bulma/bulma.sass";
</style>
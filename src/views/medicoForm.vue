<template>

    <div>
        <div class=" is-12 " style="font-size:30px">
            Medico
        </div>
    </div>
    <div class="">
        <div class="field column is-4">
            <div class="control" style="display: flex;">
                <button class="button is-warning" style="left: 250%;">
                    <router-link to="/medico">Voltar</router-link>
                </button>
            </div>
        </div>
    </div>

    <div class="field column is-10">

        <div class="control column is-5">
            <label class="label">Nome</label>
            <input class="input" type="text" placeholder="Nome da esoecialidade">
        </div>

        <div class="control column is-5">
            <label class="label">CRM</label>
            <input class="input" type="text" placeholder="CRM">
        </div>

        <div class="control column is-5">
            <label class="label">%-Participação</label>
            <input class="input" type="text" placeholder="%-Participação">
        </div>

        <div class="control column is-5">
            <label class="label">Consultório</label>
            <input class="input" type="text" placeholder="Consultório">
        </div>

        <div class="control column is-5">
            <label class="label">ValorConsulta</label>
            <input class="input" type="text" placeholder="ValorConsulta">
        </div>

        <div class="control column is-5">
            <label class="label">Especialidade</label>
            <input class="input" type="text" placeholder="Especialidade">
        </div>
        <button class="button is-link" style="margin-left: 10px;">Salvar</button>
    </div>

</template>
<style lang="scss">
@import "~bulma/bulma.sass";
</style>
<template>

    <div>
        <div class=" is-12 " style="font-size:30px">
            Agendamento
        </div>
    </div>
    <div class="">
        <div class="field column is-4">
            <div class="control" style="display: flex;">
                <button class="button is-warning" style="left: 250%;">
                    <router-link to="/agendamento">Voltar</router-link>
                </button>
            </div>
        </div>
    </div>

    <div class="field column is-12">

        <div class="field column is-2">
            <label class="label">Data de</label>
            <input class="input" type="date">
        </div>

        <div class="field column is-2">
            <label class="label">Data ate</label>
            <input class="input" type="date">
        </div>

        <div class="control column is-3">
            <label class="label">Encaixe</label>
            <label class="radio">
                <input type="radio" name="answer">
                Sim
            </label>
            <label class="radio">
                <input type="radio" name="answer">
                Nao
            </label>
        </div>

        <div class="control column is-5">
            <label class="label">Paciente</label>
            <input class="input" type="text" placeholder="Paciente">
        </div>

        <div class="control column is-5">
            <label class="label">Medico</label>
            <input class="input" type="text" placeholder="Medico">
        </div>

        <div class="control column is-5">
            <label class="label">Nome</label>
            <input class="input" type="text" placeholder="Nome">
        </div>

        <div class="control column is-5">
            <label class="label">Custo</label>
            <input class="input" type="text" placeholder="Custo">
        </div>

        <button class="button is-link" style="margin-left: 10px;">Salvar</button>
    </div>

</template>
<style lang="scss">
@import "~bulma/bulma.sass";
</style>
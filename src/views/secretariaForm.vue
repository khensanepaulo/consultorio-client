<template>

    <div>
        <div class=" is-12 " style="font-size:30px">
            Secretarias
        </div>
    </div>
    <div class="">
        <div class="field column is-4">
            <div class="control" style="display: flex;">
                <button class="button is-warning" style="left: 250%;">
                    <router-link to="/secretaria">Voltar</router-link>
                </button>
            </div>
        </div>
    </div>

    <div class="field column is-10">

        <div class="control column is-5">
            <label class="label">Nome</label>
            <input class="input" type="text" placeholder="Nome">
        </div>

        <div class="control column is-5">
            <label class="label">Salario</label>
            <input class="input" type="text" placeholder="salario">
        </div>
        <div class="control column is-5">
            <label class="label">Data contratacao</label>
            <input class="input" type="date">
        </div>
        <button class="button is-link" style="margin-left: 10px;">Salvar</button>
    </div>

</template>
<style lang="scss">
@import "~bulma/bulma.sass";
</style>
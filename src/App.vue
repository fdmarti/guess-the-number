<template>
  <div class="content">
    <h1>Guess the number</h1>

    <div class="card">
      <TitlesComponent />

      <input type="number" max="100" min="0" placeholder="0" v-model="gameState.numberValue" id="numberValue"
        name="numberValue" ref="numberRef" @focus="onFocusValue" @keydown.enter="onHandleForm" />

      <ButtonComponent @click="onHandleForm" v-if="gameState.gameStatus" text="Send" />
      <ButtonComponent @click="resetGame" v-else text="Reset" />

    </div>

    <DividerComponent />
    <section class="results-content">
      <HintComponent :message="hintState.message" />
      <NumbersChosenComponent :number-selected="gameState.numberSelected" />
    </section>

    <AlertComponent :message="errorState.message" v-if="errorState.state" />
  </div>
</template>

<script setup lang="ts">
import { TitlesComponent, ButtonComponent, DividerComponent, AlertComponent, HintComponent, NumbersChosenComponent } from './components'
import { useChooseNumber } from './composables/useChooseNumber';

const { errorState, gameState, numberRef, hintState, resetGame, onFocusValue, onHandleForm } = useChooseNumber()


</script>
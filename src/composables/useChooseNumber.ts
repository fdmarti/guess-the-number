import { onMounted, reactive, ref } from 'vue';
import { throwConffeti } from '@/utils/conffeti';

export const useChooseNumber = () => {
  const randomNumber = ref();
  const numberRef = ref();

  const gameState = reactive({
    numberSelected: [] as Number[],
    numberValue: 0,
    gameStatus: true,
  });

  const errorState = reactive({
    state: false,
    message: '',
  });

  const hintState = reactive({
    message: '',
  });

  const onFocusValue = () => {
    numberRef.value.select();
  };

  const onHandleForm = () => {
    if (gameState.numberValue.toString().length === 0) {
      setError('Debe ingresar un número válido');
      return;
    }

    if (gameState.numberValue < 0) {
      setError('El número debe ser mayor a 0');
      return;
    }

    if (gameState.numberValue > 100) {
      setError('El número debe ser menor a 100');
      return;
    }

    if (gameState.numberSelected.includes(gameState.numberValue)) {
      setError('Ya ingresaste ese número');
      return;
    }

    if (gameState.numberValue != randomNumber.value) {
      gameState.numberSelected.push(gameState.numberValue);

      if (gameState.numberValue < randomNumber.value) {
        setHint('¡El número es mas grande!');
      }

      if (gameState.numberValue > randomNumber.value) {
        setHint('¡El número es mas chico!');
      }

      gameState.numberValue = 0;
      return;
    }

    gameState.gameStatus = false;
    setHint('¡Correcto!');
    throwConffeti();
  };

  const setError = (message: string) => {
    errorState.message = message;
    errorState.state = true;
    setTimeout(resetErrorState, 2000);
  };

  const setHint = (message: string) => {
    hintState.message = message;
  };

  const resetErrorState = () => {
    errorState.message = '';
    errorState.state = false;
  };

  const resetGame = () => {
    gameState.gameStatus = true;
    gameState.numberSelected = [];
    gameState.numberValue = 0;
    generateNewRandomNumber();
    resetHints();
  };

  const resetHints = () => {
    hintState.message = '';
  };

  const generateNewRandomNumber = () => {
    randomNumber.value = Math.floor(Math.random() * 100);
  };

  onMounted(() => {
    generateNewRandomNumber();
  });

  return {
    gameState,
    errorState,
    numberRef,
    hintState,

    onFocusValue,
    onHandleForm,
    resetGame,
  };
};

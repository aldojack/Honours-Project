import { ref, watch } from "vue";

export function useStorage(key) {
  let storedVal = read();

  let val = ref(storedVal);

  watch(val, () => {
    write('food', val);
  });

  function write(){
    localStorage.setItem(key, JSON.stringify(val.value));
  }

  function read(){ 
    return JSON.parse(localStorage.getItem(key));
  }

  return val;
}

import { ref, reactive, computed, watch, watchEffect } from 'vue'

export function useNumbers() {
  const c = ref(0)
  const d = ref(0)
  const history = ref(new Array<string>())

  watch([c, d], ([newA, newB], [oldA, oldB]) => {
    if (newA !== oldA) {
      history.value.push(`c: ${oldA} -> ${newA}`)
    }

    if (newB !== oldB) {
      history.value.push(`d: ${oldB} -> ${newB}`)
    }
  })

  const totalCD = computed(() => {
    return c.value + d.value
  })

  const double = computed(() => {
    return totalCD.value * 2
  })

  return {
    totalCD,
    double,
    history,
    c,
    d,
  }
}
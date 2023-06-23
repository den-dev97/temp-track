<template>
  <section class="create-or-add">
    <h1>{{ record ? 'Изменить показание' : 'Добавить показание' }}</h1>
    <input type="number" v-model="temperature" placeholder="Температура" />
    <div class="btns-container">
      <button @click="saveRecord">{{ record ? 'Сохранить' : 'Добавить' }}</button>
      <button @click="router.push('/')">Отменить</button>
      <button  v-if="record" @click="isModalOpen=true">Удалить</button>
    </div>
    <template v-if="record">
      <ModalWindow v-model:isOpen="isModalOpen">
        <h2>Вы уверены, что хотите удалить это показание?</h2>
        <button @click="removeRecord">Да</button>
        <button @click="isModalOpen=false">Нет</button>
      </ModalWindow>
    </template>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import { useRoute, useRouter } from "vue-router"
import ModalWindow from "@/components/ModalWindow.vue"

const store = useStore()
const router = useRouter()
const route = useRoute()
const temperature = ref('')
const id = Number(route.params.id)
const record = store.state.records.find((r) => r.id === id)
const isModalOpen = ref(false)

onMounted(() => {
  if (record) {
    temperature.value = record.temperature
  }
})

function saveRecord() {
  if (record) {
    record.temperature = Number(temperature.value)
    store.commit('updateRecord', record)
  } else {
    const newRecord = { id: Date.now(), temperature: Number(temperature.value) }
    store.commit('addRecord', newRecord)
  }
  router.push('/')
}

function removeRecord() {
  store.commit('removeRecord', id)
  router.push('/')
}
</script>

<style scoped lang="scss">
.create-or-add {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btns-container {
  display: flex;
}
</style>
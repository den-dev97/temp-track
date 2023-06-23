<template>
  <section class="table-container">
    <h1>Список показаний</h1>
    <button @click="router.push('/edit')">Создать новую запись</button>
      <table class="table">
        <thead>
        <tr>
          <th>№</th>
          <th>ID</th>
          <th>Температура</th>
          <th>Действия</th>
        </tr>
        </thead>
          <TransitionGroup tag="tbody" name="list">
            <tr v-for="(record, i) in records" :key="record.id">
              <td>{{ records.length - i }}</td>
              <td>{{ record.id.toString().slice(-3) }}</td>
              <td>{{ record.temperature }}</td>
              <td>
                <button @click="router.push(`/edit/${record.id}`)">Изменить</button>
                <button @click="currentId=record.id; isModalOpen=true">Удалить</button>
              </td>
            </tr>
          </TransitionGroup>
          <ModalWindow v-model:isOpen="isModalOpen">
            <h2>Вы уверены, что хотите удалить это показание?</h2>
            <button @click="removeRecord" >Да</button>
            <button @click="isModalOpen=false">Нет</button>
          </ModalWindow>
        </table>
  </section>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from "vue-router"
import { computed, ref } from "vue"
import ModalWindow from "@/components/ModalWindow.vue"

const store = useStore()
const router = useRouter()
const isModalOpen = ref(false)
const currentId = ref<null | number>(null)
const records = computed(() => store.state.records)

function removeRecord() {
  store.commit('removeRecord', currentId.value)
  isModalOpen.value = false
  currentId.value = null
}
</script>

<style lang="scss">
.table-container {
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f2f2f2;
    }

    .record-row:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
<script setup>
    import { useTasks } from '../store/TaskStore.js'

    defineProps({
        task: Object
    })

    const store = useTasks()

    const deleteTask = (id) => {
        store.deleteTask(id)
    }

    const handleToggle = (id) => {
        store.handleToggle(id)
    }
</script>

<template>
    
    <label :for="task.forid" class="flex items-center align-middle gap-3">
        <input @change="handleToggle(task.id)" :checked="task.status" type="checkbox" name="" class="h-4 w-4 text-blue-500 rounded-sm border-blue-700" :id="task.forid">
        <span :class="task.status ? 'line-through' : ''">{{ task.name }}</span>
    </label>
    <button @click="deleteTask(task.id)" class="ml-auto">
        <svg class="w-5 text-red-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
        </svg>
    </button>
    
</template>


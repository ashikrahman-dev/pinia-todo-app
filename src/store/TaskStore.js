import { defineStore } from 'pinia'

export const useTasks = defineStore('task', {
    state: () => {
        return {
            tasks: [
                {
                    id: 1,
                    forid: 'task1',
                    name: 'Task 1',
                    status: false,
                },
                {
                    id: 2,
                    forid: 'task2',
                    name: 'Task 2',
                    status: true
                },
                {
                    id: 3,
                    forid: 'task3',
                    name: 'Task 3',
                    status: false
                },
                {
                    id: 4,
                    forid: 'task4',
                    name: 'Task 4',
                    status: true
                },
                {
                    id: 5,
                    forid: 'task5',
                    name: 'Task 5',
                    status: true
                },
                {
                    id: 6,
                    forid: 'task6',
                    name: 'Task 6',
                    status: false
                },
            ]

        }
    },

    getters: {

    },

    actions: {
        addTask(task) {
            this.tasks.push(task)
        }
    }


});
export function taskReducer(state = {}, action) {
    switch (action.type) {
        case "HANDLE_INPUT": {
            return Object.assign(
                {},
                state,
                {
                    input: action.payload.inputValue
                })
        }
        case "CREATE_TASK": {
            return Object.assign(
                {},
                state,
                {
                    input: "",
                    tasks: state.tasks.concat(
                        {
                            text: state.input,
                            isDone: false,
                            id: state.tasks.length
                        }
                    )
                });
        }
        case "DELETE_TASK": {
            return Object.assign(
                {},
                state,
                {
                    tasks: state.tasks.filter((task, index) => {
                        task.id = index;
                        return task.id !== action.payload.id;
                    })
                })
        }
        case "COMPLETE_TASK": {
            return Object.assign(
                {},
                state,
                {
                    tasks: state.tasks.map((task) => {
                        if (task.id === action.payload.id) {
                            task.isDone = !task.isDone;
                        }
                        return task;
                    })
                })
        }
        case "CALCULATE_PERCENT": {
            if (state.percent !== action.payload.doneTasks) {
                return Object.assign(
                    {},
                    state,
                    {
                        percent: state.tasks.length === 0 ? 0 : Math.floor(action.payload.doneTasks / state.tasks.length * 100)
                    })
            }
        }
    }
    return state;
}
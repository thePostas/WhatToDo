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
                            done: false,
                            id: state.tasks.length
                        }
                    )
                });
        }
        case "DELETE_TASK": {
            console.log(action.payload.id);
            return Object.assign(
                {},
                state,
                {
                    tasks: state.tasks.filter((task, index) => {
                        if (task.id !== action.payload.id) {
                            task.id = index - 1;
                            return task;
                        }
                    })
                })
        }
    }
    return state;
}
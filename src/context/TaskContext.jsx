import { createContext, useReducer } from "react";

const initialState = {
  tasks: [],
  totaltask: 0,
  completed: 0,
  pending: 0,
};

function TaskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        ...action.payload,
        id: Date.now(),
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        totaltask: state.totaltask + 1,
        pending: state.pending + 1,
      };

    case "DELETE_TASK":
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload,
      );
      const completedCountAfterDelete = filteredTasks.filter(
        (t) => t.completed,
      ).length;
      const pendingCountAfterDelete =
        filteredTasks.length - completedCountAfterDelete;
      return {
        ...state,
        tasks: filteredTasks,
        totaltask: filteredTasks.length,
        completed: completedCountAfterDelete,
        pending: pendingCountAfterDelete,
      };

    case "TOGGLE_COMPLETE":
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );
      const completedCount = updatedTasks.filter((t) => t.completed).length;
      const pendingCount = updatedTasks.length - completedCount;
      return {
        ...state,
        tasks: updatedTasks,
        completed: completedCount,
        pending: pendingCount,
      };

    default:
      return state;
  }
}

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

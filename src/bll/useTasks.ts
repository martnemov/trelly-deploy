import { useEffect, useState } from 'react';
import { getTasks, type GlobalTaskListItemJsonApiData } from '../dal/api.ts';

export function useTasks(
  handleTaskSelected: (taskId: string | null) => void,
  handleBoardSelected: (boardId: string | null) => void
) {
  const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null);
  const handleReset = () => {
    handleTaskSelected(null);
    handleBoardSelected(null);
  };

  useEffect(() => {
    getTasks().then((json) => setTasks(json.data));
  }, []);

  return { tasks, handleReset };
}

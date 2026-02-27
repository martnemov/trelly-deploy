import { useEffect, useState } from 'react';
import { getTask, type TaskDetailsData } from '../dal/api.ts';

export function useTaskDetails(
  selectedTaskId: string | null,
  boardId: string | null,
  handleTaskLoading: (b: boolean) => void
) {
  const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null);

  if (!selectedTaskId || !boardId || !handleTaskLoading) {
    if (taskDetails !== null) {
      setTaskDetails(null);
    }
  }

  useEffect(() => {
    if (!selectedTaskId || !boardId) return;

    handleTaskLoading(true);

    getTask(boardId, selectedTaskId)
      .then((json) => setTaskDetails(json.data))
      .finally(() => handleTaskLoading(false));
  }, [selectedTaskId, boardId, handleTaskLoading]);

  return { taskDetails };
}

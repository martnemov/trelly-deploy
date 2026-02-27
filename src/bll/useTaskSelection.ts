import { useCallback, useState } from 'react';

export function useTaskSelection() {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);
  const [isTaskLoading, setIsTaskLoading] = useState<boolean>(false);

  const handleTaskSelected = (id: string | null) => setSelectedTaskId(id);
  const handleBoardSelected = (id: string | null) => setBoardId(id);
  const handleTaskLoading = useCallback((b: boolean) => setIsTaskLoading(b), []);

  return {
    selectedTaskId,
    setSelectedTaskId,
    boardId,
    setBoardId,
    isTaskLoading,
    handleTaskSelected,
    handleBoardSelected,
    handleTaskLoading,
  };
}

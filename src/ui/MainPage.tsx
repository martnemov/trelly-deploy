import { TasksList } from './TasksList.tsx';
import { TaskDetails } from './TaskDetails.tsx';
import { useTaskSelection } from '../bll/useTaskSelection.ts';
import styles from './MainPage.module.css';

export function MainPage() {
  const {
    selectedTaskId,
    boardId,
    isTaskLoading,
    handleTaskSelected,
    handleBoardSelected,
    handleTaskLoading,
  } = useTaskSelection();

  return (
    <div>
      <div className={styles.mainPage}>
        <TasksList
          selectedTaskId={selectedTaskId}
          handleTaskSelected={handleTaskSelected}
          handleBoardSelected={handleBoardSelected}
          handleTaskLoading={handleTaskLoading}
        />
        <TaskDetails
          selectedTaskId={selectedTaskId}
          boardId={boardId}
          handleTaskLoading={handleTaskLoading}
          isTaskLoading={isTaskLoading}
        />
      </div>
    </div>
  );
}

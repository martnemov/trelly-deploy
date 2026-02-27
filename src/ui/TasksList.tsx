import { TaskItem } from './TaskItem.tsx';
import { useTasks } from '../bll/useTasks.ts';
import styles from './TasksList.module.css';

type TasksListProps = {
  selectedTaskId: string | null;
  handleTaskSelected: (taskId: string | null) => void;
  handleBoardSelected: (boardId: string | null) => void;
  handleTaskLoading: (b: boolean) => void;
};

export function TasksList({
  selectedTaskId,
  handleTaskSelected,
  handleBoardSelected,
  handleTaskLoading,
}: TasksListProps) {
  const { tasks, handleReset } = useTasks(handleTaskSelected, handleBoardSelected);

  if (!tasks) {
    return <h1>Загрузка...</h1>;
  }

  if (!tasks.length) {
    return <h1>Задачи отстутствуют</h1>;
  }

  return (
    <div>
      <button onClick={handleReset}>Сброс</button>
      <ul className={styles.tasksList}>
        {tasks?.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              isSelected={selectedTaskId === task.id}
              onTaskSelected={handleTaskSelected}
              onBoardSelected={handleBoardSelected}
              onTaskLoading={handleTaskLoading}
            />
          );
        })}
      </ul>
    </div>
  );
}

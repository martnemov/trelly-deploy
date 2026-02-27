import type { GlobalTaskListItemJsonApiData } from '../dal/api.ts';
import styles from './TaskItem.module.css';
import clsx from 'clsx';

type TaskItemProps = {
  task: GlobalTaskListItemJsonApiData;
  isSelected: boolean;
  onTaskSelected: (taskId: string | null) => void;
  onBoardSelected: (boardId: string | null) => void;
  onTaskLoading: (b: boolean) => void;
};

export function TaskItem({
  task,
  isSelected,
  onTaskSelected,
  onBoardSelected,
  onTaskLoading,
}: TaskItemProps) {
  const priorityClass: Record<number, string> = {
    0: styles.priority0,
    1: styles.priority1,
    2: styles.priority2,
    3: styles.priority3,
    4: styles.priority4,
  };

  const isDone = task.attributes.status === 2;

  const handleTaskClick = () => {
    onTaskSelected?.(task.id);
    onBoardSelected?.(task.attributes.boardId);
    onTaskLoading(true);
  };

  return (
    <li
      onClick={handleTaskClick}
      key={task.id}
      className={clsx(
        styles.task,
        isSelected && styles.selected,
        priorityClass[task.attributes.priority]
      )}
    >
      <div>
        <span>Заголовок:</span>
        <span className={clsx(isDone && styles.completed)}>{task.attributes.title}</span>
      </div>
      <div>
        <span>Статус:</span>
        <input type="checkbox" defaultChecked={isDone} />
      </div>
      <div>
        <span>Дата создания задачи:</span>
        <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
      </div>
    </li>
  );
}

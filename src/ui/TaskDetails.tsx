import { type TaskDetailsData } from '../dal/api.ts';
import { useTaskDetails } from '../bll/useTaskDetails.ts';
import styles from './TaskDetails.module.css';

type TaskDetailsProps = {
  selectedTaskId: string | null;
  boardId: string | null;
  handleTaskLoading: (b: boolean) => void;
  isTaskLoading: boolean;
};

type TaskFieldProps = {
  label: string;
  value: string;
};

type TaskContentProps = {
  task: TaskDetailsData;
};

const TaskField = ({ label, value }: TaskFieldProps) => (
  <div className={styles.field}>
    <span className={styles.fieldLabel}>{label}:</span>
    <span>{value}</span>
  </div>
);

const TaskContent = ({ task }: TaskContentProps) => {
  const { title, boardTitle, description } = task.attributes;

  return (
    <div className={styles.content}>
      <TaskField label="Заголовок таски" value={title} />
      <TaskField label="Заголовок доски" value={boardTitle} />
      <TaskField label="Описание" value={description ?? 'Нет описания'} />
    </div>
  );
};

export function TaskDetails({
  selectedTaskId,
  boardId,
  handleTaskLoading,
  isTaskLoading,
}: TaskDetailsProps) {
  const { taskDetails } = useTaskDetails(selectedTaskId, boardId, handleTaskLoading);

  const renderContent = () => {
    if (isTaskLoading) return <p className={styles.placeholder}>Загрузка...</p>;
    if (!taskDetails) return <p className={styles.placeholder}>Задача не выбрана</p>;
    return <TaskContent task={taskDetails} />;
  };

  return (
    <aside className={styles.aside}>
      <h3 className={styles.title}>Детали задачи</h3>
      {renderContent()}
    </aside>
  );
}

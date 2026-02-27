type TaskDetailsDto = {
  boardTitle: string;
  boardId: string;
  title: string;
  description: string;
  priority: number;
  status: number;
  addedAt: string;
};

type GlobalTaskListItemDto = {
  id: string;
  title: string;
  boardId: string;
  status: number;
  priority: number;
  addedAt: string;
  attachmentsCount: string;
};

export type TaskDetailsData = {
  attributes: TaskDetailsDto;
  id: string;
  type: string;
};

export type GlobalTaskListItemJsonApiData = {
  type: string;
  id: string;
  attributes: GlobalTaskListItemDto;
};

export type GetTaskOutput = {
  data: TaskDetailsData;
};

export type GlobalTaskListResponse = {
  data: GlobalTaskListItemJsonApiData[];
};

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;
  return {
    'api-key': apiKey,
  };
};

export const getTask = (boardId: string, selectedTaskId: string): Promise<GetTaskOutput> => {
  const url = `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`;
  return fetch(url, {
    headers: prepareHeaders(),
  }).then((res) => res.json());
};

export const getTasks = (): Promise<GlobalTaskListResponse> => {
  const url = 'https://trelly.it-incubator.app/api/1.0/boards/tasks';

  return fetch(url, {
    headers: prepareHeaders(),
  }).then((response) => response.json());
};

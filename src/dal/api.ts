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

export const getTask = (boardId: string, selectedTaskId: string): Promise<GetTaskOutput> => {
  const url = `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`;
  return fetch(url, {
    headers: {
      'api-key': '4a7ea144-e8fe-4d8b-adc4-07daf9c9dd07',
    },
  }).then((res) => res.json());
};

export const getTasks = (): Promise<GlobalTaskListResponse> => {
  const url = 'https://trelly.it-incubator.app/api/1.0/boards/tasks';

  return fetch(url, {
    headers: {
      'api-key': '4a7ea144-e8fe-4d8b-adc4-07daf9c9dd07',
    },
  }).then((response) => response.json());
};

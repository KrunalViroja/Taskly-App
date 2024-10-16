export interface AddTask {
  title: string;
  description: string;
  assignedTo: string;
  estimatedHours: string;
  dueDate: string;
  // createdBy: {
  //   id: string;
  // };
  status: string;
}

export interface User {
  id: string;
  name: string;
}

export interface AddTaskContextType {
  addTask: (task: AddTask) => Promise<void>;
  users: User[];
  fetchUsers: () => Promise<void>;
}

export interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (
    taskTitle: string,
    description: string,
    assignedTo: string,
    estimatedTime: string,
    dueDate: string
  ) => void;
}

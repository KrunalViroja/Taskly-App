export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  estimatedHours: string;
  dueDate: string;
  status: string;
  createdBy: TaskCreatedBy;
  createdAt: string;
  updatedAt: string;
  deleteAt: string | null;
}

export interface TaskCreatedBy {
  id: string;  
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deleteAt: string | null;
}

export interface TaskAssignTo {
  id: string;  
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deleteAt: string | null;
}
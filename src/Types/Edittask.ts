export interface EditTask {
  id: string;
    title: string;
    description: string;
    assignedTo: string; 
    estimatedHours: string;
    dueDate: string;
   // createdBy:TaskCreatedBy
  }
  
  interface TaskCreatedBy {
    id: string;
  }
  

  export interface EditTaskContextProps {
    editTask: (taskId: string, updatedTask:  Partial<EditTask>) => Promise<boolean>;
  }

  export interface EditTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: EditTask | null;
    onSubmit: (updatedTask: Partial<EditTask>) => void;
  }
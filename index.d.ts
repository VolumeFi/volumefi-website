interface DefaultComponentProps  {
  className?: string;
}

type MessageType =  'error' | 'success' | 'warning' | 'info'

interface MessageDetail {
  type: MessageType;
  content: string;
}

export interface Experience {
  company: string;
  department: string;
  role: string;
  accomplishments?: string[];
  comments?: string[];
  from: string;
  to: string | null;
  current: boolean;
  remarks: string[];
}

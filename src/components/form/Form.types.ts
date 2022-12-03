export interface RegisterData {
  id: string;
  login: string;
  password: string;
  email: string;
  phone: string;
  checked: boolean;
}

export interface Errors {
  login: string| boolean;
  password: string | boolean;
  email: string | boolean;
  phone: string | boolean;
  checked: string | boolean;
}

export interface FormTypes  {
  tab: any[];
}
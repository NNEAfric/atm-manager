export interface AuthResponse {
  user: UserData;
  token: string;
  type: string;
  expires_in: number;
}

export interface Data<T> {
  data: T;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  bankData: BankData;
  branchData: BranchData;
}

interface BranchData {
  name: string;
  city: string;
  town: string;
}

interface BankData {
  name: string;
  desc: string;
  country: string;
}

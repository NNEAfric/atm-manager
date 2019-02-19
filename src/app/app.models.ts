export interface AuthResponse {
  user: UserData;
  token: string;
  type: string;
  expires_in: number;
}

export interface PaginatedData<T> extends Data<T[]> {
  links: Links;
  meta: Meta;
}

export interface Data<T> {
  data: T;
}

export interface ATMData {
  id: number;
  name: string;
  status: number;
  city: string;
  branch: string;
  coordinate: Coordinate;
  updated_at: Date;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface Links {
  first: string;
  last: string;
  prev: string;
  next: string;
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

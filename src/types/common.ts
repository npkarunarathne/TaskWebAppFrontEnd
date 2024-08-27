export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  user: any;
  token: string;
  refreshToken: string;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  conditions: boolean;
}

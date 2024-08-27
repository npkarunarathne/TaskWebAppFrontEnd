export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  name: string;
  token: string;
  refresh_token: string;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  conditions: boolean;
}

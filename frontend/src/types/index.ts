
export interface AuthContextType {
    user: string | null;
    login: (user: string) => void;
    logout: () => void;
  }  
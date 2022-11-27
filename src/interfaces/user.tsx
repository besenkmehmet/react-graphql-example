interface User {
  login: string;
  name?: string;
  avatarUrl?: string;
  bio?: string;
  followers?: {
    totalCount: number;
  };
  following?: {
    totalCount: number;
  };
}

export default User;

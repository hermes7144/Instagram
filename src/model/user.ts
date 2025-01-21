export type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  username?: string | null;
}

export type SimpleUser = Pick<User, 'username' | 'image'>;

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks:string[];
}
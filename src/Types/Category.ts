import { User } from './User';

export interface Category {
  id: number,
  title: string,
  icon: string,
  ownerId: number,
  owner: User | null
}

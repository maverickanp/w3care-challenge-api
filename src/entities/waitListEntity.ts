import { UserEntity } from '../entities'


export type WaitListEntity = {
  waitingList_id?: number;
  user: UserEntity;
}

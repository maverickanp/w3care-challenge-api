import { ICrud, WaitListEntity } from '../entities'

class WaitingListRepo implements ICrud<WaitListEntity> {
  private users: Map<number, WaitListEntity>;
  private identity: number;

  constructor() {
      this.users = new Map<number, WaitListEntity>();
      this.identity = 1;        
  }
  
  list(): WaitListEntity[] {
      return Array.from(this.users.values());
  }

  create(item: WaitListEntity): WaitListEntity {
      item.user.user_id = this.identity++;
      this.users.set(item.user.user_id, item);
      return item;
  }

  read(id: number): WaitListEntity {
      const item = this.users.get(id);
      if (!item)
          throw new Error(`User with id=${id} not found.`);
      return item;
  }

  update(id: number, item: WaitListEntity): WaitListEntity {        
      this.users.set(id, item); 
      return item;
  }

  delete(id: number): WaitListEntity {
      const item = this.read(id);
      this.users.delete(id);
      return item;
  }    
}

export { WaitingListRepo };
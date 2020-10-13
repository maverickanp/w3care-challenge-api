import { ICrud, UserEntity } from '../entities'

class UserRepo implements ICrud<UserEntity> {
    private users: Map<number, UserEntity>;
    private identity: number;

    constructor() {
        this.users = new Map<number, UserEntity>();
        this.identity = 1;        
    }
    
    list(): UserEntity[] {
        return Array.from(this.users.values());
    }

    create(item: UserEntity): UserEntity {
        item.user_id = this.identity++;
        this.users.set(item.user_id, item);
        return item;
    }

    read(id: number): UserEntity {
        const item = this.users.get(id);
        if (!item)
            throw new Error(`User with id=${id} not found.`);
        return item;
    }

    update(id: number, item: UserEntity): UserEntity {        
        this.users.set(id, item); 
        return item;
    }

    delete(id: number): UserEntity {
        const item = this.read(id);
        this.users.delete(id);
        return item;
    }    
}

export { UserRepo };
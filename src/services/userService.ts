import { ICrud, UserEntity } from '../entities'
import { UserRepo } from '../repositories'

class UserService implements ICrud<UserEntity> {
    private repo: ICrud<UserEntity>;

    constructor() {
        this.repo = new UserRepo();
    }

    private validate(item: UserEntity) {
        if (!item.email?.trim())
            throw new Error('email field must be provided');
    }

    list(): UserEntity[] {
        return this.repo.list();
    }

    create(item: UserEntity): UserEntity {
        this.validate(item);
        return this.repo.create(item);
    }

    read(id: number): UserEntity {
        return this.repo.read(id);
    }

    update(id: number, item: UserEntity): UserEntity {
        this.validate(item);
        return this.repo.update(id, item);
    }

    delete(id: number): UserEntity {
        return this.repo.delete(id);
    }
}

export { UserService };
interface ICrud<A> {
    list(): Array<A>;    
    create(item: A): A;
    read(id: number): A;
    update(id: number, item: A): A;
    delete(id: number): A;
}

export { ICrud }
export { UserEntity } from './userEntity';
export { WaitListEntity } from './waitListEntity';
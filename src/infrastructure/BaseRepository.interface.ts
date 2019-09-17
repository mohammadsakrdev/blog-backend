export interface BaseRepository<T> {
    create(t: T): Promise<T>;
    deleteById(id: string): Promise<boolean>;
    findById(id: string): Promise<T>;
    update(id: string, t: T): Promise<T>;
    getAll(): Promise<T[]>;
}

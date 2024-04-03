export interface PaginatedEntity<T> {
	readonly entities: T[]
	readonly lastPage: number
	readonly currentPage: number
	readonly totalItems: number
}

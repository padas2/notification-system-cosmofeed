export class InternalError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = 'DatabaseError';
  }
}
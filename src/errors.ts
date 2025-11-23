/**
 * Base error class for ConnectWise API errors
 */
export class ConnectWiseError extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly response: unknown;

  constructor(message: string, status: number, statusText: string, response?: unknown) {
    super(message);
    this.name = 'ConnectWiseError';
    this.status = status;
    this.statusText = statusText;
    this.response = response;
  }
}

/**
 * Error thrown when authentication fails (401)
 */
export class AuthenticationError extends ConnectWiseError {
  constructor(message: string, response?: unknown) {
    super(message, 401, 'Unauthorized', response);
    this.name = 'AuthenticationError';
  }
}

/**
 * Error thrown when access is forbidden (403)
 */
export class ForbiddenError extends ConnectWiseError {
  constructor(message: string, response?: unknown) {
    super(message, 403, 'Forbidden', response);
    this.name = 'ForbiddenError';
  }
}

/**
 * Error thrown when resource is not found (404)
 */
export class NotFoundError extends ConnectWiseError {
  constructor(message: string, response?: unknown) {
    super(message, 404, 'Not Found', response);
    this.name = 'NotFoundError';
  }
}

/**
 * Error thrown when request validation fails (400)
 */
export class ValidationError extends ConnectWiseError {
  constructor(message: string, response?: unknown) {
    super(message, 400, 'Bad Request', response);
    this.name = 'ValidationError';
  }
}

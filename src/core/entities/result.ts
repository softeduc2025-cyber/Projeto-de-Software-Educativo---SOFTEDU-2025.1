export type Result<T> =
    | { success: true; data: T }
    | { success: false; error: Error };

export function success<T>(data: T): Result<T> {
    return { success: true, data }
}

export function failure(error: Error): Result<never> {
    return { success: false, error }
}

export function isSuccess<T>(result: Result<T>): result is { success: true; data: T } {
    return result.success === true;
}

export function isError<T>(result: Result<T>): result is { success: false; error: Error } {
    return result.success === false;
}

export function fold<T, R>(
    result: Result<T>,
    onSuccess: (data: T) => R,
    onError: (error: Error) => R
): R {
    return isSuccess(result) ? onSuccess(result.data) : onError(result.error);
}

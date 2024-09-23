import {AxiosError} from "axios";
import {QueryKey, UseMutationOptions, UseQueryOptions} from "@tanstack/react-query";

type ResponseError = AxiosError<{
    statusCode: string;
    message: string;
    error: string;
}>;

type UseMutationCustomOptions<TData = unknown, Tvariables = unknown> = Omit<
    UseMutationOptions<TData, ResponseError, Tvariables, unknown>,
    'mutationFn'
>;

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
    UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
    'queryKey'
>;

export type{ResponseError, UseMutationCustomOptions,UseQueryCustomOptions};
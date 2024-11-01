/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacterSearchResults } from '../models/CharacterSearchResults';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchControllerService {
    /**
     * @returns CharacterSearchResults OK
     * @throws ApiError
     */
    public static findCharacters({
        name,
        page,
        size = 25,
        sort,
    }: {
        name: string,
        /**
         * Zero-based page index (0..N)
         */
        page?: number,
        /**
         * The size of the page to be returned
         */
        size?: number,
        /**
         * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         */
        sort?: Array<string>,
    }): CancelablePromise<CharacterSearchResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/characters',
            query: {
                'name': name,
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
}

export module Kv {

    export type Client = {
        read: (path: string, name: string) => Promise<string>;
    }


    export type ReadResponse = {
        request_id: string;
        lease_id: string;
        renewable: boolean;
        lease_duration: number;
        data: {
            data: Record<string, string>;
            metadata: {
                created_time: string;
                custom_metadata: null;
                deletion_time: string;
                destroyed: boolean;
                version: number;
            }
        };
        wrap_info: null;
        warnings: null;
        auth: null;
    }

    export type ReadError = {
        errors: Array<string>;
        error: string;
    }
}

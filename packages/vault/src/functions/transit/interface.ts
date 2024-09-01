export module Transit {

    export type Client = {
        encrypt: <T = unknown>(name: string, options: EncryptOptions<T>) => Promise<string>;
        decrypt: <T = unknown>(name: string, options: DecryptOptions) => Promise<T>;
    }

    export type EncryptOptions<T = string> = { payload: T } & Omit<EncryptPayload, 'plaintext'>

    export type EncryptPayload = {
        plaintext: string;
        associated_data?: string;
        context?: string;
        key_version?: number;
        nonce?: string;
        reference?: string;
        batch_input?: Array<{ context: string, plaintext: string }>;
        type?: string;
        convergent_encryption?: string;
        partial_failure_response_code?: number;
    }

    export type EncryptResponse = {
        request_id: string;
        lease_id: string;
        renewable: boolean;
        lease_duration: number;
        data: {
            ciphertext: string;
            key_version: number;
        };
        wrap_info: null;
        warnings: null;
        auth: null;
    }

    export type EncryptError = {
        errors: Array<string>;
        error: string;
    }

    export type DecryptOptions = { payload: string } & Omit<DecryptPayload, 'plaintext'>

    export type DecryptPayload = {
        ciphertext?: string;
        associated_data?: string;
        context?: string;
        nonce?: string;
        reference?: string;
        batch_input?: Array<{ context: string, plaintext: string }>;
        partial_failure_response_code?: number;
    }

    export type DecryptResponse = {
        request_id: string;
        lease_id: string;
        renewable: boolean;
        lease_duration: number;
        data: {
            plaintext: string;
        };
        wrap_info: null;
        warnings: null;
        auth: null;
    }

    export type DecryptError = {
        errors: Array<string>;
        error: string;
    }


}

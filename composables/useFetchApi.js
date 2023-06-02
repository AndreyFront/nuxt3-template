import { useFetch, useRuntimeConfig } from "nuxt/app";

export default function useFetchApi(url, options = {}) {
    const config = useRuntimeConfig()

    return useFetch(url, {
        ...options,
        baseURL: config.public.baseURL,
    })
}

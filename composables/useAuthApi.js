import { useRuntimeConfig } from "nuxt/app";

export default function useAuthApi(url, options) {
    const config = useRuntimeConfig()

    return useFetch(url, {
        ...options,
        baseURL: config.public.authURL
    })
}


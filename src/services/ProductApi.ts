import axios from "axios"
import type { Product } from "../shared/ProductType"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export function useGetProduct(page: number, limit: number) {
    return useQuery({
        queryKey: ["products", page, limit],

        queryFn: async () => {
            const res = await axios.get(
                "http://localhost:5000/products",
                {
                    params: {
                        _page: page,
                        _per_page: limit,
                    },
                }
            );

            return {
                products: res.data.data as Product[],
                totalPages: res.data.pages as number,
                totalItems: res.data.items as number,
            };
        },

        staleTime: 1000 * 60,
    });
}


export function useAddProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (products: Omit<Product, "id">) => {
            const res = await axios.post<Product>("http://localhost:3000/Product", products)
            return res.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Product"] })
        },
    })
}

export function useDeleteProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: Product["id"]) => {
            const res = await axios.delete(`http://localhost:3000/Product/${id}`)
            return res.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Product"] })
        },
    })
}

const BASE_URL = "http://localhost:5000/Product";


export function useUpdateProd() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (products: Product) => {
            const res = await axios.put<Product>(
                `http://localhost:5000/products/${products.id}`,
                {
                    title: products.title,
                    price: products.price,
                }
            );

            return res.data;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["Product"],
            });
        },
    });
}


export function useUpdateProduct() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (products: Product) => {
            const res = await axios.put<Product>(`http://localhost:3000/Product/${products.id}`,
                {
                    title: products.title,
                    price: products.price,
                }
            )
            return res.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Product"] })
        },
    })
}
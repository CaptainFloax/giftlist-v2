import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';

import { type Product } from '@/definitions/product';
import ALL_PRODUCTS_QUERY from '@/graphql/products/allProducts.query.gql';

export const useProductsQuery = () => {
    const { result, loading, error, onResult } = useQuery(ALL_PRODUCTS_QUERY);
    const products = computed<Product[]>(() => result.value?.products ?? []);
    return { products, loading, error, onResult };
};

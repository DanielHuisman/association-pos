import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {List, Spinner} from 'reactstrap';

import {GetProductBrandsQuery, GetProductBrandsQueryVariables} from '../../generated/graphql';
import GetProductBrandsQL from '../../queries/GetProductBrands.graphql';

export const ProductBrandList: React.FC = () => {
    const {loading, data, error} = useQuery<GetProductBrandsQuery, GetProductBrandsQueryVariables>(gql(GetProductBrandsQL));

    if (error) {
        throw error;
    }

    if (loading || !data) {
        return <Spinner />;
    }

    return (
        <List>
            {data.productBrands.values.map((brand) => (
                <li key={brand.id}>
                    {brand.name}
                </li>
            ))}
        </List>
    );
};

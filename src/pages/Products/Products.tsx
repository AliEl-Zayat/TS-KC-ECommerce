import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/index";
import { GridList } from "@components/common";

const Products = () => {
  const params = useParams();

  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;

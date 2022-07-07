import React from "react";
import { useRouter } from "next/router";
import { selectProdactData } from "../../store/prodacts/selectors";
import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout";
import { useAppDispatch } from "../../store/store";
import { fetchProdacts } from "../../store/prodacts/asyncActions";
import { FullProdact, Loading } from "../../components";

const ProdactPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProdacts());
  }, []);

  const { query } = useRouter();

  const { items, status } = useSelector(selectProdactData);

  return (
    <MainLayout>
      {status === "error" ? (
        <div>ERROR</div>
      ) : status === "loading" ? (
        <Loading />
      ) : (
        <FullProdact items={items} id={query.id} />
      )}
    </MainLayout>
  );
};

export default ProdactPage;

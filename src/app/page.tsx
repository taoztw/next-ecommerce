import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <>
      <Slider />

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Product</h1>

        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.NEXT_PUBLIC_FEATURE_PRODUCT_CATE_ID!}
            limit={4}
          />
        </Suspense>
      </div>

      <div className="mt-24 ">
        <h2 className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 text-2xl mb-12">
          Category
        </h2>
        <Suspense fallback={"loading"}>
          <CategoryList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* <ProductList /> */}
      </div>
    </>
  );
};

export default HomePage;

import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

async function ListPage({ searchParams }: { searchParams: any }) {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );
  return (
    <div className="section-container">
      <div className="bg-pink-50 px-4 flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-xl md:text-4xl font-semibold">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="text-xs px-5 py-3 bg-lama rounded-3xl text-white md:text-sm">
            Buy Now
          </button>
        </div>

        <div className="w-1/3 relative">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Filter */}
      <Filter />
      <h1 className="text-xl font-semibold mt-12">All Products For you</h1>

      <Suspense fallback={"loading"}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}

export default ListPage;

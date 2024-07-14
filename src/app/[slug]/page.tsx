import Add from "@/components/Add";
import CustomProducts from "@/components/CustomProducts";
import ProductImages from "@/components/ProductImages";

function Page() {
  return (
    <div className="section-container flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem ipsam nihil quidem labore praesentium aliquam
          aspernatur asperiores minus aut nostrum, doloribus minima repellat.
          Labore animi, molestias modi mollitia rem reiciendis.
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomProducts />
        <Add />

        <div className="h-[2px] bg-gray-100"></div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            earum officia labore totam ipsum exercitationem! Velit eos labore,
            error amet voluptatem, hic aliquam quidem magnam sunt a maiores
            officia perferendis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            earum officia labore totam ipsum exercitationem! Velit eos labore,
            error amet voluptatem, hic aliquam quidem magnam sunt a maiores
            officia perferendis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            earum officia labore totam ipsum exercitationem! Velit eos labore,
            error amet voluptatem, hic aliquam quidem magnam sunt a maiores
            officia perferendis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            earum officia labore totam ipsum exercitationem! Velit eos labore,
            error amet voluptatem, hic aliquam quidem magnam sunt a maiores
            officia perferendis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            earum officia labore totam ipsum exercitationem! Velit eos labore,
            error amet voluptatem, hic aliquam quidem magnam sunt a maiores
            officia perferendis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;

function CustomProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a Color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 bg-red-500 ring-1 ring-gray-300 cursor-pointer relative rounded-full">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>

        <li className="w-8 h-8 bg-blue-500 ring-1 ring-gray-300 cursor-pointer relative rounded-full"></li>
        <li className="w-8 h-8 bg-green-500 ring-1 ring-gray-300 cursor-pointer relative rounded-full">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a Size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-lama rounded-md py-1 px-4 text-sm text-lama">
          Large
        </li>
        <li className="bg-lama rounded-md py-1 px-4 text-white text-sm">
          Medium
        </li>
        <li className="rong-1 ring-pink-200 text-white bg-pink-200 py-1 px-4 text-sm rounded-md">
          Small
        </li>
      </ul>
    </div>
  );
}

export default CustomProducts;

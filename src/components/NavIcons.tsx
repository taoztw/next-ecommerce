"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CardModal from "./CardModal";

function NavIcons() {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  const isLoggedIn = true;

  const handleProfile = () => {
    // 如果没有登录直接到login
    if (!isLoggedIn) router.push("/login");
    setIsOpenProfile((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isOpenProfile && (
        <div className="absolute top-12 left-0 text-sm p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}

      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />

      <div className="relative ">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full flex items-center justify-center text-white text-sm">
          2
        </div>
      </div>
      {isCartOpen && <CardModal />}
    </div>
  );
}

export default NavIcons;

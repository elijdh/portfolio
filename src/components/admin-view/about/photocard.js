import React from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

export const PhotoCard = ({ url, onClick }) => {
  return (
    <div>
      <div className="border-gray-500 border-2 p-5">
        <Image src={url} alt="image" width={100} height={100} priority />
      </div>
      <button type="button" onClick={onClick}>
        <MdDelete />
      </button>
    </div>
  );
};

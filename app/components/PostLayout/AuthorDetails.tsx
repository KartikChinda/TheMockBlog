import React from "react";
import Link from "next/link";
import { User } from "@/app/interfaces";

const AuthorDetails = ({ author }: { author: User }) => {
  return (
    <div className="mt-10 border-2 md:w-[40%] rounded-xl bg-bgBeige p-4 border-textBrown">
      This post was written by:
      <p className="text-textBrown font-extrabold text-xl font-subtext-heebo">
        {author.name}
      </p>
      <div className="font-subtext-heebo font-light flex flex-col text-sm mt-2">
        <div>
          Reach out to them here:{" "}
          <span className="font-bold text-lg">{author.email}</span>
        </div>
        <div>
          Website:{" "}
          <Link
            href={`${author.website}`}
            target="__blank"
            className="font-bold text-lg"
          >
            {author.website}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;

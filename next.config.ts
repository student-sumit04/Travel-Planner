import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
       domains: [
      "34ywr8u0zo.ufs.sh", // add this line
      "utfs.io",           // (optional) add if you use utfs.io
      // ...other domains
    ],
  },
};

export default nextConfig;

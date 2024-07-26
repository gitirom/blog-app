/** @type {import('next').NextConfig} */
const nextConfig = {
    //if you want use external images do this cause next does'nt alow as to use any other domain
    images: {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            }
        ]
    }
};

export default nextConfig;

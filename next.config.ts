/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any hostname
        port: '', // Keeps the port flexible
        pathname: '/**', // Matches any path
      },
    ],
  },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'avatars.githubusercontent.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'encrypted-tbn0.gstatic.com',
//         port: '',
//         pathname: '/**',
//       }
//     ],
//   },
// }

// module.exports = nextConfig

// export default nextConfig;
// Partioal pre rendering enbling now i m not using it because it is not stabel yet
// Another end or the exporting pag of this is startup details page
// exporting as " export const experimental_ppr = ture;"
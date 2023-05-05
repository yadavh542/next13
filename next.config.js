// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },

//   async headers() {
//     return [
//       {
//         source: '/ads.txt',
//         headers: [
//           {
//             key: 'Content-Type',
//             value: 'text/plain',
//           },
//         ],
//       },
//     ];
//   },

// }

// module.exports = nextConfig


module.exports = {
  async headers() {
    return [
      {
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },
};


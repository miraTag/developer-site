module.exports = {
    siteMetadata: {
      title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
            fonts: [
                `poppins:300,400,500,600,700`       
            ], display: 'swap'       
        }
    }
    ]
}
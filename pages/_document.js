import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }

    }

    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body bgcolor="#f8f9fa">
                    <Main />
                    <NextScript />
                    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
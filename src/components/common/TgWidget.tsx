import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }


    render() {
        return (
            <Html>
                <Head>
                    <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="durov/68" data-width="100%"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
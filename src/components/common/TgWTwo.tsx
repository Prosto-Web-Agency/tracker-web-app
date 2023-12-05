import Head from 'next/head';
import Script from 'next/script';

export default function Headee() {
    return (
        <div>
            {/* <Head>
                <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="durov/43" data-width="100%"></script>
            </Head> */}
            <Script src="https://telegram.org/js/telegram-widget.js?22" />
            <h1>A page of my website.</h1>
        </div>
    )
}
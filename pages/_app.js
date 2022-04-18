import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// top-level component common across all different pages
// keep state when navigating between pages
// can add global CSS files by importing from __app.js
// nowhere else... because global CSS affects all elements on the page

import React, {useState} from 'react';
import './footer.scss';

const Footer = (props) => {
    const [setShow, setSetShow] = useState(false);
    const hide = () => {
        if((props.maskStatus === false || props.contentStatus === true) && setShow)
            setSetShow(false);
    }
    return (
        <div>
            {hide()}
            <footer id="footer">
                <a href="https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
                <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business</a>
                <a href="https://google.com/search/howsearchworks/?fg=1">How Search works</a>
                <a href="https://policies.google.com/privacy?fg=1" class="auto-left">Privacy</a>
                <a href="https://policies.google.com/terms?fg=1">Terms</a>
                <a href="# " onClick={() => {setSetShow(!setShow);props.maskStatusChange(!setShow);}}>Settings</a>
            </footer>

            {
                setShow &&
                <div id="setting" class="setting">
                    <a href="https://www.google.com/advanced_search?hl=en&fg=1"> Search Settings</a>
                    <a href="https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1">Advanced search</a>
                    <a href="https://myactivity.google.com/product/search?utm_source=google&hl=en&fg=1">Your data inSearch</a>
                    <a href="https://myactivity.google.com/product/search?utm_source=google&hl=en&fg=1">History</a>
                    <a href="https://support.google.com/websearch/?p=ws_results_help&hl=en&fg=1">Search help</a>
                    <a href="https://www.google.com/?pli=1#">Send feedback</a>
                </div>
            }
        </div>
    )
};

export default Footer;
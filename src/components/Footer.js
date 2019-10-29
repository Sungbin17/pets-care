
import React from 'react';
class Footer extends React.Component {
    render() {
        return (

            <footer class="footer">
                <p><a href="#top" class="footer_text">Back to top</a></p>
                <p><a href="#" class="footer_text">Language</a> <a href="#" class="footer_text">privacy</a> <a href="#"
                    class="footer_text">Terms</a></p>
                <p>© Copyright 2019, All Rights Reserved</p>
                <div classN="footer_sns">
                    <a href="#"><i class="footer_sns_i fab fa-twitter"></i></a>
                    <a href="#"><i class="footer_sns_i fab fa-instagram"></i></a>
                    <a href="#"><i class="footer_sns_i fab fa-facebook-square"></i></a>
                </div>
            </footer>
        )
    }
}

export default Footer;
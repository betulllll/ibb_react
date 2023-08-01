
// rfc
import React from 'react'

// i18n
import { withTranslation } from 'react-i18next';

// Router Dom
import { Link } from 'react-router-dom';

// Flag
import tr_flag from "../assist/img/flag/tr.png";
import en_flag from "../assist/img/flag/en.png";
import OtherLanguageServices from './OtherLanguageServices';

// FUNCTION
function OtherLanguageReusability(props) {

const internationalizationLanguageService=(languageButtonTrigger)=>{
 const {i18n}=props;
 i18n.changeLanguage(languageButtonTrigger);

 OtherLanguageServices.headerAccessLanguageServices(languageButtonTrigger);
 

}

    // RETURN
    return (
        <React.Fragment>
            <ul class="list-group list-group-numbered">
                <li class="list-group-item active">
                    <Link className="btn btn-primary" onClick={() => internationalizationLanguageService('tr')}>
                        <img src={tr_flag} />
                    </Link>
                </li>
                <li class="list-group-item active">
                    <Link className="btn btn-primary" onClick={() => internationalizationLanguageService('en')}>
                        <img src={en_flag} />
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default withTranslation()(OtherLanguageReusability);
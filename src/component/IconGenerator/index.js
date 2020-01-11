import React, {useState} from "react";
import "native-toast/dist/native-toast.css";
import './IconGenerator.scss';
import {errorToast} from "../../utils/toastHelper";
import CanavasPreview from "../CanavasPreview";
import FaviconRedirectButton from "../FaviconRedirectButton";

const IconGenerator = () => {
    const [inputValue, setInputValue] = useState("⏰");

    const handleOnChange = e => {
        let value = e.target.value.trim();
        if (value.length > 2) {
            errorToast("Max. 2x Characters allowed!");
            value = value.substr(0, 2);
        }
        setInputValue(value);
    };

    return (
        <div className="container">
            <div className="item preview">
                <CanavasPreview inputValue={inputValue}/>
            </div>
            <div className="item">
                <div className="step">
                    <div className="step-number">1</div>
                    <span className="label">Enter the letters</span>
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleOnChange}
                    size="25"
                    placeholder="Max. 2 characters"
                />
            </div>
            <div className="item">
                <div className="step">
                    <div className="step-number">2</div>
                    <span className="label">Click on the preview</span>
                </div>
                
                <span className="label">The "logo.png" will be downloaded.</span>

            </div>
            <div className="item">
                <div className="step">
                    <div className="step-number">3</div>
                    <span className="label">Upload "logo.png"</span>
                </div>
                <FaviconRedirectButton/>
            </div>
        </div>
    );
};

export default IconGenerator;

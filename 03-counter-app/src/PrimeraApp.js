import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo }) => {
    return (
        <>
            {saludo}
            <p>Mi primera app</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    saludo: "Informacion Default"
}

export default PrimeraApp;

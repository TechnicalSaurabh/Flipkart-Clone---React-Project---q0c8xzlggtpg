import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { StateProvider } from "./components/CartContext";
import reducer, { initialState } from "./components/reducer";
ReactDOM.render(
    <Auth0Provider
        domain="dev-8if3xnbks70yt84o.uk.auth0.com"
        clientId="NAdnWjrxe6Bx4GACCmu0F06RDLLWNFJs"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <StateProvider reducer={reducer} initialState={initialState}>
            <App />
        </StateProvider>
    </Auth0Provider>,
    document.getElementById("root")
);


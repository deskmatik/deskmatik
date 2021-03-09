const pages = module((
    { baseUrl },
    { html, preact},
    { useStatus, useMouseDown, useNetworks },
    { Form, Input, Select, Button, Wrapper, IconLink, CircleButton, ArrowButton, SettingsIcon }) => {

    const Controls = () => {
        const moveUpDown = useMouseDown(async (dir) => {
            const body =  new FormData();
            body.append('dir', dir);

            await fetch(`${baseUrl}/move`, { method: 'POST', body });
        });

        const moveToPosition = async (pos) => {
            const body = new FormData();
            body.append('pos', pos);

            await fetch(`${baseUrl}/move`, { method: 'POST', body });
        };

        return html`
            <${Wrapper}>
                <${ArrowButton} onMouseDown=${() => moveUpDown(1)} arrow="up" />
                <${ArrowButton} onMouseDown=${() => moveUpDown(-1)} arrow="down" />
                <${CircleButton} onClick=${() => moveToPosition(1)}>1</>
                <${CircleButton} onClick=${() => moveToPosition(2)}>2</>
                <${CircleButton} onClick=${() => moveToPosition(3)}>3</>
                <${IconLink} href="/settings">
                    <${SettingsIcon} />
                </>
            </>
        `;
    };

    const Settings = () => {
        const { response: networks } = useNetworks();

        const redirect = (domain) => {
            const { origin, pathname } = window.location;
            const destination = `http://${domain}`;

            if(origin !== destination) {
                window.location.href = `${destination}${pathname}`;
            }
        };

        const connect = async (body) => {
            // const WL_IDLE_STATUS     = 0;
            // const WL_NO_SSID_AVAIL   = 1;
            // const WL_SCAN_COMPLETED  = 2;
            const WL_CONNECTED       = 3;
            // const WL_CONNECT_FAILED  = 4;
            // const WL_CONNECTION_LOST = 5;
            // const WL_DISCONNECTED    = 6;

            try {
                const data = await fetch( `${baseUrl}/connect`, { method: 'POST', body });
                const json = await data.json();
                if(json.status === WL_CONNECTED) {
                    redirect(json.ip);
                }
            } catch (e) {}
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            connect(new FormData(event.target));
        };

        return html`
            <${Wrapper}>
                <${Form} onSubmit=${handleSubmit}>
                    <${Select}>
                        <select name="ssid">
                            ${networks.payload && networks.payload.map(({ssid}) => html`<option value=${ssid}>${ssid}</option>`)}
                        </select>
                    </>
                    <${Input} name="pass" type="password" placeholder="Enter password" />
                    <${Button}>Connect</>
                </> 
            </>
        `;
    };

    return {
        Controls,
        Settings
    };
});

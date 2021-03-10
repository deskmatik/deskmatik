const pages = module((
    { baseUrl },
    { html, preact},
    { useStatus, useInterval, useNetworks },
    { Form, Input, Select, Button, IconLink, CircleButton, ArrowButton, SettingsIcon }) => {

    const Controls = () => {
        const { useEffect } = preact;

        const {start: moveStart, stop: moveStop } = useInterval(async (dir) => {
            const body =  new FormData();
            body.append('dir', dir);

            await fetch(`${baseUrl}/move`, { method: 'POST', body });
        }, 100);

        const moveToPosition = async (pos) => {
            const body = new FormData();
            body.append('pos', pos);

            await fetch(`${baseUrl}/move`, { method: 'POST', body });
        };

        const moveUpStart = (event) => {
            event.preventDefault();
            moveStart(1);
        };

        const moveDownStart = (event) => {
            event.preventDefault();
            moveStart(-1)
        };

        useEffect(() => {
            document.addEventListener('mouseup', moveStop);
            document.addEventListener('touchend', moveStop);
            return () => {
                document.removeEventListener('mouseup', moveStop);
                document.addEventListener('touchend', moveStop);
            }
        }, []);

        return html`
            <${ArrowButton} onMouseDown=${moveUpStart} onTouchStart=${moveUpStart} arrow="up" />
            <${ArrowButton} onMouseDown=${moveDownStart} onTouchStart=${moveDownStart} arrow="down" />

            <${CircleButton} onClick=${() => moveToPosition(1)}>1</>
            <${CircleButton} onClick=${() => moveToPosition(2)}>2</>
            <${CircleButton} onClick=${() => moveToPosition(3)}>3</>
            <${IconLink} href="/settings">
                <${SettingsIcon} />
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
            <${Form} onSubmit=${handleSubmit}>
                <${Select}>
                    <select name="ssid">
                        ${networks.payload && networks.payload.map(({ssid}) => html`<option value=${ssid}>${ssid}</option>`)}
                    </select>
                </>
                <${Input} name="pass" type="password" placeholder="Enter password" />
                <${Button}>Connect</>
            </>
            
        `;
    };

    return {
        Controls,
        Settings
    };
});

const App = module(({}, { preact, html }, {}, { Logo, LogoSvg, Wrapper }, { Controls, Settings }) => {
    const { Router } = preact;

    const App = () => {
        return html`
            <${Wrapper}>
                <${Logo}>
                    <a href="/"><${LogoSvg} /></a>
                </>
                <${Router}>
                    <${Controls} path="/" />
                    <${Settings} path="/settings" />
                </>
            </>
        `;
    };

    return App;
});

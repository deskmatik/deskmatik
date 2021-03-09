const App = module(({}, { preact, html }, {}, {}, { Controls, Settings }) => {
    const { Router } = preact;

    const App = () => {
        return html`
            <${Router}>
                <${Controls} path="/" />
                <${Settings} path="/settings" />
            </>
        `;
    };

    return App;
});

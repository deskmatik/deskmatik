const components = module(({ baseUrl }, { styled, html }, {}) => {

    const Wrapper = styled('div')`
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        
        @media screen and (orientation:landscape) {
            flex-direction: row;
        }
    `;

    const Button = styled('button')`
        color: #161b22;
        height: 40px;
        margin: 5px;
        cursor: pointer;
        display: flex;
        padding: 0 20px;
        font-size: 14px;
        user-select: none;
        align-items: center;
        border-radius: 20px;
        background-color: #fff;
        justify-content: center;

        &:active {
            background-color: #ebebeb;
        }
    `;

    const ArrowButton = styled('button')`
        width: 50px;
        height: 70px;
        cursor: pointer;
        display: flex;
        font-size: 0;
        user-select: none;
        align-items: center;
        justify-content: center;
        background-color: #fff;

        margin: ${({arrow}) => (arrow === 'up' ? '5px 5px 0 5px': '0 5px 5px 5px')};
        border-bottom: ${({arrow}) => (arrow === 'up' && '1px solid #d0d0d0')};
        border-radius: ${({arrow}) => (arrow === 'up' ? '25px 25px 0 0' : '0 0 25px 25px')};
        
        &::before {
            border: solid #161b22;;
            padding: 4px;
            content: "";
            border-width: 0 2px 2px 0;
            transform: ${({arrow}) => (arrow === 'up' ? 'rotate(225deg)':'rotate(45deg)')};
        }
        
        &:active {
            background-color: #ebebeb;
        }
        
        @media screen and (orientation:landscape) {
            width: 70px;
            height: 50px;
            margin: ${({arrow}) => (arrow === 'up' ? '5px 0 5px 5px': '5px 5px 5px 0')};
            border-bottom: none;
            border-right: ${({arrow}) => (arrow === 'up' && '1px solid #d0d0d0')};
            border-radius: ${({arrow}) => (arrow === 'up' ? '25px 0 0 25px' : '0 25px 25px 0')};
        }
    `;

    const CircleButton = styled('button')`
        color: #161b22;
        width: 50px;
        height: 50px;
        margin: 5px;
        cursor: pointer;
        font-size: 16px;
        user-select: none;
        border-radius: 50%;
        background-color: #fff;

        &:active {
            background-color: #ebebeb;
        }
    `;

    const Form = styled('form')`
        display: flex;
        min-width: 200px;
        max-width: 300px;
        flex-direction: column;
    `;

    const Input = styled('input')`
        color: #161b22;
        height: 40px;
        margin: 5px;
        font-size: 14px;
        padding: 0 20px;
        border-radius: 20px;
        background-color: #fff;
    `;

    const Select = styled('div')`
        height: 40px;
        margin: 5px;
        padding: 0 30px 0 20px;
        position: relative;
        border-radius: 20px;
        background-color: #fff;

        & > select {
            color: #161b22;
            width: 100%;
            height: 100%;
            font-size: 14px;
        },

        &::before {
            top: 15px;
            right: 15px;
            border: solid #555;
            padding: 3px;
            content: "";
            position: absolute;
            transform: rotate(45deg);
            border-width: 0 2px 2px 0;
        }
    `;

    const IconLink = styled('a')`
        width: 30px;
        height: 30px;
        margin: 20px;
    `;

    const SettingsIcon = ({size = 30, color = '#fff'}) => {
        return html`<svg width="${size}" height="${size}" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="${color}" d="m22.683 9.394-1.88-.239c-.155-.477-.346-.937-.569-1.374l1.161-1.495c.47-.605.415-1.459-.122-1.979l-1.575-1.575c-.525-.542-1.379-.596-1.985-.127l-1.493 
            1.161c-.437-.223-.897-.414-1.375-.569l-.239-1.877c-.09-.753-.729-1.32-1.486-1.32h-2.24c-.757 
            0-1.396.567-1.486 1.317l-.239 1.88c-.478.155-.938.345-1.375.569l-1.494-1.161c-.604-.469-1.458-.415-1.979.122l-1.575 1.574c-.542.526-.597 
            1.38-.127 1.986l1.161 1.494c-.224.437-.414.897-.569 1.374l-1.877.239c-.753.09-1.32.729-1.32 1.486v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 
            1.495c-.47.605-.415 1.459.122 1.979l1.575 1.575c.526.541 1.379.595 1.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 
            1.396-.567 1.486-1.317l.239-1.88c.477-.155.937-.346 1.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575c.542-.526.597-1.379.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239c.753-.09 
            1.32-.729 1.32-1.486v-2.24c.001-.757-.566-1.396-1.316-1.486zm-10.683 7.606c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
        </svg>`;
    };

    const LogoSvg = ({color = '#fff'}) => {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 52" >
            <path fill="#16a085" d="M268.4 46.4l-9.4 5.5h-10.7L265.2.3h10.2l16.9 51.6h-10.7l-9.5-5.5h-3.7z"/>
            <path fill="${color}" d="M17.8 51.8H0V0h17.8c4.6 0 8.3.5 11.3 1.4S34.3 3.9 36 6c1.6 2.2 2.8 4.7 3.4 7.6s.9 6.7.9 11.4-.3 8.5-.9 11.6-1.6 5.8-3.2 8.2-3.9 4.2-6.9 5.3-6.8 1.7-11.5 
            1.7zm11.3-20.6c.1-1.6.2-3.9.2-6.7 0-2.9-.1-5.2-.3-6.9s-.7-3.3-1.5-4.7-1.9-2.4-3.5-2.9c-1.5-.5-3.6-.8-6.2-.8h-7.1v33.5h7.1c3.9 0 6.7-1 8.5-2.9 1.5-1.6 2.4-4.5 2.8-8.6zM110.9 
            8.9c-5.6 0-8.5 1.8-8.5 5.3 0 1.6.7 2.8 2.1 3.6s4.7 2 9.8 3.6c5.2 1.6 8.8 3.3 10.8 5.3 2.1 2 3.1 5 3.1 9.2 0 5.2-1.7 9.2-5.1 11.9s-7.8 4-13.2 4c-4 0-9-.6-14.8-1.8l-2.8-.5 
            1.1-7.9c6.9.9 12.3 1.3 15.9 1.3 5.5 0 8.2-2.2 8.2-6.5 0-1.6-.6-2.8-1.9-3.7s-3.8-1.8-7.6-2.9c-6-1.6-10.2-3.5-12.7-5.8-2.5-2.2-3.7-5.3-3.7-9.3 0-5 1.6-8.7 4.8-11.2S104-.2 
            109.6-.2c3.8 0 8.7.5 14.6 1.5l2.8.5-.9 8c-7.1-.5-12.2-.9-15.2-.9zM186 51.8V0h18.3l9.3 37.8L222.9 0h18.3v51.8h-10.7V11.7h-1.2L219 49.5h-10.7L198 11.7h-1.2v40.1H186zM291.8 
            9.3V0h38.9v9.3h-14v42.5H306V9.3h-14.2zM337.5 51.8V0h10.7v51.8h-10.7zM166 .1h11.9l-16.4 20.7 19.3 31h-11.9L155 29.2l-7.1 8.8v13.8h-10.8V37.2L166 .1zM137.1.1h10.8v10l-10.8 
            14V.1zM385.2.2h11.9L380.7 21 400 52h-11.9l-13.9-22.7-7.1 8.8V52h-10.8V37.3L385.2.2zM356.4.2h10.8v10l-10.8 14V.2zM49.6 0h34.2v9.1H49.6zM49.6 42.7h34.2v9.1H49.6zM49.6 21.3h34.2v9.1H49.6z"/>
        </svg>`;
    };

    const Logo = styled('div')`
        position: absolute;
        top: 35px;
        width: 130px;
    `;

    return {
        Logo,
        Form,
        Input,
        Select,
        Button,
        Wrapper,
        LogoSvg,
        IconLink,
        ArrowButton,
        SettingsIcon,
        CircleButton
    }
});

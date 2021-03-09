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
        color: #555;
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
        color: #555;
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
            border: solid #555;
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
        color: #555;
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
        color: #555;
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
            color: #555;
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

    return {
        Form,
        Input,
        Select,
        Button,
        Wrapper,
        IconLink,
        ArrowButton,
        SettingsIcon,
        CircleButton
    }
});

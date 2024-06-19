declare type ThemeButton = {
    buttonClick: () => void;
    buttonText: string
}

export function ThemeButton({buttonClick, buttonText}: ThemeButton) {
    return (
        <button onClick={() => buttonClick()}
                className="w-full py-2 bg-yellow-500 text-white font-semibold rounded active:bg-yellow-400 hover:bg-yellow-500 border">
            {buttonText}
        </button>
    )
}
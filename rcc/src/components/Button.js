export const Button = ({ text, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            style={{
            }}
        >
            {children || text}
        </button>
    );
}


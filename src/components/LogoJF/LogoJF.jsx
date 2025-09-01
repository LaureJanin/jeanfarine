// src/components/BrushRevealLogo.jsx
export default function BrushRevealLogo({
                                            mode = "text",     // "text" | "mask"
                                            width = 220,
                                            height = 60,
                                            color = "#fedd58",
                                            title = "Jean Farine",
                                            className = "",
                                        }) {
    const viewW = 220;
    const viewH = 60;

    return (
        <svg
            className={`brush-reveal ${className}`}
            viewBox={`0 0 ${viewW} ${viewH}`}
            width={width}
            height={height}
            role="img"
            aria-label={title}
        >
            <title>{title}</title>

            <defs>
                {/* Masque de révélation : un rect qu’on scale en X au hover */}
                <mask id="revealMask">
                    <rect width="100%" height="100%" fill="black" />
                    <rect
                        className="clip-wipe"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="white"
                    />
                </mask>
            </defs>

            {/* (facultatif) un léger trait “pinceau” permanent en fond */}
            <path
                d="M8 42 C 70 34, 150 28, 208 26"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
            />

            {/* Contenu révélé */}
            <g mask="url(#revealMask)">
                {mode === "text" ? (
                    <text
                        x="10"
                        y="30"
                        fill={color}
                        fontFamily="Lato, system-ui, sans-serif"
                        fontSize="22"
                        fontWeight="900"
                        letterSpacing="1.5"
                    >
                        JEAN FARINE
                    </text>
                ) : (
                    // petit masque comédie minimal
                    <g transform="translate(88,10)" stroke={color} fill="none" strokeWidth="2" strokeLinecap="round">
                        <ellipse cx="22" cy="20" rx="20" ry="22" />
                        <path d="M14 18 q4 -4 8 0 M24 18 q4 -4 8 0" />
                        <path d="M14 28 q8 6 16 0" />
                    </g>
                )}
            </g>

            {/* Pinceau (se déplace au hover) */}
            <g className="brush" transform="translate(6,18)">
                {/* manche */}
                <path d="M0 10 L84 0 L88 10 L4 20 Z" fill="#e0463c" />
                {/* virole */}
                <rect x="80" y="1.5" width="10" height="10" rx="2" fill="#2c2c2c" />
                {/* poils */}
                <path
                    d="M90 3 C102 3,108 8,110 13 C108 18,103 21,96 20 C90 19,88 14,90 3Z"
                    fill={color}
                />
            </g>
        </svg>
    );
}

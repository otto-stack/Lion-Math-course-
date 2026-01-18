import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    fallback?: string;
    alt: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallback, alt, className, ...props }) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    const [triedFallback, setTriedFallback] = useState(false);
    const [error, setError] = useState(false);

    // If the src prop changes from the outside, reset our internal state
    useEffect(() => {
        setCurrentSrc(src);
        setTriedFallback(false);
        setError(false);
    }, [src]);

    const handleError = () => {
        if (fallback && !triedFallback) {
            // Try the placeholder URL if the local file isn't found
            setCurrentSrc(fallback);
            setTriedFallback(true);
        } else {
            // If even the fallback fails, show the error box
            setError(true);
        }
    };

    if (error) {
        return (
            <div className={`${className} bg-gray-100 flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-[#C5A059]/50 text-gray-500 overflow-hidden`}>
                <p className="font-bold text-red-500 mb-1 text-sm">Image Not Found</p>
                <p className="text-[10px] break-all font-mono bg-gray-200 px-1 py-0.5 rounded mb-2">"{src}"</p>
                <div className="space-y-1">
                    <p className="text-[10px]">1. Put your photo in the <b>public</b> folder</p>
                    <p className="text-[10px]">2. Rename it to match the name above</p>
                    <p className="text-[10px]">3. Sync changes to GitHub</p>
                </div>
            </div>
        );
    }

    return (
        <img 
            src={currentSrc} 
            alt={alt} 
            className={className}
            onError={handleError}
            {...props} 
        />
    );
};

export default ImageWithFallback;
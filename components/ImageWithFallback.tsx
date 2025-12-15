import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className, ...props }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className={`${className} bg-gray-100 flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-[#C5A059]/50 text-gray-500 overflow-hidden`}>
                <p className="font-bold text-red-500 mb-1 text-sm">Image Not Found</p>
                <p className="text-xs break-all font-mono bg-gray-200 px-1 py-0.5 rounded">"{src}"</p>
                <p className="text-[10px] mt-2">1. Download code</p>
                <p className="text-[10px]">2. Put file in 'public' folder</p>
            </div>
        );
    }

    return (
        <img 
            src={src} 
            alt={alt} 
            className={className}
            onError={() => setError(true)}
            {...props} 
        />
    );
};

export default ImageWithFallback;
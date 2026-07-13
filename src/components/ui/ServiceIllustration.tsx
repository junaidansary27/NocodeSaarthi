import React from 'react';

interface ServiceIllustrationProps {
    serviceId: string;
    className?: string;
}

export function ServiceIllustration({ serviceId, className = '' }: ServiceIllustrationProps) {
    const illustrations: Record<string, React.ReactNode> = {
        'ai-agents': (
            <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <rect x="40" y="30" width="120" height="100" rx="12" fill="rgba(255,107,53,0.1)" stroke="rgba(255,107,53,0.3)" strokeWidth="1" />
                <circle cx="100" cy="65" r="20" fill="rgba(255,107,53,0.2)" stroke="rgba(255,107,53,0.5)" strokeWidth="1" />
                <path d="M90 65 L100 75 L115 60" stroke="rgba(255,107,53,0.8)" strokeWidth="2" strokeLinecap="round" />
                <rect x="55" y="95" width="90" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
                <rect x="55" y="110" width="60" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
                <circle cx="140" cy="115" r="10" fill="rgba(15,118,110,0.2)" stroke="rgba(15,118,110,0.4)" strokeWidth="1" />
            </svg>
        ),
        'ai-automation': (
            <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M50 80 L80 50 L100 70 L120 40 L150 60" stroke="rgba(255,107,53,0.4)" strokeWidth="2" fill="none" />
                <circle cx="80" cy="50" r="6" fill="rgba(255,107,53,0.6)" />
                <circle cx="100" cy="70" r="6" fill="rgba(15,118,110,0.6)" />
                <circle cx="120" cy="40" r="6" fill="rgba(68,136,255,0.6)" />
                <rect x="40" y="100" width="50" height="30" rx="6" fill="rgba(255,107,53,0.15)" />
                <rect x="110" y="100" width="50" height="30" rx="6" fill="rgba(15,118,110,0.15)" />
                <text x="65" y="120" fontSize="12" fill="rgba(247,244,238,0.7)" textAnchor="middle">AI</text>
                <text x="135" y="120" fontSize="12" fill="rgba(247,244,238,0.7)" textAnchor="middle">OCR</text>
            </svg>
        ),
        'workflow-automation': (
            <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <circle cx="40" cy="80" r="12" fill="rgba(255,107,53,0.2)" stroke="rgba(255,107,53,0.5)" />
                <circle cx="100" cy="80" r="12" fill="rgba(15,118,110,0.2)" stroke="rgba(15,118,110,0.5)" />
                <circle cx="160" cy="80" r="12" fill="rgba(68,136,255,0.2)" stroke="rgba(68,136,255,0.5)" />
                <path d="M52 80 L80 80" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M112 80 L148 80" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <rect x="35" y="30" width="14" height="10" rx="2" fill="rgba(255,107,53,0.3)" />
                <rect x="95" y="30" width="14" height="10" rx="2" fill="rgba(15,118,110,0.3)" />
                <rect x="155" y="30" width="14" height="10" rx="2" fill="rgba(68,136,255,0.3)" />
                <path d="M100 110 L100 130" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="100" cy="130" r="8" fill="rgba(255,107,53,0.2)" stroke="rgba(255,107,53,0.4)" />
            </svg>
        ),
        'mvp-development': (
            <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <rect x="50" y="40" width="100" height="70" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,107,53,0.3)" />
                <rect x="55" y="45" width="90" height="8" rx="2" fill="rgba(255,107,53,0.4)" />
                <rect x="55" y="60" width="70" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="55" y="72" width="50" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="55" y="84" width="65" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="130" y="55" width="20" height="20" rx="4" fill="rgba(15,118,110,0.2)" stroke="rgba(15,118,110,0.4)" />
                <rect x="30" y="120" width="140" height="10" rx="2" fill="rgba(255,255,255,0.08)" />
            </svg>
        ),
        'full-stack-development': (
            <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <rect x="30" y="30" width="60" height="100" rx="6" fill="rgba(255,107,53,0.1)" stroke="rgba(255,107,53,0.3)" />
                <rect x="110" y="30" width="60" height="100" rx="6" fill="rgba(15,118,110,0.1)" stroke="rgba(15,118,110,0.3)" />
                <text x="60" y="80" fontSize="10" fill="rgba(247,244,238,0.5)" textAnchor="middle">Frontend</text>
                <text x="140" y="80" fontSize="10" fill="rgba(247,244,238,0.5)" textAnchor="middle">Backend</text>
                <path d="M90 60 L110 60" stroke="rgba(255,107,53,0.4)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
                        <path d="M0 0 L0 6 L6 3" fill="rgba(255,107,53,0.4)" />
                    </marker>
                </defs>
                <rect x="35" y="45" width="50" height="6" rx="1" fill="rgba(255,255,255,0.1)" />
                <rect x="35" y="60" width="40" height="6" rx="1" fill="rgba(255,255,255,0.1)" />
                <rect x="115" y="45" width="50" height="6" rx="1" fill="rgba(255,255,255,0.1)" />
                <rect x="115" y="60" width="35" height="6" rx="1" fill="rgba(255,255,255,0.1)" />
            </svg>
        ),
        'no-code-development': (
            <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <rect x="40" y="30" width="120" height="100" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,107,53,0.3)" />
                <rect x="50" y="40" width="100" height="12" rx="3" fill="rgba(255,107,53,0.25)" />
                <rect x="50" y="58" width="40" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="95" y="58" width="55" height="8" rx="2" fill="rgba(15,118,110,0.2)" />
                <rect x="50" y="75" width="100" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="50" y="92" width="30" height="8" rx="2" fill="rgba(255,107,53,0.2)" />
                <rect x="85" y="92" width="65" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
                <circle cx="160" cy="50" r="8" fill="rgba(15,118,110,0.3)" />
            </svg>
        ),
    };

    return illustrations[serviceId] || null;
}
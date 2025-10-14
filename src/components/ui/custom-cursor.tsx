// src/components/ui/custom-cursor.tsx
'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const dotRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			if (cursorRef.current && dotRef.current) {
				cursorRef.current.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
				dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
			}
		};
		document.addEventListener('mousemove', moveCursor);
		return () => document.removeEventListener('mousemove', moveCursor);
	}, []);

	// Hide the default cursor
	useEffect(() => {
		document.body.style.cursor = 'none';
		return () => {
			document.body.style.cursor = '';
		};
	}, []);

	return (
		<>
			<div
				ref={cursorRef}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: 40,
					height: 40,
					borderRadius: '50%',
					border: '2px solid #e11d48', // Tailwind red-600
					pointerEvents: 'none',
					zIndex: 9999,
					mixBlendMode: 'difference',
					transition: 'transform 0.08s cubic-bezier(.22,1,.36,1)',
				}}
			/>
			<div
				ref={dotRef}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: 6,
					height: 6,
					borderRadius: '50%',
					background: '#e11d48',
					pointerEvents: 'none',
					zIndex: 10000,
					mixBlendMode: 'difference',
					transition: 'transform 0.04s cubic-bezier(.22,1,.36,1)',
				}}
			/>
		</>
	);
}

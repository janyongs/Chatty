'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const mouthImages = ['/black.png', '/closeMouse.png', '/openMouse.png'];

const VoiceMouth = () => {
    const mouthRef = useRef<HTMLImageElement>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let audioContext: AudioContext | null = null;
        let analyser: AnalyserNode | null = null;
        let microphone: MediaStreamAudioSourceNode | null = null;
        let dataArray: Uint8Array | null = null;
        const threshold = 30; // 임계값 설정

        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                audioContext = new AudioContext();
                analyser = audioContext.createAnalyser();
                microphone = audioContext.createMediaStreamSource(stream);
                microphone.connect(analyser);
                analyser.fftSize = 512;
                dataArray = new Uint8Array(analyser.frequencyBinCount);

                const updateMouth = () => {
                    if (!analyser || !dataArray) return;

                    analyser.getByteFrequencyData(dataArray);
                    const average =
                        dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
                    // const isSpeakingNow = dataArray.some((value) => value * 10000 > threshold);
                    const isSpeakingNow = average > threshold;

                    if (isSpeakingNow) {
                        setCurrentImageIndex((prevIndex) => {
                            return prevIndex === 1 ? 2 : 1;
                        }); // 말할 때와 말하지 않을 때 이미지 변경
                    } else {
                        setCurrentImageIndex(0); // 말하지 않을 때는 "/black.png" 표시
                    }

                    requestAnimationFrame(updateMouth);
                };

                updateMouth();
            })
            .catch((error) => {
                console.error('Error accessing media devices.', error);
            });

        return () => {
            if (audioContext) {
                audioContext.close().catch(console.error);
                audioContext = null;
                analyser = null;
                microphone = null;
                dataArray = null;
            }
        };
    }, []);
    return (
        <div className="w-72 h-72 relative">
            <div className="absolute w-full h-full">
                <Image
                    ref={mouthRef}
                    src={mouthImages[currentImageIndex]}
                    alt="캐릭터"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default VoiceMouth;

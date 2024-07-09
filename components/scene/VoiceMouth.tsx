'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const VoiceMouth = () => {
    const mouthRef = useRef<HTMLImageElement>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        let audioContext: AudioContext | null = null;
        let analyser: AnalyserNode | null = null;
        let microphone: MediaStreamAudioSourceNode | null = null;
        let dataArray: Uint8Array | null = null;
        const threshold = 0; // 임계값 설정

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

                    setIsSpeaking(dataArray.some((value) => value * 100 > threshold));

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
            <div className={`absolute w-full h-full ${!isSpeaking ? 'brightness-50' : ''}`}>
                <Image src="/images/hair1.png" alt="헤어" fill className="z-10" />
                <Image
                    ref={mouthRef}
                    src="/images/base.png"
                    alt="캐릭터"
                    layout="fill"
                    objectFit="cover"
                />
                {isSpeaking && <Image src="/images/base_face.gif" alt="베이스얼굴" fill />}
            </div>
        </div>
    );
};

export default VoiceMouth;

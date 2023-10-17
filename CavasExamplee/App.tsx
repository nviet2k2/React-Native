import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';
import Canvas, {CanvasRenderingContext2D} from 'react-native-canvas';

export default function App() {
  const canvasRef = useRef<Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;

      if (context) {
        context.beginPath();
        context.arc(100, 100, 50, 0, 2 * Math.PI);
        context.fillStyle = 'red';
        context.fill();
      }
    }
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Canvas ref={canvasRef} style={{width: 200, height: 200}} />
    </View>
  );
}

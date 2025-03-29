'use client';

import { motion } from 'motion/react';
import Coin from '@/registry/coin/coin';
import { useState } from 'react';
import { Slider } from '@ui/slider';
import { Label } from '@ui/label';
import { Switch } from '@ui/switch';

export default function CoinPad() {
  const [sliderValue, setSliderValue] = useState<number[]>([0]);
  const [isEnableAutoRotate, setIsEnableAutoRotate] = useState<boolean>(false);
  return (
    <motion.div
      className="coin-pad flex w-full flex-col rounded-sm border border-gray-600"
      layout
    >
      <motion.div className="coin-pad__content flex flex-row items-center justify-center bg-[url('/background/batthern.png')]">
        <motion.div className="relative flex h-[300px] w-full flex-row items-center justify-center">
          <Coin rotateY={sliderValue[0]} autoRotate={isEnableAutoRotate} />
        </motion.div>
      </motion.div>
      <motion.div className="coin-pad__controller flex flex-col items-center justify-center border border-t-2 border-gray-800 px-12 py-6 rounded-b-sm">
        <motion.div className="flex w-full flex-row items-center justify-start">
          <Label className="mr-2 w-[10%]">Rotate Y</Label>
          <Slider
            value={sliderValue}
            min={0}
            max={360}
            onValueChange={(value) => {
              setSliderValue(value);
            }}
            name="rotate-y"
            step={1}
            className="mr-4"
          />
          <motion.input
            value={sliderValue[0]}
            disabled
            className="w-[5%] text-center"
          ></motion.input>{' '}
          <motion.span>deg</motion.span>
        </motion.div>
        <motion.div className="mt-4 flex w-full flex-row items-center justify-start">
          <Label className="mr-4">Auto rotate</Label>
          <Switch
            onCheckedChange={(checked) => {
              setIsEnableAutoRotate(checked);
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

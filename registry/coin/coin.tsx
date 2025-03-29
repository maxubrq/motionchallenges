'use client';

export type CoinProps = {
  rotateY?: number;
  autoRotate?: boolean;
};
export default function Coin(props: CoinProps) {
  const { rotateY, autoRotate } = props;
  const css = `
   .coin__container {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: relative;
    transform-style: preserve-3d;
   }

   .coin__wrapper {
    width: 90px;
    height: 90px;
    transform-style: preserve-3d;
    position: absolute;
   }

   @keyframes rotate {
    100% {    
      transform: rotateY(1turn);
    }
   }

   .coin--rotate {
    animation: rotate 2s infinite linear;
   }

   .coin__side {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: url('/resources/coin.svg') no-repeat center center;
    position: absolute;
    backface-visibility: hidden;
   }

   .coin__side--2 {
    transform: rotateY(180deg) translate(5px);
   }

   .coin__side--back {
     transform: rotateY(180deg);
     background: orange;
    }

    .coin__side--2-back {
      transform: translateZ(-5px);
      background: orange;
    }

    .coin__edge {
        width: 8px;
        height: 100%;
        background: orange;
        position: absolute;
        transform: translateZ(-1.5px) translateX(46px) rotateY(90deg);
        border-radius: 3px;
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className={'coin__container'}>
        <div
          className={'coin__wrapper ' + (autoRotate ? ' coin--rotate' : '')}
          style={{
            transform:
              autoRotate === false ? `rotateY(${rotateY}deg)` : undefined,
          }}
        >
          <div className="coin__edge"></div>
        </div>
        <div
          className={'coin__wrapper ' + (autoRotate ? ' coin--rotate' : '')}
          style={{
            transform:
              autoRotate === false ? `rotateY(${rotateY}deg)` : undefined,
          }}
        >
          <div className="coin__side"></div>
          <div className="coin__side coin__side--back"></div>
          <div className="coin__side coin__side--2"></div>
          <div className="coin__side coin__side--2-back"></div>
        </div>
      </div>
    </>
  );
}

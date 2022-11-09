import React, { createRef, RefObject, useMemo, useRef, useState } from "react";
import { Spring, WaveTank } from "./WaveTank";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRafLoop, useMount } from "react-use";

import './HeroAnimation.css';

const SVG_WIDTH = 321;

type Bubble = {
  index: number,
  cx: number,
  cy: number,
  size: number,
  nodeRef: RefObject<SVGCircleElement>,
};

function HeroAnimation() {
  const waveTank = useRef(new WaveTank());
  const [springs, setSprings] = useState<Spring[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const grid = SVG_WIDTH / waveTank.current.waveLength;
  const width = SVG_WIDTH;
  const points = [
    [0, 200],
    [0, 0],
    ...springs.map((x, i) => [i * grid, x.p]),
    [width, 0],
    [width, 200],
  ];

  let nextBubbleIntervalBase = 100;
  let nextbubbleIntervalRange = 100;
  let nextBubbleTime = useRef(0);

  let bubbleIndex = useRef(0);
  const addNextBubble = () => {
    nextBubbleTime.current = performance.now() + nextBubbleIntervalBase + Math.random() * nextbubbleIntervalRange;

    const thisBubble: Bubble = {
      index: bubbleIndex.current,
      cx: Math.floor(Math.random() * width),
      cy: 200,
      size: 2 + Math.floor(Math.random() * 4),
      nodeRef: createRef<SVGCircleElement>(),
    }
    bubbleIndex.current += 1;
    bubblesRef.current = [...bubblesRef.current, thisBubble];
    setBubbles(bubblesRef.current);
  }

  useMount(() => {
    addNextBubble();
    setTimeout(addNextBubble, 400);
    setTimeout(addNextBubble, 700);
  });

  useRafLoop(() => {
    const timestamp = performance.now();

    waveTank.current.update(waveTank.current.springs);
    bubblesRef.current = bubbles.map(b => {
      if (b.cy > 60) return ({ ...b, cy: b.cy -= 1 })
      else {
        const waveIndex = Math.floor(b.cx / width * 100)
        waveTank.current.springs.forEach((el, i) => {
          const indexDist = Math.abs(i - waveIndex);
          const acceleration = Math.max(0, 5 - indexDist) / 5;
          if (acceleration > 0) {
            el.p += -acceleration * b.size * 1.5;
          }
        })
        return undefined;
      }
    }).filter(b => b !== undefined);
    setBubbles(bubblesRef.current);
    setSprings([...waveTank.current.springs]);

    if (timestamp > nextBubbleTime.current) {
      addNextBubble();
    }
  });

  const springsPath = points.map((x) => x.join(",")).join(" ");
  return (
    <svg className="animated-logo" width="321" height="182" viewBox="0 0 321 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M238.317 6.49826L234.061 0H263.643L277.537 35.4097L290.536 0H319.221L317.43 5.37744V168.309L320.342 181.755L305.774 170.997L290.536 159.566L294.122 154.412V94.7975L277.76 139.397L260.954 79.5594V137.379L236.749 119.226L238.317 117.881V6.49826Z" fill="#C91335" />
      <path fillRule="evenodd" clipRule="evenodd" d="M230.773 11.2676L220.71 0.0332031H170.148L159.615 10.5662V117.534L198.238 145.858L230.773 119.876V11.2676ZM188.171 114.259L203.855 100.917V27.8875H188.171V114.259Z" fill="#C91335" />
      <path fillRule="evenodd" clipRule="evenodd" d="M81.6154 11.2676L91.6787 0.0332031H142.24L152.773 10.5662V117.534L114.151 145.858L81.6154 119.876V11.2676ZM124.217 114.259L108.534 100.917V27.8875L124.217 27.8875L124.217 114.259Z" fill="#C91335" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.681 177.457L4.68099 5.88526L0 0.0332031H58.2824L74.201 9.63005V124.792L2.80861 181.903L4.681 177.457ZM46.1118 27.6527H30.4281V117.769L46.1118 105.83V27.6527Z" fill="#C91335" />
      <mask id="mask0_18_30" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="321" height="182">
        <path d="M238.317 6.49826L234.061 0H263.643L277.537 35.4097L290.536 0H319.221L317.43 5.37744V168.309L320.342 181.755L305.774 170.997L290.536 159.566L294.122 154.412V94.7975L277.76 139.397L260.954 79.5594V137.379L236.749 119.226L238.317 117.881V6.49826Z" fill="#C91335" />
        <path fillRule="evenodd" clipRule="evenodd" d="M230.773 11.2676L220.71 0.0332031H170.148L159.615 10.5662V117.534L198.238 145.858L230.773 119.876V11.2676ZM188.171 114.259L203.855 100.917V27.8875H188.171V114.259Z" fill="#C91335" />
        <path fillRule="evenodd" clipRule="evenodd" d="M81.6154 11.2676L91.6787 0.0332031H142.24L152.773 10.5662V117.534L114.151 145.858L81.6154 119.876V11.2676ZM124.217 114.259L108.534 100.917V27.8875L124.217 27.8875L124.217 114.259Z" fill="#C91335" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.681 177.457L4.68099 5.88526L0 0.0332031H58.2824L74.201 9.63005V124.792L2.80861 181.903L4.681 177.457ZM46.1118 27.6527H30.4281V117.769L46.1118 105.83V27.6527Z" fill="#C91335" />
      </mask>
      <g mask="url(#mask0_18_30)">
        <polygon className="wave" points={springsPath} fill="#E8274B" transform="translate(0, 60)" />
        <TransitionGroup component={null}>
          {bubbles.map((b) => (
            <CSSTransition classNames="pop" key={b.index} timeout={500} nodeRef={b.nodeRef as unknown as RefObject<HTMLElement>}>
              <circle className="bubble" ref={b.nodeRef} cx={b.cx} cy={b.cy} r={b.size} stroke="#FF6B86" strokeWidth={b.size / 3} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </g>
      <path xmlns="http://www.w3.org/2000/svg" d="M169.896 150.28C169.256 148.808 167.784 148.168 166.184 147.592C163.816 146.824 163.304 146.952 161.896 149.128C157.736 155.912 149.8 166.344 148.584 174.088C148.392 175.112 149.032 175.112 149.544 175.944C150.632 177.736 152.616 179.656 157.032 179.656C159.336 179.656 160.872 174.216 161.448 172.488C162.664 169.48 163.816 166.472 165.8 163.848C167.528 161.672 174.12 153.928 174.248 157.064C173.096 159.496 171.176 162.44 169.896 165.192C168.488 167.752 168.04 170.632 168.616 173.576C169.192 176.712 171.432 178.568 174.568 179.592C177.064 180.488 179.24 179.72 181.48 178.568C182.696 177.992 182.696 177.096 182.184 176.2C180.2 172.232 183.656 165.256 185.64 160.008C186.536 157.768 187.24 155.848 186.28 153.544C184.68 149.576 179.048 146.824 174.696 148.36C172.968 148.936 171.56 149.704 169.896 150.28ZM188.742 155.336C188.55 157.704 188.422 157.832 188.422 160.328C188.358 161.8 188.358 163.08 188.294 164.552C188.422 167.624 188.166 170.888 188.486 173.96C188.678 176.328 190.087 178.184 192.391 179.016C194.119 179.656 195.911 180.104 197.703 180.552C200.519 181.128 204.423 180.36 206.407 176.84C208.007 173.832 209.799 170.952 211.207 167.816C213.767 161.992 218.631 152.52 222.727 147.4C224.583 145.16 222.343 138.12 221.447 141.256C221.319 141.576 220.679 141.128 220.295 141.256C220.039 141.384 219.655 141.64 219.463 141.96C218.119 143.368 216.711 144.776 215.623 146.312C213.959 148.744 212.295 151.176 210.759 153.544C207.687 158.216 204.615 162.888 201.671 167.496C201.159 168.136 200.519 168.776 199.879 169.736C200.199 165.192 200.903 161.8 201.991 157.64C202.247 156.488 202.759 155.336 202.887 154.12C202.951 153.16 203.079 152.008 202.503 151.24C200.967 149.128 188.358 147.976 188.742 155.336ZM213.142 175.24C213.014 178.76 214.294 180.872 216.47 182.408C218.134 183.624 222.294 181 222.55 179.08C222.998 175.112 224.79 171.528 226.774 168.008C228.246 165.448 229.974 163.016 231.318 160.392C233.622 156.552 231.318 153.352 227.67 152.072C227.222 151.944 226.198 152.136 225.878 152.584C224.534 153.864 223.254 155.336 222.23 156.744C220.31 159.432 218.582 162.248 216.726 165.128C214.678 168.392 213.142 171.912 213.142 175.24ZM243.414 140.232C243.03 139.4 242.838 138.76 242.582 138.312C242.07 137.544 241.302 137.16 240.854 136.52C239.702 134.856 237.846 134.664 236.438 135.944C235.798 136.648 235.35 137.352 234.774 137.864C231.83 140.808 230.87 144.648 229.078 148.104C228.95 148.36 228.758 148.744 228.886 148.936C229.974 151.368 233.43 150.024 235.35 149.128C236.822 148.424 238.102 147.08 239.19 145.928C240.15 145.096 240.854 144.008 241.622 143.048C242.326 142.216 242.838 141.128 243.414 140.232ZM265.106 158.152C265.17 158.152 265.234 158.152 265.49 158.216C264.85 160.008 264.338 161.736 263.826 163.464C261.778 168.264 261.01 178.952 267.729 180.808C269.586 181.32 271.378 180.936 273.106 180.36C273.49 180.104 273.618 179.592 273.618 179.144C273.682 176.904 273.298 174.472 273.746 172.296C274.962 166.216 276.242 161.736 278.226 154.12C278.546 151.368 276.69 150.024 273.938 149.256C273.618 149.192 273.234 149.064 272.978 148.872C269.778 147.272 266.77 147.592 264.21 149.768C262.29 151.176 260.626 152.968 258.962 154.824C258.002 155.784 257.106 157 256.274 158.024C256.466 156.872 256.594 155.72 256.722 154.632C256.85 153.416 257.042 151.944 256.978 150.664C256.914 149.192 256.274 148.04 254.802 147.656C252.882 147.144 251.026 146.504 249.17 145.8C247.826 145.416 246.61 145.544 245.65 146.44C243.666 148.104 241.682 149.896 240.082 152.008C236.818 156.68 234.258 161.928 232.401 167.496C231.505 170.504 230.161 173.064 229.649 176.328C229.329 177.48 230.993 178.76 232.145 179.016C233.169 179.208 234.194 179.592 235.154 179.976C236.882 180.808 239.57 180.488 239.57 178.568C239.57 174.088 242.834 164.68 245.97 160.712C246.226 163.464 246.034 167.752 246.418 170.696C246.802 173.896 249.362 176.136 252.882 176.136C255.186 176.136 256.274 174.984 256.786 173.576C259.666 165.384 262.802 159.624 265.106 158.152Z" fill="#E8274B" />
    </svg>
  );
}
export default HeroAnimation;

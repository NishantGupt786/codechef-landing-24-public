import React, { useReducer, useEffect } from 'react';

interface Ripple {
  id: string;
  x: number;
  y: number;
}

interface RippleStaticProps {
  x?: number; // Static X coordinate
  y?: number; // Static Y coordinate
  maxSize?: number;
  duration?: number;
  position?: 'top-left' | 'bottom-right'; // Added prop for responsive positioning
}

type RippleState = Ripple[];

type RippleAction =
  | { type: 'ADD_RIPPLE'; payload: Ripple }
  | { type: 'REMOVE_RIPPLE'; payload: string };

const rippleReducer = (state: RippleState, action: RippleAction): RippleState => {
  switch (action.type) {
    case 'ADD_RIPPLE':
      return [...state, action.payload].slice(-30);
    case 'REMOVE_RIPPLE':
      return state.filter((ripple) => ripple.id !== action.payload);
    default:
      return state;
  }
};

const RippleStatic2: React.FC<RippleStaticProps> = ({
  x = 0,
  y = 0,
  maxSize = .4,
  duration = 1000,
  position,
}) => {
  const [ripples, dispatch] = useReducer(rippleReducer, []);

  useEffect(() => {
    let computedX = x;
    let computedY = y;

    if (position === 'bottom-right') {
      // Calculate bottom-right coordinates
      computedX = window.innerWidth - 50; // Adjust size offset
      computedY = window.innerHeight - 50;
    }

    const intervalId = setInterval(() => {
      const ripple: Ripple = {
        id: `${Date.now()}-${Math.random()}`,
        x: computedX,
        y: computedY,
      };

      dispatch({ type: 'ADD_RIPPLE', payload: ripple });

      setTimeout(() => {
        dispatch({ type: 'REMOVE_RIPPLE', payload: ripple.id });
      }, duration);
    }, duration / 2);

    return () => {
      clearInterval(intervalId);
    };
  }, [x, y, duration, position]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripplest-container"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        >
          <div className="ripplest-border"></div>
        </div>
      ))}
    </div>
  );
};

export default RippleStatic2;

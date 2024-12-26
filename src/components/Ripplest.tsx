import React, { useReducer, useEffect } from 'react';

interface Ripple {
  id: string;
  x: number;
  y: number;
}

interface RippleStaticProps {
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
      return [...state, action.payload].slice(-30); // Limit ripple count
    case 'REMOVE_RIPPLE':
      return state.filter((ripple) => ripple.id !== action.payload);
    default:
      return state;
  }
};

const RippleStatic: React.FC<RippleStaticProps> = ({
  maxSize = 0.4,
  duration = 1000,
  position,
}) => {
  const [ripples, dispatch] = useReducer(rippleReducer, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let ranx = Math.floor(Math.random() * window.innerWidth);
      let rany = Math.floor(Math.random() * window.innerHeight);

      const ripple: Ripple = {
        id: `${Date.now()}-${Math.random()}`,
        x: ranx,
        y: rany,
      };

      dispatch({ type: 'ADD_RIPPLE', payload: ripple });

      setTimeout(() => {
        dispatch({ type: 'REMOVE_RIPPLE', payload: ripple.id });
      }, duration);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [duration, position]);

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

export default RippleStatic;

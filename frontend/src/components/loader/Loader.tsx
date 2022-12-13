import React, { FunctionComponent } from 'react';
import styles from './loader.module.scss';

const Loader: FunctionComponent = () => {
  return (
    <svg className={styles.svg}>
      <g className="circles">
        <circle
          id={styles.inner}
          cx="125"
          cy="125"
          r="50"
          fill="none"
          strokeWidth="12px"
          stroke="#4c73ff"
        ></circle>
      </g>
    </svg>
  );
};

export default Loader;

import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';

const CountdownTimer = () => {
  const initialTimeInSeconds = 60; // Initial time in seconds
  const [remainingTime, setRemainingTime] = useState(initialTimeInSeconds);

  useEffect(() => {
    let interval;

    if (remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      handleTimeUp();
    }

    return () => clearInterval(interval);
  }, [remainingTime]);

  const handleTimeUp = () => {
    // Do something when the timer reaches zero
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${'00'}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CountdownTimer;

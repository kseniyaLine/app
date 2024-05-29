import React, { useEffect } from 'react';
import LiveActivity  from 'react-native-live-activity';
import { LiveActivityParams } from "./types/index";

const LiveActivityComponent = () => {
  useEffect(() => {
    const startActivity = async () => {
      try {
        const liveActivity = new LiveActivity<LiveActivityParams>(
          {
          title: '',
          message: '',
         }
        );
        const activityId = await liveActivity.startActivity(
          {
          title: 'Hello World',
          message: 'This is a live activity notification!',
         }
        );

        return () => {
          liveActivity.stopLiveActivity(activityId);
        };
      } catch (error) {
        console.error('Error starting live activity:', error);
      }
    };

    startActivity();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз после монтирования компонента

  return null;


};

export default LiveActivityComponent; 
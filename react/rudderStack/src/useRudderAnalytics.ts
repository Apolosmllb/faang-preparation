import { useEffect, useState } from "react";
import { RudderAnalytics } from "@rudderstack/analytics-js";

const useRudderStackAnalytics = (): RudderAnalytics | undefined => {
  const [analytics, setAnalytics] = useState<RudderAnalytics>();

  useEffect(() => {
    if (!analytics) {
      const analyticsInstance = new RudderAnalytics();
      analyticsInstance.load(
        "APIKEY",
        "LINK"
      );

      analyticsInstance.ready(() => {
        console.log("We are all set!!!");
      });

      window.rudderanalytics = analyticsInstance;
      setAnalytics(analyticsInstance);
    }
  }, [analytics]);

  return analytics;
};

export default useRudderStackAnalytics;
//npm install @rudderstack/analytics-js --save

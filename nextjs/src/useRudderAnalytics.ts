import { useEffect, useState } from "react";
import { RudderAnalytics } from "@rudderstack/analytics-js";

const useRudderStackAnalytics = (): RudderAnalytics | undefined => {
  const [analytics, setAnalytics] = useState<RudderAnalytics>();

  useEffect(() => {
    if (!analytics) {
      const analyticsInstance = new RudderAnalytics();
      analyticsInstance.load(
        "2bVfHSkYQsKBnF6bZbp2yIe7fyw",
        "https://fractalserxbrj.dataplane.rudderstack.com"
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
